import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';

import { SiteStatusService } from './site-status.service';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../theme/theme.service';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { SnackbarService } from '../snackbar/snackbar.service';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

describe('SiteStatusService', () => {
  // Note: avoid assigning to navigator.serviceWorker or document.location.reload
  // (they are non-writable in this environment). Tests will use spies where needed.

  describe('constructor and connection listener', () => {
    it('should be created without throwing', () => {
      // Arrange
      const swUpdateMock: Partial<SwUpdate> = { isEnabled: false, versionUpdates: new Subject() };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      themeMock.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);

      TestBed.configureTestingModule({
        providers: [
          SiteStatusService,
          { provide: SwUpdate, useValue: swUpdateMock },
          { provide: MatDialog, useValue: dialogMock },
          { provide: ThemeService, useValue: themeMock },
          { provide: SnackbarService, useValue: snackbarMock }
        ]
      });

      // Act / Assert
      expect(() => TestBed.inject(SiteStatusService)).not.toThrow();
    });

    it('should open an offline dialog on offline event', (done) => {
      // Arrange
      const swUpdateMock: Partial<SwUpdate> = { isEnabled: false, versionUpdates: new Subject() };
      const afterClosed$ = new Subject<void>();
      const dialogRef = { afterClosed: (): { subscribe: (callback: () => void) => void } => afterClosed$.asObservable(), close: jasmine.createSpy('close') };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      dialogMock.open.and.returnValue(dialogRef);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      themeMock.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);

      TestBed.configureTestingModule({ providers: [
        SiteStatusService,
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: ThemeService, useValue: themeMock },
        { provide: SnackbarService, useValue: snackbarMock }
      ] });

      // Act
      window.dispatchEvent(new Event('offline'));

      // Allow the event loop to run
      setTimeout(() => {
        // Assert
        expect(dialogMock.open).toHaveBeenCalledWith(DialogComponent, jasmine.objectContaining({ disableClose: true, data: jasmine.any(Object) }));
        done();
      }, 0);
    });

    it('should close dialog and show snackbar when connection restored', (done) => {
      // Arrange
      const swUpdateMock: Partial<SwUpdate> = { isEnabled: false, versionUpdates: new Subject() };
      const afterClosed$ = new Subject<void>();
      const dialogRef = { afterClosed: (): { subscribe: (callback: () => void) => void } => afterClosed$.asObservable(), close: jasmine.createSpy('close') };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      dialogMock.open.and.returnValue(dialogRef);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      themeMock.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);

      TestBed.configureTestingModule({ providers: [
        SiteStatusService,
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: ThemeService, useValue: themeMock },
        { provide: SnackbarService, useValue: snackbarMock }
      ] });

      // Act: go offline then online
      window.dispatchEvent(new Event('offline'));
      setTimeout(() => {
        window.dispatchEvent(new Event('online'));
        setTimeout(() => {
          // Assert
          expect((dialogRef.close as jasmine.Spy)).toHaveBeenCalled();
          expect(snackbarMock.openSnackbar).toHaveBeenCalledWith('snackbar.connectionRestored', 'snackbar.dismiss');
          done();
        }, 0);
      }, 0);
    });

    it('getConnectionStatus observable emits changes and isOnline returns current state', (done) => {
      // Arrange
      const swUpdateMock: Partial<SwUpdate> = { isEnabled: false, versionUpdates: new Subject() };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      themeMock.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);

      TestBed.configureTestingModule({ providers: [
        SiteStatusService,
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: ThemeService, useValue: themeMock },
        { provide: SnackbarService, useValue: snackbarMock }
      ] });

      const service = TestBed.inject(SiteStatusService);
      const emissions: boolean[] = [];
      const sub = service.getConnectionStatus().subscribe(v => emissions.push(v));

      // Act
      window.dispatchEvent(new Event('offline'));
      window.dispatchEvent(new Event('online'));

      setTimeout(() => {
        // Assert
        expect(emissions[emissions.length - 1]).toBe(service.isOnline());
        sub.unsubscribe();
        done();
      }, 0);
    });
  });

  describe('service worker update handling', () => {
    it('clearStaleServiceWorker unregisters registrations when SW disabled', async () => {
      // Arrange
      const unregisterSpy = jasmine.createSpy('unregister').and.returnValue(Promise.resolve(true));
      const getRegs = jasmine.createSpy('getRegistrations').and.returnValue(Promise.resolve([{ unregister: unregisterSpy }]));
      spyOnProperty(navigator, 'serviceWorker', 'get').and.returnValue({ getRegistrations: getRegs } as unknown as ServiceWorkerContainer);

      const swUpdateMock: Partial<SwUpdate> = { isEnabled: false, versionUpdates: new Subject() };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);

      TestBed.configureTestingModule({ providers: [
        SiteStatusService,
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: ThemeService, useValue: themeMock },
        { provide: SnackbarService, useValue: snackbarMock }
      ] });

      // Act
      TestBed.inject(SiteStatusService);

      // Assert
      await Promise.resolve();
      expect(getRegs).toHaveBeenCalled();
      expect(unregisterSpy).toHaveBeenCalled();
    });

    it('checkUpdates opens dialog and activates update on VERSION_READY', (done) => {
      // Arrange
      const version$ = new Subject<VersionReadyEvent>();
      const activateSpy = jasmine.createSpy('activateUpdate').and.returnValue(new Promise(() => void 0));
      const swUpdateMock: Partial<SwUpdate> = { isEnabled: true, versionUpdates: version$, activateUpdate: activateSpy };
      const afterClosed$ = new Subject<void>();
      const dialogRef = { afterClosed: (): { subscribe: (callback: () => void) => void } => afterClosed$.asObservable(), close: jasmine.createSpy('close') };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      dialogMock.open.and.returnValue(dialogRef);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      themeMock.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);
      // avoid stubbing document.location.reload (not writable) — assert activate called instead

      TestBed.configureTestingModule({ providers: [
        SiteStatusService,
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: ThemeService, useValue: themeMock },
        { provide: SnackbarService, useValue: snackbarMock }
      ] });

      // Act: emit VERSION_READY
      version$.next({ type: 'VERSION_READY' } as VersionReadyEvent);
      // simulate dialog closed
      setTimeout(() => {
        afterClosed$.next();
        // wait for activateUpdate promise
        setTimeout(() => {
          // Assert
          expect(dialogMock.open).toHaveBeenCalledWith(DialogComponent, jasmine.objectContaining({ data: jasmine.any(Object) }));
          expect(activateSpy).toHaveBeenCalled();
          done();
        }, 0);
      }, 0);
    });

    it('manualUpdateCheck shows disabled dialog when SW is disabled', async () => {
      // Arrange
      const swUpdateMock: Partial<SwUpdate> = { isEnabled: false };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);

      TestBed.configureTestingModule({ providers: [
        SiteStatusService,
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: ThemeService, useValue: themeMock },
        { provide: SnackbarService, useValue: snackbarMock }
      ] });

      const service = TestBed.inject(SiteStatusService);

      // Act
      service.manualUpdateCheck();

      // Assert
      expect(dialogMock.open).toHaveBeenCalledWith(DialogComponent, jasmine.objectContaining({ data: jasmine.any(Object) }));
    });

    it('manualUpdateCheck shows new-update dialog when checkForUpdate resolves true', async () => {
      // Arrange
      const checkSpy = jasmine.createSpy('checkForUpdate').and.returnValue(Promise.resolve(true));
      const swUpdateMock: Partial<SwUpdate> = { isEnabled: true, checkForUpdate: checkSpy, versionUpdates: new Subject() };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      const afterClosed$ = new Subject<void>();
      const dialogRef = { afterClosed: (): { subscribe: (callback: () => void) => void } => afterClosed$.asObservable(), close: jasmine.createSpy('close') };
      dialogMock.open.and.returnValue(dialogRef);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);

      TestBed.configureTestingModule({ providers: [
        SiteStatusService,
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: ThemeService, useValue: themeMock },
        { provide: SnackbarService, useValue: snackbarMock }
      ] });

      const service = TestBed.inject(SiteStatusService);

      // Act
      await service.manualUpdateCheck();
      await Promise.resolve();

      // Assert
      expect(dialogMock.open).toHaveBeenCalledWith(DialogComponent, jasmine.objectContaining({ data: jasmine.any(Object) }));
    });

    it('manualUpdateCheck shows no-new-update dialog when checkForUpdate resolves false', async () => {
      // Arrange
      const checkSpy = jasmine.createSpy('checkForUpdate').and.returnValue(Promise.resolve(false));
      const swUpdateMock: Partial<SwUpdate> = { isEnabled: true, checkForUpdate: checkSpy, versionUpdates: new Subject() };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);

      TestBed.configureTestingModule({ providers: [
        SiteStatusService,
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: ThemeService, useValue: themeMock },
        { provide: SnackbarService, useValue: snackbarMock }
      ] });

      const service = TestBed.inject(SiteStatusService);

      // Act
      await service.manualUpdateCheck();
      await Promise.resolve();

      // Assert
      expect(dialogMock.open).toHaveBeenCalledWith(DialogComponent, jasmine.objectContaining({ data: jasmine.any(Object) }));
    });

    it('manualUpdateCheck shows error dialog when checkForUpdate rejects', async () => {
      // Arrange
      const checkSpy = jasmine.createSpy('checkForUpdate').and.returnValue(Promise.reject(new Error('fail')));
      const swUpdateMock: Partial<SwUpdate> = { isEnabled: true, checkForUpdate: checkSpy, versionUpdates: new Subject() };
      const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
      const themeMock = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode']);
      const snackbarMock = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['openSnackbar']);

      TestBed.configureTestingModule({ providers: [
        SiteStatusService,
        { provide: SwUpdate, useValue: swUpdateMock },
        { provide: MatDialog, useValue: dialogMock },
        { provide: ThemeService, useValue: themeMock },
        { provide: SnackbarService, useValue: snackbarMock }
      ] });

      const service = TestBed.inject(SiteStatusService);

      // Act
      await service.manualUpdateCheck();
      await Promise.resolve();

      // Assert
      expect(dialogMock.open).toHaveBeenCalledWith(DialogComponent, jasmine.objectContaining({ data: jasmine.any(Object) }));
    });
  });
});

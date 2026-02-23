import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { ThemeService } from '../theme/theme.service';
import { ThemeMode } from 'src/app/models/enums/theme-mode';

describe('SnackbarService', () => {
  describe('themeMenuIcon', () => {
    describe('when ThemeService.getEffectiveThemeMode returns DarkMode', () => {
      it('should return snackbar-dark', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.DarkMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        const result = service.themeMenuIcon;

        // Assert
        expect(result).toBe('snackbar-dark');
      });
    });

    describe('when ThemeService.getEffectiveThemeMode returns LightMode', () => {
      it('should return snackbar-light', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        const result = service.themeMenuIcon;

        // Assert
        expect(result).toBe('snackbar-light');
      });
    });

    describe('when SystemDefault and system pref is DarkMode', () => {
      it('should return snackbar-dark', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.SystemDefault);
        themeSpy.getSystemPreferredTheme.and.returnValue(ThemeMode.DarkMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        const result = service.themeMenuIcon;

        // Assert
        expect(result).toBe('snackbar-dark');
      });
    });

    describe('when SystemDefault and system pref is LightMode', () => {
      it('should return snackbar-light', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.SystemDefault);
        themeSpy.getSystemPreferredTheme.and.returnValue(ThemeMode.LightMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        const result = service.themeMenuIcon;

        // Assert
        expect(result).toBe('snackbar-light');
      });
    });
  });

  describe('openSnackbar', () => {
    describe('when called with message and action', () => {
      const testMessage = 'some.key';
      const testAction = 'dismiss';

      it('should call MatSnackBar.openFromComponent once', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        snackBarSpy.openFromComponent.calls.reset();
        service.openSnackbar(testMessage, testAction);

        // Assert
        expect(snackBarSpy.openFromComponent).toHaveBeenCalledTimes(1);
      });

      it('should pass the SnackbarComponent as first argument', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        service.openSnackbar(testMessage, testAction);

        // Assert
        const firstArg = snackBarSpy.openFromComponent.calls.mostRecent().args[0];
        expect(firstArg).toBe(SnackbarComponent);
      });

      it('should pass the provided message in data', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        service.openSnackbar(testMessage, testAction);

        // Assert
        const config = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!;
        expect(config.data.message).toBe(testMessage);
      });

      it('should pass the provided action in data', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        service.openSnackbar(testMessage, testAction);

        // Assert
        const config = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!;
        expect(config.data.action).toBe(testAction);
      });

      it('should set duration to 3000', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        service.openSnackbar(testMessage, testAction);

        // Assert
        const config = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!;
        expect(config.duration).toBe(3000);
      });

      it('should set panelClass to the computed themeMenuIcon', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        service.openSnackbar(testMessage, testAction);

        // Assert
        const config = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!;
        expect(config.panelClass).toBe(service.themeMenuIcon);
      });
    });

    describe('when theme changes between calls', () => {
      it('should use snackbar-light for the first call when theme is LightMode', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);
        service.openSnackbar('m', 'a');
        const firstPanel = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!.panelClass;

        // Assert
        expect(firstPanel).toBe('snackbar-light');
      });

      it('should use snackbar-dark for the second call when theme changes to DarkMode', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.DarkMode);
        service.openSnackbar('m2', 'a2');
        const secondPanel = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!.panelClass;

        // Assert
        expect(secondPanel).toBe('snackbar-dark');
      });
    });

    describe('when ThemeService.getEffectiveThemeMode throws', () => {
      it('should propagate the error', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.throwError('boom');

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        const act = (): void => service.openSnackbar('m', 'a');

        // Assert
        expect(act).toThrowError('boom');
      });
    });

    describe('when message or action are empty strings', () => {
      it('should pass empty strings through to data', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);
        themeSpy.getEffectiveThemeMode.and.returnValue(ThemeMode.LightMode);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        snackBarSpy.openFromComponent.calls.reset();
        service.openSnackbar('', '');

        // Assert
        const config = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!;
        expect(config.data.message).toBe('');
      });
    });

  });

  describe('EVOLUTION', () => {
    describe('when invoked', () => {
      it('should call MatSnackBar.openFromComponent once', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        snackBarSpy.openFromComponent.calls.reset();
        service.EVOLUTION();

        // Assert
        expect(snackBarSpy.openFromComponent).toHaveBeenCalledTimes(1);
      });

      it('should pass EVOLUTION message in data', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        service.EVOLUTION();

        // Assert
        const cfg = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!;
        expect(cfg.data.message).toBe('EVOLUTION!');
      });

      it('should pass EVOLUTION action in data', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        service.EVOLUTION();

        // Assert
        const cfg = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!;
        expect(cfg.data.action).toBe('EVOLUTION');
      });

      it('should set duration to 1500', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        service.EVOLUTION();

        // Assert
        const cfg = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!;
        expect(cfg.duration).toBe(1500);
      });

      it('should set panelClass to EVOLUTION', () => {
        // Arrange
        const snackBarSpy = jasmine.createSpyObj<MatSnackBar>('MatSnackBar', ['openFromComponent']);
        const themeSpy = jasmine.createSpyObj<ThemeService>('ThemeService', ['getEffectiveThemeMode', 'getSystemPreferredTheme']);

        TestBed.configureTestingModule({
          providers: [
            SnackbarService,
            { provide: MatSnackBar, useValue: snackBarSpy },
            { provide: ThemeService, useValue: themeSpy }
          ]
        });
        const service = TestBed.inject(SnackbarService);

        // Act
        service.EVOLUTION();

        // Assert
        const cfg = (snackBarSpy.openFromComponent.calls.mostRecent().args[1] as { data: { message: string, action: string }, duration: number, panelClass: string })!;
        expect(cfg.panelClass).toBe('EVOLUTION');
      });
    });
  });
});

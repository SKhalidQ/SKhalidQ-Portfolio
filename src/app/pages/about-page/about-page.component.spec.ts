import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AboutPageComponent } from './about-page.component';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { AboutCredits } from 'src/app/models/data/about-credits';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { SiteStatusService } from 'src/app/services/site-status/site-status.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}

describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;

  const effectiveTheme$ = new BehaviorSubject<ThemeMode>(ThemeMode.LightMode);
  const mockThemeService: Partial<ThemeService> = {
    effectiveThemeMode$: effectiveTheme$,
    getEffectiveThemeMode: (): ThemeMode => effectiveTheme$.getValue()
  };

  // use a real BehaviorSubject for activePage so it matches the service type
  const activePageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  let activePageNextSpy: jasmine.Spy;
  const mockActivePageService: Partial<ActivePageService> = {
    activePage: activePageSubject
  };

  const mockSiteStatusService: Partial<SiteStatusService> = {
    manualUpdateCheck: jasmine.createSpy('manualUpdateCheck')
  };

  const mockTranslationService: Partial<TranslationService> = {
    getTextPath: jasmine.createSpy('getTextPath').and.callFake((k: string) => k)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPageComponent, MockTranslatePipe],
      providers: [
        { provide: ThemeService, useValue: mockThemeService },
        { provide: ActivePageService, useValue: mockActivePageService },
        { provide: SiteStatusService, useValue: mockSiteStatusService },
        { provide: TranslationService, useValue: mockTranslationService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    // create spy inside beforeEach per Jasmine requirements
    activePageNextSpy = spyOn(activePageSubject, 'next').and.callThrough();
  });

  describe('ngOnInit', () => {
    describe('when component initializes', () => {
      it('should call activePageService.activePage.next with "pages.About"', () => {
        // Arrange
        activePageNextSpy.calls.reset();

        // Act
        fixture.detectChanges(); // runs ngOnInit

        // Assert
        expect(activePageNextSpy).toHaveBeenCalledTimes(1);
        const arg: string = activePageNextSpy.calls.mostRecent().args[0] as string;
        expect(arg).toContain('pages.');
        expect(arg.toLowerCase()).toContain('about');
      });
    });
  });

  describe('changeColour', () => {
    describe('when effective theme is DarkMode', () => {
      it('should return "dark-theme"', () => {
        // Arrange
        effectiveTheme$.next(ThemeMode.DarkMode);
        fixture.detectChanges();

        // Act
        const result: string = component.changeColour;

        // Assert
        expect(result).toBe('dark-theme');
      });
    });

    describe('when effective theme is LightMode', () => {
      it('should return "light-theme"', () => {
        // Arrange
        effectiveTheme$.next(ThemeMode.LightMode);
        fixture.detectChanges();

        // Act
        const result: string = component.changeColour;

        // Assert
        expect(result).toBe('light-theme');
      });
    });

    describe('when effective theme is unknown', () => {
      it('should default to "light-theme"', () => {
        // Arrange
        (effectiveTheme$ as BehaviorSubject<unknown>).next(undefined);
        fixture.detectChanges();

        // Act
        const result: string = component.changeColour;

        // Assert
        expect(result).toBe('light-theme');
      });
    });
  });

  describe('currentYear', () => {
    describe('when called', () => {
      it('should return the current year', () => {
        // Arrange
        const expected: number = new Date().getFullYear();

        // Act
        const year: number = component.currentYear;

        // Assert
        expect(year).toBe(expected);
      });
    });
  });

  describe('copyright', () => {
    describe('when called', () => {
      it('should contain the current year and a version substring', () => {
        // Arrange
        const year: string = new Date().getFullYear().toString();

        // Act
        const text: string = component.copyright;

        // Assert
        expect(text).toContain(year);
        expect(text.toLowerCase()).toContain('v');
      });
    });
  });

  describe('checkForUpdates', () => {
    describe('when invoked', () => {
      it('should call siteStatusService.manualUpdateCheck once', () => {
        // Arrange
        const spy: jasmine.Spy = mockSiteStatusService.manualUpdateCheck as jasmine.Spy;
        spy.calls.reset();

        // Act
        component.checkForUpdates();

        // Assert
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('onImageError', () => {
    describe('when fallback already applied', () => {
      it('should not change src or classes', () => {
        // Arrange
        const img: HTMLImageElement = document.createElement('img');
        img.dataset['fallbackApplied'] = '1';
        img.src = 'original.png';
        img.className = '';

        // Act
        component.onImageError(img);

        // Assert
        expect(img.src).toContain('original.png');
        expect(img.classList.contains('img--fallback')).toBeFalse();
      });
    });

    describe('when no fallback applied', () => {
      it('should set dataset flag, replace src and add fallback class', () => {
        // Arrange
        const img: HTMLImageElement = document.createElement('img');
        delete img.dataset['fallbackApplied'];
        img.src = 'original.png';
        img.className = '';

        // Act
        component.onImageError(img);

        // Assert
        expect(img.dataset['fallbackApplied']).toBe('1');
        expect(img.src).toContain('assets/images/icons/error_outline-14px.svg');
        expect(img.classList.contains('img--fallback')).toBeTrue();
      });
    });
  });

  describe('static properties', () => {
    describe('logoPath', () => {
      it('should point to the expected group logo path', () => {
        expect(component.logoPath).toBe('../../../assets/images/logos/group_logo_transparent.png');
      });
    });

    describe('aboutCredits', () => {
      it('should reference the AboutCredits model', () => {
        expect(component.aboutCredits).toBe(AboutCredits);
        expect(Array.isArray(component.aboutCredits)).toBeTrue();
      });
    });

    describe('checkUpdate config', () => {
      it('should contain expected text and icon keys', () => {
        const cfg = component.checkUpdate as { text: string; icon: string } | undefined;
        expect(cfg).toBeDefined();
        if (cfg) {
          expect(cfg.text).toContain('aboutPage');
          expect(cfg.icon).toBeDefined();
        }
      });
    });
  });
});

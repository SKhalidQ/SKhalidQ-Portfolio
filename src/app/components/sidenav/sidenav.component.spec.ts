import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';

import { SidenavComponent } from './sidenav.component';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { LanguageService } from 'src/app/services/language/language.service';
import { Language } from 'src/app/models/enums/language';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { EvolutionService } from 'src/app/services/easter-egg/evolution.service';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown { return value; }
}

@Pipe({ name: 'socialButtonLogo' })
class MockSocialButtonLogoPipe implements PipeTransform {
  transform(value: unknown): unknown { return value; }
}

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  // ThemeService mocks
  const themeModeSubject = new BehaviorSubject<ThemeMode>(ThemeMode.LightMode);
  const effectiveThemeSubject = new BehaviorSubject<ThemeMode>(ThemeMode.LightMode);
  const mockThemeService: Partial<ThemeService> = {
    themeMode: themeModeSubject,
    themeMode$: themeModeSubject.asObservable(),
    effectiveThemeMode$: effectiveThemeSubject.asObservable(),
    getSystemPreferredTheme: (): ThemeMode => ThemeMode.LightMode,
    getEffectiveThemeMode: (): ThemeMode => ThemeMode.LightMode,
    setTheme: jasmine.createSpy('setTheme') as unknown as (theme: ThemeMode) => void
  };

  // LanguageService mock
  const languageSubject = new BehaviorSubject<Language>(Language.enGB);
  const mockLanguageService: Partial<LanguageService> = {
    currentLanguage: languageSubject,
    currentLanguage$: languageSubject.asObservable(),
    setLanguage: jasmine.createSpy('setLanguage') as unknown as (lang: Language) => void
  };

  // ActivePageService mock
  const activePageSubject = new BehaviorSubject<string>('');
  const mockActivePageService: Partial<ActivePageService> = { activePage: activePageSubject, activePage$: activePageSubject.asObservable() };

  // SnackbarService mock
  const mockSnackbarService: Partial<SnackbarService> = { openSnackbar: jasmine.createSpy('openSnackbar') };

  // TranslationService mock
  const mockTranslationService: Partial<TranslationService> = { getTextPath: (k: string) => `translated.${k}` };

  // EvolutionService mock
  const mockEvolutionService: Partial<EvolutionService> = { runEasterEgg: jasmine.createSpy('runEasterEgg') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent, MockTranslatePipe, MockSocialButtonLogoPipe],
      providers: [
        { provide: ThemeService, useValue: mockThemeService },
        { provide: LanguageService, useValue: mockLanguageService },
        { provide: ActivePageService, useValue: mockActivePageService },
        { provide: SnackbarService, useValue: mockSnackbarService },
        { provide: TranslationService, useValue: mockTranslationService },
        { provide: EvolutionService, useValue: mockEvolutionService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('closeSidenav', () => {
    describe('when called', () => {
      it('emits toggleSidenav', () => {
        // Arrange
        const emitSpy = spyOn(component.toggleSidenav, 'emit');

        // Act
        component.closeSidenav();

        // Assert
        expect(emitSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('updateTheme', () => {
    describe('when called with DarkMode', () => {
      it('applies the new theme and opens a snackbar', () => {
        // Arrange
        (mockThemeService.setTheme as jasmine.Spy).calls.reset();
        (mockSnackbarService.openSnackbar as jasmine.Spy).calls.reset();

        // Act
        component.updateTheme('DarkMode');

        // Assert
        expect(mockThemeService.setTheme).toHaveBeenCalled();
        expect(mockSnackbarService.openSnackbar).toHaveBeenCalled();
      });
    });
  });

  describe('onImageError', () => {
    describe('when an image errors and fallback not applied', () => {
      it('sets dataset fallbackApplied, replaces src and adds fallback class', () => {
        // Arrange
        const img = document.createElement('img') as HTMLImageElement;

        // Act
        component.onImageError(img);

        // Assert
        expect(img.dataset['fallbackApplied']).toBe('1');
        expect(img.src).toContain('assets/images/icons/error_outline-14px.svg');
        expect(img.classList.contains('img--fallback')).toBeTrue();
      });
    });
  });
});

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { MenuBaseComponentDirective } from './menu-base-component.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { EvolutionService } from 'src/app/services/easter-egg/evolution.service';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { Language } from 'src/app/models/enums/language';
import { BreakpointObserver } from '@angular/cdk/layout';

class MockThemeService {
  public themeMode = new BehaviorSubject<ThemeMode>(ThemeMode.LightMode);
  public themeMode$ = this.themeMode.asObservable();
  private eff = new BehaviorSubject<ThemeMode>(ThemeMode.LightMode);
  public effectiveThemeMode$ = this.eff.asObservable();

  getSystemPreferredTheme(): ThemeMode {
    return ThemeMode.LightMode;
  }

  setTheme(theme: ThemeMode): void {
    this.themeMode.next(theme);
  }

  nextEffective(theme: ThemeMode): void {
    this.eff.next(theme);
  }
}

class MockLanguageService {
  public currentLanguage = new BehaviorSubject<Language>(Language.enGB);
  public currentLanguage$ = this.currentLanguage.asObservable();

  setLanguage(lang: Language): void {
    this.currentLanguage.next(lang);
  }
}

class MockSnackbarService { openSnackbar = jasmine.createSpy('openSnackbar'); }
class MockTranslationService { getTextPath = (p: string, args?: string[]): string => p + (args ? `:${args.join(',')}` : ''); }
class MockEvolutionService { runEasterEgg = jasmine.createSpy('runEasterEgg'); }
class MockActivePageService {}

@Component({ template: '<div appMenuBaseComponent></div>' })
class TestHostComponent {}

describe('ngOnInit - MenuBaseComponentDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: MenuBaseComponentDirective;
  let mockTheme: MockThemeService;
  let mockLang: MockLanguageService;
  let mockSnackbar: MockSnackbarService;
  let mockTranslation: MockTranslationService;
  let mockEaster: MockEvolutionService;

  beforeEach(async () => {
    mockTheme = new MockThemeService();
    mockLang = new MockLanguageService();
    mockSnackbar = new MockSnackbarService();
    mockTranslation = new MockTranslationService();
    mockEaster = new MockEvolutionService();

    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [MenuBaseComponentDirective, NoopAnimationsModule],
      providers: [
        { provide: ThemeService, useValue: mockTheme },
        { provide: LanguageService, useValue: mockLang },
        { provide: SnackbarService, useValue: mockSnackbar },
        { provide: TranslationService, useValue: mockTranslation },
        { provide: EvolutionService, useValue: mockEaster },
        { provide: ActivePageService, useValue: new MockActivePageService() },
        { provide: BreakpointObserver, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    const debugEl = fixture.debugElement.query(By.directive(MenuBaseComponentDirective));
    directive = debugEl.injector.get(MenuBaseComponentDirective) as MenuBaseComponentDirective;
  });

  describe('when initialised with default theme and language', () => {
    it('should set themeMenu and languageMenu options with correct isActive flags', () => {
      // Arrange: defaults are LightMode and enGB in mocks
      // Act
      fixture.detectChanges();

      const activeThemeOption = directive.themeMenu.options?.find(o => o.isActive);
      const activeLangOption = directive.languageMenu.options?.find(o => o.isActive);

      // Assert
      expect(activeThemeOption?.key).toBe(ThemeMode.LightMode);
      expect(activeLangOption?.key).toBe(Language.enGB);
    });
  });

  describe('themeMenuIcon - when themeMode is SystemDefault and effective theme is DarkMode', () => {
    it('should return dark_mode', () => {
      // Arrange
      mockTheme.themeMode.next(ThemeMode.SystemDefault);
      mockTheme.nextEffective(ThemeMode.DarkMode);

      // Act
      fixture.detectChanges();

      // Assert
      expect(directive.themeMenuIcon).toBe('dark_mode');
    });
  });

  describe('updateTheme - when called', () => {
    it('should set theme in themeService and open a snackbar', () => {
      // Arrange
      fixture.detectChanges();

      // Act
      directive.updateTheme('DarkMode');

      // Assert
      expect(mockTheme.themeMode.getValue()).toBe(ThemeMode.DarkMode);
      expect(mockSnackbar.openSnackbar).toHaveBeenCalled();
    });
  });

  describe('updateLanguage - when called', () => {
    it('should set language in languageService and open a snackbar', () => {
      // Arrange
      fixture.detectChanges();

      // Act
      directive.updateLanguage('esES');

      // Assert
      expect(mockLang.currentLanguage.getValue()).toBe(Language.esES);
      expect(mockSnackbar.openSnackbar).toHaveBeenCalled();
    });
  });

  describe('navigationButtons - when about button method invoked', () => {
    it('should run the easter egg for the about button', () => {
      // Arrange
      fixture.detectChanges();
      const aboutButton = directive.navigationButtons.find(b => b.text.includes('about'));

      // Act
      aboutButton?.method?.();

      // Assert
      expect(mockEaster.runEasterEgg).toHaveBeenCalled();
    });
  });

  describe('onImageError - when fallback not applied', () => {
    it('should set fallbackApplied and update src + class', () => {
      // Arrange
      const img = document.createElement('img');

      // Act
      directive.onImageError(img);

      // Assert
      expect(img.dataset['fallbackApplied']).toBe('1');
      expect(img.src).toContain('assets/images/icons/error_outline-14px.svg');
      expect(img.classList.contains('img--fallback')).toBeTrue();
    });
  });
});


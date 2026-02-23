import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { HeaderComponent } from './header.component';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { EvolutionService } from 'src/app/services/easter-egg/evolution.service';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { Language } from 'src/app/models/enums/language';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const bpSubject = new BehaviorSubject<import('@angular/cdk/layout').BreakpointState>({ matches: false, breakpoints: { [Breakpoints.Small]: false, [Breakpoints.XSmall]: false } });
  const mockBreakpointObserver: Partial<BreakpointObserver> = {
    observe: () => bpSubject.asObservable()
  };

  const mockThemeService: Partial<ThemeService> = {
    themeMode: new BehaviorSubject<ThemeMode>(ThemeMode.LightMode),
    effectiveThemeMode$: new BehaviorSubject<ThemeMode>(ThemeMode.LightMode).asObservable(),
    getSystemPreferredTheme: (): ThemeMode => ThemeMode.LightMode,
    getEffectiveThemeMode: (): ThemeMode => ThemeMode.LightMode,
    setTheme: jasmine.createSpy('setTheme') as unknown as (t: ThemeMode) => void
  };

  const mockLanguageService: Partial<LanguageService> = {
    currentLanguage: new BehaviorSubject<Language>(Language.enGB),
    currentLanguage$: new BehaviorSubject<Language>(Language.enGB).asObservable(),
    setLanguage: jasmine.createSpy('setLanguage') as unknown as (l: Language) => void
  };

  const mockActivePageService: Partial<ActivePageService> = { activePage: new BehaviorSubject<string>('') };
  const mockSnackbarService: Partial<SnackbarService> = { openSnackbar: jasmine.createSpy('openSnackbar') };
  const mockTranslationService: Partial<TranslationService> = { getTextPath: (k: string) => `translated.${k}` };
  const mockEvolutionService: Partial<EvolutionService> = { runEasterEgg: jasmine.createSpy('runEasterEgg') };

  beforeEach(async () => {
    TestBed.overrideComponent(HeaderComponent, { set: { template: '<div></div>' } });
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: BreakpointObserver, useValue: mockBreakpointObserver },
        { provide: ThemeService, useValue: mockThemeService },
        { provide: LanguageService, useValue: mockLanguageService },
        { provide: ActivePageService, useValue: mockActivePageService },
        { provide: SnackbarService, useValue: mockSnackbarService },
        { provide: TranslationService, useValue: mockTranslationService },
        { provide: EvolutionService, useValue: mockEvolutionService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('getSideNavToggleIcon', () => {
    describe('when isSideNav is true', () => {
      it('returns clear', () => {
        // Arrange
        component.isSideNav = true;

        // Act
        const icon = component.getSideNavToggleIcon;

        // Assert
        expect(icon).toBe('clear');
      });
    });

    describe('when isSideNav is false', () => {
      it('returns menu', () => {
        // Arrange
        component.isSideNav = false;

        // Act
        const icon = component.getSideNavToggleIcon;

        // Assert
        expect(icon).toBe('menu');
      });
    });
  });

  describe('hideMenuButtons', () => {
    describe('when rendered inside sidenav', () => {
      it('returns false', () => {
        // Arrange
        component.isSideNav = true;

        // Act
        const hidden = component.hideMenuButtons;

        // Assert
        expect(hidden).toBeFalse();
      });
    });

    describe('when not in sidenav and not small/xsmall', () => {
      it('returns true', () => {
        // Arrange
        component.isSideNav = false;
        bpSubject.next({ matches: false, breakpoints: { [Breakpoints.Small]: false, [Breakpoints.XSmall]: false } });

        // Act
        const hidden = component.hideMenuButtons;

        // Assert
        expect(hidden).toBeTrue();
      });
    });

    describe('when not in sidenav and small screen', () => {
      it('returns false', () => {
        // Arrange
        component.isSideNav = false;
        bpSubject.next({ matches: true, breakpoints: { [Breakpoints.Small]: true, [Breakpoints.XSmall]: false } });

        // Act
        const hidden = component.hideMenuButtons;

        // Assert
        expect(hidden).toBeFalse();
      });
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { TranslationService } from './translation.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { Language } from 'src/app/models/enums/language';
import { enGB } from 'src/app/languages/en-gb';
import { esES } from 'src/app/languages/es-es';
import { caES } from 'src/app/languages/ca-es';
import { urPK } from 'src/app/languages/ur-pk';

describe('TranslationService', () => {
  describe('construction and default behaviour', () => {
    it('should default to English bundle when language is enGB', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });

      // Act
      const service = TestBed.inject(TranslationService);

      // Assert
      expect(service.getText('navigationButtons').home).toBeDefined();
    });

    it('should update strings when LanguageService emits a new language', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      lang$.next(Language.esES);

      // Assert
      expect(service.getTextPath('navigationButtons.home')).toBe(esES.navigationButtons.home);
    });
  });

  describe('setLanguageStrings', () => {
    it('should switch to Spanish bundle when called with esES', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      service.setLanguageStrings(Language.esES);

      // Assert
      expect(service.getTextPath('navigationButtons.home')).toBe(esES.navigationButtons.home);
    });

    it('should switch to Catalan bundle when called with caES', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      service.setLanguageStrings(Language.caES);

      // Assert
      expect(service.getTextPath('languageMenu.options.caES')).toBe(caES.languageMenu.options.caES);
    });

    it('should switch to Urdu bundle when called with urPK', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      service.setLanguageStrings(Language.urPK);

      // Assert
      expect(service.getTextPath('languageMenu.options.urPK')).toBe(urPK.languageMenu.options.urPK);
    });
  });

  describe('getText and getTextPath', () => {
    it('getText returns existing top-level key value', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      const key = 'navigationButtons' as unknown as keyof typeof enGB;
      const result = service.getText(key) as typeof enGB.navigationButtons;

      // Assert
      expect(result.home).toBe(enGB.navigationButtons.home);
    });

    it('getText returns key when missing', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      const key = 'noSuchKey' as unknown as keyof typeof enGB;
      const result = service.getText(key);

      // Assert
      expect(result).toBe('noSuchKey' as unknown as typeof enGB[typeof key]);
    });

    it('getTextPath resolves nested dot-paths', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      const text = service.getTextPath('navigationButtons.home');

      // Assert
      expect(text).toBe('Home');
    });

    it('getTextPath returns path when a segment is missing', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      const text = service.getTextPath('no.such.path');

      // Assert
      expect(text).toBe('no.such.path');
    });

    it('getTextPath returns path when the leaf is an object', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      const text = service.getTextPath('projects');

      // Assert
      expect(text).toBe('projects');
    });

    it('getTextPath interpolates single replacement', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      const text = service.getTextPath('snackbar.themeChanged', ['Dark']);

      // Assert
      expect(text).toBe('Theme changed to Dark');
    });

    it('getTextPath leaves template unchanged when replacements array is empty', () => {
      // Arrange
      const lang$ = new BehaviorSubject<Language>(Language.enGB);
      const mockLangSvc = { currentLanguage$: lang$ };
      TestBed.configureTestingModule({ providers: [{ provide: LanguageService, useValue: mockLangSvc }] });
      const service = TestBed.inject(TranslationService);

      // Act
      const text = service.getTextPath('snackbar.themeChanged', []);

      // Assert
      expect(text).toBe('Theme changed to {0}');
    });
  });
});

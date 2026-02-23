import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { Language } from 'src/app/models/enums/language';

describe('getInitialLanguage - LanguageService', () => {
  let service: LanguageService;

  afterEach(() => {
    const getItemSpy = localStorage.getItem as unknown as jasmine.Spy | undefined;
    if (getItemSpy?.and) {
      getItemSpy.and.callThrough();
    }
  });

  describe('when localStorage contains a valid language key', () => {
    beforeEach(() => {
      spyOn(localStorage, 'getItem').and.returnValue('esES');
      TestBed.configureTestingModule({ providers: [LanguageService] });
      service = TestBed.inject(LanguageService);
    });

    it('should initialize currentLanguage to the stored value', () => {
      expect(service.currentLanguage.getValue()).toBe(Language.esES);
    });
  });

  describe('when localStorage is empty and navigator.language includes es', () => {
    beforeEach(() => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      spyOnProperty(window.navigator, 'language', 'get').and.returnValue('es-ES');

      TestBed.configureTestingModule({ providers: [LanguageService] });
      service = TestBed.inject(LanguageService);
    });

    it('should resolve to Language.esES', () => {
      expect(service.currentLanguage.getValue()).toBe(Language.esES);
    });
  });

  describe('when navigator.language includes ca', () => {
    beforeEach(() => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      spyOnProperty(window.navigator, 'language', 'get').and.returnValue('ca-ES');

      TestBed.configureTestingModule({ providers: [LanguageService] });
      service = TestBed.inject(LanguageService);
    });

    it('should resolve to Language.caES', () => {
      expect(service.currentLanguage.getValue()).toBe(Language.caES);
    });
  });

  describe('when navigator.language includes ur', () => {
    beforeEach(() => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      spyOnProperty(window.navigator, 'language', 'get').and.returnValue('ur-PK');

      TestBed.configureTestingModule({ providers: [LanguageService] });
      service = TestBed.inject(LanguageService);
    });

    it('should resolve to Language.urPK', () => {
      expect(service.currentLanguage.getValue()).toBe(Language.urPK);
    });
  });

  describe('when navigator.language does not match known locales', () => {
    beforeEach(() => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      spyOnProperty(window.navigator, 'language', 'get').and.returnValue('fr-FR');

      TestBed.configureTestingModule({ providers: [LanguageService] });
      service = TestBed.inject(LanguageService);
    });

    it('should default to Language.enGB', () => {
      expect(service.currentLanguage.getValue()).toBe(Language.enGB);
    });
  });
});

describe('setLanguage - LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(localStorage, 'setItem');

    TestBed.configureTestingModule({ providers: [LanguageService] });
    service = TestBed.inject(LanguageService);
  });

  it('should persist the selected language to localStorage', () => {
    // Act
    service.setLanguage(Language.caES);

    // Assert
    expect((localStorage.setItem as jasmine.Spy)).toHaveBeenCalledWith('Language', Language.caES);
  });

  it('should update the currentLanguage BehaviorSubject value', () => {
    // Act
    service.setLanguage(Language.urPK);

    // Assert
    expect(service.currentLanguage.getValue()).toBe(Language.urPK);
  });

  it('should emit the new language via currentLanguage$', (done) => {
    // Act: set first so subscribe receives only the new value synchronously
    service.setLanguage(Language.caES);

    // Assert
    service.currentLanguage$.subscribe((value: Language) => {
      expect(value).toBe(Language.caES);
      done();
    });
  });

});

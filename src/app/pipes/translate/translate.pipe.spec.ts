import { TranslatePipe } from './translate.pipe';
import { Injector, runInInjectionContext } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

class MockTranslationService {
  getTextPath = jasmine.createSpy('getTextPath').and.callFake((p: string, replacements?: (string|number)[]) => {
    // simple stub: return known mapping, otherwise return the key itself
    const map: Record<string,string> = {
      'greeting.hello': 'Hello',
      'greeting.withPlaceholder': 'Hello {0} {1}'
    };

    const val = map[p];
    if (!val) return p; // mimic missing key

    if (replacements && replacements.length) {
      return replacements.reduce((acc, cur, idx) => String(acc).replace(`{${idx}}`, String(cur)), val);
    }

    return val;
  });
}

describe('transform - TranslatePipe', () => {
  let pipe: TranslatePipe;
  let mock: MockTranslationService;

  beforeEach(async () => {
    mock = new MockTranslationService();
    await (await import('@angular/core/testing')).TestBed.configureTestingModule({
      providers: [{ provide: TranslationService, useValue: mock }]
    });
    const injector = (await import('@angular/core/testing')).TestBed.inject(Injector);
    pipe = runInInjectionContext(injector, () => new TranslatePipe());
  });

  describe('when path is null/empty/whitespace', () => {
    it('should return empty string for null', () => {
      const res = pipe.transform(null as unknown as string);
      expect(res).toBe('');
    });

    it('should return empty string for empty string', () => {
      const res = pipe.transform('');
      expect(res).toBe('');
    });

    it('should return empty string for whitespace-only string', () => {
      const res = pipe.transform('   ');
      expect(res).toBe('');
    });
  });

  describe('when translation exists and no replacements provided', () => {
    it('should return the translated string', () => {
      const res = pipe.transform('greeting.hello');
      expect(res).toBe('Hello');
      expect(mock.getTextPath).toHaveBeenCalledWith('greeting.hello');
    });
  });

  describe('when translation exists and replacements provided as array', () => {
    it('should interpolate replacements from array', () => {
      const res = pipe.transform('greeting.withPlaceholder', ['John','Doe']);
      expect(res).toBe('Hello John Doe');
      expect(mock.getTextPath).toHaveBeenCalledWith('greeting.withPlaceholder', ['John','Doe']);
    });
  });

  describe('when translation exists and replacements provided as rest args', () => {
    it('should interpolate replacements passed as rest params', () => {
      const res = pipe.transform('greeting.withPlaceholder', undefined, 'Jane', 'Smith');
      expect(res).toBe('Hello Jane Smith');
      // when fallbackOrReplacements is undefined, rest replacements should be forwarded
      expect(mock.getTextPath).toHaveBeenCalledWith('greeting.withPlaceholder', ['Jane','Smith']);
    });
  });

  describe('when translation returns the key (missing) and fallback provided', () => {
    it('should return the fallback string', () => {
      const res = pipe.transform('unknown.key', 'fallback value');
      expect(res).toBe('fallback value');
      expect(mock.getTextPath).toHaveBeenCalledWith('unknown.key');
    });
  });

  describe('when translation returns an object (unexpected) and fallback provided', () => {
    it('should return fallback when service returns non-string', () => {
      // Arrange: make getTextPath return an object for this key
      mock.getTextPath.and.callFake((p: string) => (p === 'obj.key' ? ({}) : p));

      // Act
      const res = pipe.transform('obj.key', 'fb');

      // Assert
      expect(res).toBe('fb');
      expect(mock.getTextPath).toHaveBeenCalledWith('obj.key');
    });
  });

  describe('when translation returns key and no fallback provided', () => {
    it('should return the original trimmed path', () => {
      const res = pipe.transform('unknown.path ');
      expect(res).toBe('unknown.path');
    });
  });
});


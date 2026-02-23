import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { ThemeMode } from 'src/app/models/enums/theme-mode';

type MatchMediaFn = ((q: string) => MediaQueryList) | undefined;
interface ServiceWithSystem { systemTheme: { value: ThemeMode; next(v: ThemeMode): void } };

describe('ThemeService', () => {
  const storageKey = 'ThemeMode';

  function restoreMatchMedia(orig?: MatchMediaFn): void {
    if (typeof orig === 'undefined') {
      delete (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
    } else {
      (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = orig;
    }
  }

  describe('getSystemPreferredTheme', () => {
    describe('when matchMedia is absent', () => {
      it('should return LightMode', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        delete (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        const result = service.getSystemPreferredTheme();

        // Assert
        expect(result).toBe(ThemeMode.LightMode);

        // Cleanup
        restoreMatchMedia(orig);
      });
    });

    describe('when media query matches dark', () => {
      it('should return DarkMode', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => ({ matches: true } as MediaQueryList);
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        const result = service.getSystemPreferredTheme();

        // Assert
        expect(result).toBe(ThemeMode.DarkMode);

        // Cleanup
        restoreMatchMedia(orig);
      });
    });
  });

  describe('initialization', () => {
    describe('when localStorage has a valid ThemeMode', () => {
      it('should initialize themeMode from localStorage', () => {
        // Arrange
        const origMatch: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        spyOn(localStorage, 'getItem').and.returnValue('DarkMode');
        TestBed.configureTestingModule({});

        // Act
        const service = TestBed.inject(ThemeService);

        // Assert
        expect(service.themeMode.value).toBe(ThemeMode.DarkMode);

        // Cleanup
        restoreMatchMedia(origMatch);
      });
    });

    describe('when localStorage missing or invalid', () => {
      it('should fall back to SystemDefault', () => {
        // Arrange
        const origMatch: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        spyOn(localStorage, 'getItem').and.returnValue(null);
        TestBed.configureTestingModule({});

        // Act
        const service = TestBed.inject(ThemeService);

        // Assert
        expect(service.themeMode.value).toBe(ThemeMode.SystemDefault);

        // Cleanup
        restoreMatchMedia(origMatch);
      });
    });

    describe('systemTheme initialisation', () => {
      it('should set systemTheme to DarkMode when matchMedia.matches true', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        const mock: Partial<MediaQueryList> & { matches: boolean } = { matches: true };
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => mock as MediaQueryList;
        TestBed.configureTestingModule({});

        // Act
        const service = TestBed.inject(ThemeService);

        // Assert
        expect((service as unknown as ServiceWithSystem).systemTheme.value).toBe(ThemeMode.DarkMode);

        // Cleanup
        restoreMatchMedia(orig);
      });
    });
  });

  describe('listeners', () => {
    describe('when addEventListener exists', () => {
      it('should update systemTheme when the event fires', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        const mock: Partial<MediaQueryList> & {
          matches: boolean;
          _cb?: (e: { matches: boolean }) => void;
          addEventListener?: (ev: string, cb: EventListenerOrEventListenerObject) => void;
          removeEventListener?: (...args: unknown[]) => void;
        } = {
          matches: false,
          _cb: undefined,
          addEventListener: (ev: string, cb: EventListenerOrEventListenerObject): void => { mock._cb = (typeof cb === 'function' ? (cb as unknown as (e: { matches: boolean }) => void) : (e: { matches: boolean }): void => (cb as EventListenerObject).handleEvent(e as unknown as Event)); },
          removeEventListener: jasmine.createSpy('remove')
        };
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => mock as MediaQueryList;
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        mock._cb?.({ matches: true });

        // Assert
        expect((service as unknown as ServiceWithSystem).systemTheme.value).toBe(ThemeMode.DarkMode);

        // Cleanup
        restoreMatchMedia(orig);
      });
    });

    describe('when only addListener exists', () => {
      it('should update systemTheme when the legacy callback runs', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        const mock: Partial<MediaQueryList> & {
          matches: boolean;
          _cb?: (e: { matches: boolean }) => void;
          addListener?: (cb: (e: { matches: boolean }) => void) => void;
          removeListener?: (...args: unknown[]) => void;
        } = {
          matches: false,
          _cb: undefined,
          addListener: (cb: (e: { matches: boolean }) => void) => { mock._cb = cb; },
          removeListener: jasmine.createSpy('remove')
        };
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => mock as MediaQueryList;
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        mock._cb?.({ matches: true });

        // Assert
        expect((service as unknown as ServiceWithSystem).systemTheme.value).toBe(ThemeMode.DarkMode);

        // Cleanup
        restoreMatchMedia(orig);
      });
    });
  });

  describe('ngOnDestroy', () => {
    describe('when removeEventListener available', () => {
      it('should call removeEventListener with the listener', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        const removeSpy = jasmine.createSpy('removeEventListener');
        const mock: Partial<MediaQueryList> & {
          matches: boolean;
          addEventListener?: (ev: string, cb: (e: { matches: boolean }) => void) => void;
          removeEventListener?: (...args: unknown[]) => void;
        } = { matches: false, addEventListener: () => { /* saved */ }, removeEventListener: removeSpy };
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => mock as MediaQueryList;
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        service.ngOnDestroy();

        // Assert
        expect(removeSpy).toHaveBeenCalledWith('change', jasmine.any(Function));

        // Cleanup
        restoreMatchMedia(orig);
      });
    });

    describe('when only legacy removeListener exists', () => {
      it('should call removeListener with the listener', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        const removeSpy = jasmine.createSpy('removeListener');
        const mock: Partial<MediaQueryList> & {
          matches: boolean;
          addListener?: (cb: (e: { matches: boolean }) => void) => void;
          removeListener?: (...args: unknown[]) => void;
        } = { matches: false, addListener: () => { /* saved */ }, removeListener: removeSpy };
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => mock as MediaQueryList;
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        service.ngOnDestroy();

        // Assert
        expect(removeSpy).toHaveBeenCalledWith(jasmine.any(Function));

        // Cleanup
        restoreMatchMedia(orig);
      });
    });
  });

  describe('setTheme', () => {
    describe('when called with DarkMode', () => {
      it('should persist to localStorage and emit new value', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        const setSpy = spyOn(localStorage, 'setItem');
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        service.setTheme(ThemeMode.DarkMode);

        // Assert
        expect(setSpy).toHaveBeenCalledWith(storageKey, ThemeMode.DarkMode);
        expect(service.themeMode.value).toBe(ThemeMode.DarkMode);

        // Cleanup
        restoreMatchMedia(orig);
      });
    });

    describe('when called with SystemDefault', () => {
      it('should persist SystemDefault and emit it', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        const setSpy = spyOn(localStorage, 'setItem');
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        service.setTheme(ThemeMode.SystemDefault);

        // Assert
        expect(setSpy).toHaveBeenCalledWith(storageKey, ThemeMode.SystemDefault);
        expect(service.themeMode.value).toBe(ThemeMode.SystemDefault);

        // Cleanup
        restoreMatchMedia(orig);
      });
    });
  });

  describe('getEffectiveThemeMode', () => {
    describe('when themeMode is SystemDefault', () => {
      it('should resolve to current systemTheme', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => ({ matches: true } as MediaQueryList);
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        service.themeMode.next(ThemeMode.SystemDefault);
        (service as unknown as ServiceWithSystem).systemTheme.next(ThemeMode.DarkMode);
        const result = service.getEffectiveThemeMode();

        // Assert
        expect(result).toBe(ThemeMode.DarkMode);

        // Cleanup
        restoreMatchMedia(orig);
      });
    });

    describe('when themeMode is explicit', () => {
      it('should return the explicit selection', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => ({ matches: true } as MediaQueryList);
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);

        // Act
        service.themeMode.next(ThemeMode.LightMode);
        (service as unknown as ServiceWithSystem).systemTheme.next(ThemeMode.DarkMode);
        const result = service.getEffectiveThemeMode();

        // Assert
        expect(result).toBe(ThemeMode.LightMode);

        // Cleanup
        restoreMatchMedia(orig);
      });
    });
  });

  describe('effectiveThemeMode$', () => {
    describe('when resolving duplicates and reacting to system changes', () => {
      it('should emit resolved values and filter duplicates', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => ({ matches: false } as MediaQueryList);
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);
        const emissions: ThemeMode[] = [];
        const sub = service.effectiveThemeMode$.subscribe(v => emissions.push(v));

        // Act
        service.themeMode.next(ThemeMode.SystemDefault);
        (service as unknown as ServiceWithSystem).systemTheme.next(ThemeMode.DarkMode);
        (service as unknown as ServiceWithSystem).systemTheme.next(ThemeMode.DarkMode); // duplicate
        (service as unknown as ServiceWithSystem).systemTheme.next(ThemeMode.LightMode);

        // Assert
        expect(emissions).toEqual([ThemeMode.LightMode, ThemeMode.DarkMode, ThemeMode.LightMode]);

        // Cleanup
        sub.unsubscribe();
        restoreMatchMedia(orig);
      });
    });

    describe('when explicit selection is set', () => {
      it('should not change effectiveThemeMode when system changes', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia = (): MediaQueryList => ({ matches: false } as MediaQueryList);
        TestBed.configureTestingModule({});
        const service = TestBed.inject(ThemeService);
        const emissions: ThemeMode[] = [];
        const sub = service.effectiveThemeMode$.subscribe(v => emissions.push(v));

        // Act
        service.themeMode.next(ThemeMode.DarkMode);
        (service as unknown as ServiceWithSystem).systemTheme.next(ThemeMode.LightMode);

        // Assert
        expect(emissions[emissions.length - 1]).toBe(ThemeMode.DarkMode);

        // Cleanup
        sub.unsubscribe();
        restoreMatchMedia(orig);
      });
    });
  });

  describe('constructor edge cases', () => {
    describe('when matchMedia is absent', () => {
      it('should construct without throwing', () => {
        // Arrange
        const orig: MatchMediaFn = (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        delete (window as unknown as { matchMedia?: MatchMediaFn }).matchMedia;
        TestBed.configureTestingModule({});

        // Act / Assert
        expect(() => TestBed.inject(ThemeService)).not.toThrow();

        // Cleanup
        restoreMatchMedia(orig);
      });
    });
  });
});

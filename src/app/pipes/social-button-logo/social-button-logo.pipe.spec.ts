import { SocialButtonLogoPipe } from './social-button-logo.pipe';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { NavigationButton } from 'src/app/models/interfaces/navigation-button';

describe('transform - SocialButtonLogoPipe', () => {
  let pipe: SocialButtonLogoPipe;

  beforeEach(() => {
    pipe = new SocialButtonLogoPipe();
  });

  describe('when input is null or undefined', () => {
    it('should return empty array for null and [] for undefined', () => {
      // Act
      const resNull = pipe.transform(null, ThemeMode.LightMode);
      const resUndef = pipe.transform(undefined, ThemeMode.DarkMode);

      // Assert
      expect(Array.isArray(resNull)).toBeTrue();
      expect(resNull.length).toBe(0);
      expect(Array.isArray(resUndef)).toBeTrue();
      expect(resUndef.length).toBe(0);
    });
  });

  describe('when provided buttons and effectiveTheme is DarkMode', () => {
    it('should replace "-dark" with "-light" in icon paths', () => {
      // Arrange
      const buttons: NavigationButton[] = [
        { text: 'github', icon: 'github-dark', route: '/x' },
        { text: 'twitter', icon: 'twitter-light', route: '/y' }
      ];

      // Act
      const out = pipe.transform(buttons, ThemeMode.DarkMode);

      // Assert
      expect(out.length).toBe(2);
      expect(out[0].icon).toBe('github-light');
      // second had no '-dark' so should remain unchanged because replacement returns same
      expect(out[1].icon).toBe('twitter-light');
    });
  });

  describe('when provided buttons and effectiveTheme is LightMode', () => {
    it('should replace "-light" with "-dark" in icon paths', () => {
      // Arrange
      const buttons: NavigationButton[] = [
        { text: 'fb', icon: 'fb-light', route: '/a' },
        { text: 'ig', icon: 'ig-dark', route: '/b' }
      ];

      // Act
      const out = pipe.transform(buttons, ThemeMode.LightMode);

      // Assert
      expect(out[0].icon).toBe('fb-dark');
      expect(out[1].icon).toBe('ig-dark');
    });
  });
});


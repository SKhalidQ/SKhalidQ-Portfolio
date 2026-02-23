import { GithubLogoPipe } from './github-logo.pipe';
import { ThemeMode } from 'src/app/models/enums/theme-mode';

describe('transform - GithubLogoPipe', () => {
  let pipe: GithubLogoPipe;

  beforeEach(() => {
    pipe = new GithubLogoPipe();
  });

  describe('when repository is private', () => {
    it('should return disabled icon path regardless of theme', () => {
      // Arrange
      const base = 'base/path';

      // Act
      const result1 = pipe.transform(false, ThemeMode.DarkMode, base);
      const result2 = pipe.transform(false, ThemeMode.LightMode, base);
      const result3 = pipe.transform(false, null, base);

      // Assert
      expect(result1).toBe('base/path/github-brands-disabled.svg');
      expect(result2).toBe('base/path/github-brands-disabled.svg');
      expect(result3).toBe('base/path/github-brands-disabled.svg');
    });
  });

  describe('when repository is public', () => {
    it('should return light variant when effectiveTheme is null/undefined', () => {
      // Arrange
      const base = 'icons';

      // Act
      const res = pipe.transform(true, null, base);

      // Assert
      expect(res).toBe('icons/github-brands-light.svg');
    });

    it('should return light-on-dark when effectiveTheme is DarkMode', () => {
      // Act
      const res = pipe.transform(true, ThemeMode.DarkMode, undefined);

      // Assert
      expect(res).toContain('github-brands-light.svg');
    });

    it('should return dark-on-light when effectiveTheme is LightMode', () => {
      // Act
      const res = pipe.transform(true, ThemeMode.LightMode, '../../../assets/images/icons');

      // Assert
      expect(res).toContain('github-brands-dark.svg');
    });
  });
});


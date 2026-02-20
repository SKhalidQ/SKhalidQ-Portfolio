import { Pipe, PipeTransform } from '@angular/core';
import { ThemeMode } from 'src/app/models/enums/theme-mode';

@Pipe({
  name: 'githubLogo',
  pure: true
})
/**
 * @description
 * Pure pipe that resolves the correct GitHub logo icon path based on
 * repository visibility and the current effective theme.
 * - Private repositories always use the disabled (greyed-out) icon.
 * - Public repositories use the light or dark variant to contrast with the
 *   current background.
 */
export class GithubLogoPipe implements PipeTransform {

  /**
   * @description Returns the path to the appropriate GitHub logo SVG asset.
   * @param {boolean} isRepoPublic - Whether the project repository is publicly accessible.
   * @param {ThemeMode | null | undefined} effectiveTheme - The current resolved theme from `effectiveThemeMode$`.
   * @param {string} [basePath='../../../assets/images/icons'] - Base asset directory path.
   * @returns {string} The resolved SVG asset path.
   */
  transform(isRepoPublic: boolean, effectiveTheme: ThemeMode | null | undefined, basePath = '../../../assets/images/icons'): string {
    if (!isRepoPublic) {
      return `${basePath}/github-brands-disabled.svg`;
    }

    if (!effectiveTheme) {
      return `${basePath}/github-brands-light.svg`;
    }

    const isDark = effectiveTheme === ThemeMode.DarkMode;
    return `${basePath}/github-brands-${isDark ? 'light' : 'dark'}.svg`;
  }
}

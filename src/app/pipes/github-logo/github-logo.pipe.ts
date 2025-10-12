import { Pipe, PipeTransform } from '@angular/core';
import { ThemeMode } from 'src/app/models/enums/theme-mode';

@Pipe({
  name: 'githubLogo',
  pure: true
})
export class GithubLogoPipe implements PipeTransform {

  transform(isRepoPublic: boolean, effectiveTheme: ThemeMode | null | undefined, basePath = '../../../assets/images/icons'): string {
    if (!isRepoPublic) {
      return `${basePath}/github-brands-disabled.svg`;
    }

    if (!effectiveTheme) {
      return `${basePath}/github-brands-light.svg`;
    }

    const isDark = effectiveTheme === ThemeMode.DarkMode;
    return isDark ? `${basePath}/github-brands-light.svg` : `${basePath}/github-brands-dark.svg`;
  }
}

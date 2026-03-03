import { Component, inject, OnInit } from '@angular/core';
import { HomeContentData } from 'src/app/models/data/home-content';
import { Page } from 'src/app/models/enums/page';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
/**
 * @description
 * Page component for the Home/landing section.
 * Displays introductory content and theme-aware preview images for the
 * Projects and CV pages.
 */
export class HomePageComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly activePageService = inject(ActivePageService);

  /** Base path for preview image assets. */
  private readonly baseImagePath = './assets/images/previews';
  /** Static home page content data. */
  readonly homeData = HomeContentData;

  /**
   * @description Sets the active page key so the header bottom bar reflects the Home page.
   * @returns {void}
   */
  ngOnInit(): void {
    this.activePageService.activePage.next(`pages.${Page[Page.Home]}`);
  }

  /**
   * @description
   * Returns the theme-appropriate preview image path for the Projects page.
   * Resolves `SystemDefault` using the OS preference.
   * @returns {string} Absolute asset path to the correct projects preview PNG.
   */
  get projectImagePath(): string {
    switch (this.themeService.themeMode.getValue()) {
      case ThemeMode.DarkMode:
        return `${this.baseImagePath}/ProjectPreviewDark.png`;
      case ThemeMode.LightMode:
        return `${this.baseImagePath}/ProjectPreviewLight.png`;
      case ThemeMode.SystemDefault:
        {
          const systemTheme = this.themeService.getSystemPreferredTheme();
          return `${this.baseImagePath}/ProjectPreview${systemTheme === ThemeMode.DarkMode ? 'Dark' : 'Light'}.png`;
        }
    }
  }

  /**
   * @description
   * Returns the theme-appropriate preview image path for the CV/Curriculum page.
   * Resolves `SystemDefault` using the OS preference.
   * @returns {string} Absolute asset path to the correct CV preview PNG.
   */
  get cvImagePath(): string {
    switch (this.themeService.themeMode.getValue()) {
      case ThemeMode.DarkMode:
        return `${this.baseImagePath}/CVPreviewDark.png`;
      case ThemeMode.LightMode:
        return `${this.baseImagePath}/CVPreviewLight.png`;
      case ThemeMode.SystemDefault:
        {
          const systemTheme = this.themeService.getSystemPreferredTheme();
          return `${this.baseImagePath}/CVPreview${systemTheme === ThemeMode.DarkMode ? 'Dark' : 'Light'}.png`;
        }
    }
  }
}

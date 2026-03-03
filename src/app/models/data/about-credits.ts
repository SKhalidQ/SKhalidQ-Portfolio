import { VERSION as AngularVersion } from '@angular/core';
import { VERSION as AngularMaterialVersion } from '@angular/material/core';
import { AboutCredit } from '../interfaces/about-credit';

export const AboutCredits: AboutCredit[] = [
  {
    title: 'Angular',
    version: `v${AngularVersion.full}`,
    imagePath: '../../assets/images/logos/Angular-logo.png',
    pageUrl: 'https://angular.io/'
  },
  {
    title: 'Angular Material',
    version: `v${AngularMaterialVersion.full}`,
    imagePath: '../../assets/images/logos/angular-material-logo.png',
    pageUrl: 'https://material.angular.io/'
  },
  {
    title: 'Hosted on Netlify',
    imagePath: '../../assets/images/logos/netlify-logo.png',
    pageUrl: 'https://www.netlify.com/'
  }
];

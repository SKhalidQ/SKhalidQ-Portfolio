import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page } from 'src/app/models/enums/page';
import { SharedModule } from 'src/app/shared/shared.module';

import { AboutPageComponent } from './about-page.component';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AboutPageComponent, data: { pageTitle: Page.About } },
    ]),
  ],
})
export class AboutPageModule {}

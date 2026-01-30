import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page } from 'src/app/models/enums/page';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent, data: { pageTitle: Page.Home } },
    ]),
  ],
})
export class HomePageModule {}

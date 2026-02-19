import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { AboutPageComponent } from './about-page.component';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    SharedModule,
  ],
})
export class AboutPageModule {}

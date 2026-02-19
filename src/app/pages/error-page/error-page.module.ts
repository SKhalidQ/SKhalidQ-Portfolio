import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ErrorPageComponent } from './error-page.component';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    SharedModule,
  ],
})
export class ErrorPageModule {}

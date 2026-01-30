import { HttpStatusCode } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page } from 'src/app/models/enums/page';
import { SharedModule } from 'src/app/shared/shared.module';

import { ErrorPageComponent } from './error-page.component';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ErrorPageComponent,
        data: { pageTitle: Page.Error, statusCode: HttpStatusCode.NotFound },
      },
    ]),
  ],
})
export class ErrorPageModule {}

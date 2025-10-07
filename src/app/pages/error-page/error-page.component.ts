import { HttpStatusCode } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivePageService } from 'src/app/services/activePage/active-page.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  private readonly activePageService = inject(ActivePageService);
  private readonly activatedRoute = inject(ActivatedRoute);

  errorMessage: string = '';

  ngOnInit(): void {
    this.activePageService.activePage.next('Error');
  }

  get statusCode(): { statusCode: number; title: string } {
    const code: HttpStatusCode = (this.activatedRoute.snapshot.data['statusCode']
      ?? history.state?.statusCode
      ?? HttpStatusCode.InternalServerError);

    const map: Record<number, { title: string; msg: string }> = {
      [HttpStatusCode.Forbidden]: {
        title: 'Forbidden',
        msg: 'errorPage.forbidden'
      },
      [HttpStatusCode.NotFound]: {
        title: 'Not Found',
        msg: 'errorPage.notFound'
      },
      [HttpStatusCode.InternalServerError]: {
        title: 'Internal Server Error',
        msg: 'errorPage.genericError'
      }
    };

    const info = map[code] ?? map[HttpStatusCode.InternalServerError];
    this.errorMessage = info.msg;

    return { statusCode: code, title: info.title };
  }
}

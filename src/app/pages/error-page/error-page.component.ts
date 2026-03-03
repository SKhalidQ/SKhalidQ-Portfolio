import { HttpStatusCode } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
/**
 * @description
 * Page component displayed for all error routes (404, 403, 500).
 * Reads the HTTP status code from route data or navigation state and
 * renders an appropriate title and message.
 */
export class ErrorPageComponent implements OnInit {
  private readonly activePageService = inject(ActivePageService);
  private readonly activatedRoute = inject(ActivatedRoute);

  /** Translated error message key populated by the {@link statusCode} getter. */
  errorMessage = '';

  /**
   * @description Sets the active page label to 'Error' in the header bottom bar.
   * @returns {void}
   */
  ngOnInit(): void {
    this.activePageService.activePage.next('Error');
  }

  /**
   * @description
   * Resolves the HTTP status code and title from route data or navigation history state.
   * Falls back to 500 Internal Server Error when no code is available.
   * As a side effect, sets {@link errorMessage} to the appropriate translation key.
   * @returns {{ statusCode: number; title: string }} An object containing the numeric `statusCode` and a human-readable `title`.
   */
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

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Page } from 'src/app/models/enums/page';

@Injectable({
  providedIn: 'root'
})
/**
 * @description
 * Service that tracks the currently active page in the application.
 * Consumed by the header component to display the current page title
 * in the bottom toolbar row.
 */
export class ActivePageService {

  /** BehaviorSubject emitting the translation key of the current active page. */
  activePage = new BehaviorSubject<string>(`pages.${Page[Page.Home]}`);
  activePage$ = this.activePage.asObservable();
}

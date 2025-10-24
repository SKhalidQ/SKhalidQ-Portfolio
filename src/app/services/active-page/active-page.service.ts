import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Page } from 'src/app/models/enums/page';
import { ActivePage } from 'src/app/models/interfaces/active-page';

@Injectable({
  providedIn: 'root'
})
export class ActivePageService {

  private activePage = new BehaviorSubject<ActivePage>({ page: `pages.${Page[Page.Home]}` });
  public readonly activePage$ = this.activePage.asObservable();

  setActivePage(activePage: ActivePage): void {
    this.activePage.next(activePage);
  }
}

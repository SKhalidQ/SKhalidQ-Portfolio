import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Page } from 'src/app/models/enums/page';

@Injectable({
  providedIn: 'root'
})
export class ActivePageService {

  activePage = new BehaviorSubject<string>(`pages.${Page[Page.Home]}`);
  activePage$ = this.activePage.asObservable();
}

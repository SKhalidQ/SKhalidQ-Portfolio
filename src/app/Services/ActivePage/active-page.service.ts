import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivePageService {

  activePage = new BehaviorSubject<string>('');
  
  //Change to activePageName$
  activePage$ = this.activePage.asObservable();

  constructor() { }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivePageService {
  
  constructor() { }

  activePage = new BehaviorSubject<string>('');
  activePage$ = this.activePage.asObservable();

}

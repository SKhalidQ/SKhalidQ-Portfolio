import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageNameService {
  sectionName = new BehaviorSubject<string>('Home');
  
  //Change to activePageName$
  sectionNameChanging = this.sectionName.asObservable();

  constructor() { }
}

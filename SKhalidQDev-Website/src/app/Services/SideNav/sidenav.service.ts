import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  isSidenavActive = new BehaviorSubject<boolean>(false);

  isSidenavActive$ = this.isSidenavActive.asObservable();
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  language = new BehaviorSubject<string>("English");

  activeLanguage$ = this.language.asObservable();

  constructor() { }
}

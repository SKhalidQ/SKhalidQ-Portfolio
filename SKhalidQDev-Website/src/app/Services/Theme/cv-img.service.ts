import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CVImgService {

  constructor() { }

  cvImage = new BehaviorSubject<string>('../../../assets/Images/CVPreviewDark.png');
  cvImage$ = this.cvImage.asObservable();

}

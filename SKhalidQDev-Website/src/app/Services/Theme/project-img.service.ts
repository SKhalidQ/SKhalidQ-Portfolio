import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectImgService {

  constructor() { }

  projectImage = new BehaviorSubject<string>('../../../assets/Images/ProjectPreviewDark.png');
  projectImage$ = this.projectImage.asObservable();

}

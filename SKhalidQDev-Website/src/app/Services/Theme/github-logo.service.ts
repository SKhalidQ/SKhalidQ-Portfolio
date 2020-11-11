import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubLogoService {

  constructor() { }

  githubLogo = new BehaviorSubject<string>('../assets/Images/github-brands-dark.svg');
  githubLogo$ = this.githubLogo.asObservable();
  
}

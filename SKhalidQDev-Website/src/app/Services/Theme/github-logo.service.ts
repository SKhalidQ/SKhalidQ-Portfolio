import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubLogoService {

  githubLogo = new BehaviorSubject<string>('../assets/Images/github-brands-light.svg');
  
  githubLogo$ = this.githubLogo.asObservable();
}

import { GithubLogoService } from 'src/app/Services/Theme/github-logo.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input() item: any;

  tooltipTxt: string;

  constructor(public githubService: GithubLogoService) { }

  GetTooltipText(publicRepo: boolean) {
    if (!publicRepo){
      return "Available at request";
    } else {
      return "Github Repository Link";
    }
  }

}

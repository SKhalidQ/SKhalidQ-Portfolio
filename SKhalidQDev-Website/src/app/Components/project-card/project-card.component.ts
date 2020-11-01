import { Component, Input, OnInit } from '@angular/core';
import { GithubLogoService } from 'src/app/Services/Theme/github-logo.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input() item: any;

  tooltipTxt: string;

  // githubLogo: string = "../../../../assets/Images/github-brands-dark.svg";

  constructor(public githubService: GithubLogoService) { }

  GetTooltipText(publicRepo: boolean) {
    if (!publicRepo){
      return "Available at request";
    } else {
      return "Github Repository Link";
    }
  }

}

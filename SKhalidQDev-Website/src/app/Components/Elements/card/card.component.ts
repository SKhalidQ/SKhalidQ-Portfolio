import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/Models/card-Models';
import { GithubLogoService } from 'src/app/Services/Theme/github-logo.service';
import { ThemeService } from 'src/app/Services/Theme/theme.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  tooltipTxt: string;
  cardData = Projects;

  // githubLogo: string = "../../../../assets/Images/github-brands-dark.svg";

  constructor(public githubService: GithubLogoService) { 

  }

  GetTooltipText(publicRepo: boolean) {
    if (!publicRepo){
      return "Available at request";
    } else {
      return "Github Repository Link";
    }
  }

  ngOnInit(): void {
  }

}
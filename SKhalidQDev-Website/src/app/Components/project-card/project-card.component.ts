import { ThemeService } from 'src/app/Services/theme.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: []
})
export class ProjectCardComponent {

  @Input() project: any;

  tooltipTxt: string;
  lightGithub = '../assets/Images/github-brands-light.svg';
  darkGithub = '../assets/Images/github-brands-dark.svg';
  disabledGithub = '../assets/Images/github-brands-disabled.svg';

  constructor(private http: HttpClient, public themeService: ThemeService) { }

  GetTooltipText(publicRepo: boolean): string {
    return !publicRepo ? 'Available at request' : 'GitHub Repository Link';
  }

}

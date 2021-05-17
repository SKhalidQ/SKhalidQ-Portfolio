import { ThemeService } from 'src/app/Services/theme.service';
import { ProjectModel } from 'src/app/Models/projects';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  animations: []
})
export class ProjectCardComponent {

  @Input() project: ProjectModel | any;

  tooltipTxt: string | any;
  lightGithub = '../assets/Images/github-brands-light.svg';
  darkGithub = '../assets/Images/github-brands-dark.svg';
  disabledGithub = '../assets/Images/github-brands-disabled.svg';

  constructor(public themeService: ThemeService) { }

  GetTooltipText(publicRepo: boolean): string {
    return !publicRepo ? 'Available at request' : 'GitHub Repository Link';
  }
}

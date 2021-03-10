import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { ThemeService } from 'src/app/Services/theme.service';

@Component({
  selector: 'app-curriculum-template',
  templateUrl: './curriculum-template.component.html',
  styleUrls: ['./curriculum-template.component.css'],
  animations: []
})
export class CurriculumTemplateComponent implements OnInit {

  @Input() data: any;

  emailstring = 'mailto:skhalidqdev@outlook.es';

  hideButtons: string;

  constructor(private snackbar: SnackbarService, private router: Router) {
  }

  Notify(): void {
    this.snackbar.OpenSnackbar('Copied to clipboard', 'Dismiss');
  }

  UnderLine(skill: string): string {

    let underline = 0;
    for (let { } of skill.split('')) { underline += 10.3; }

    return `width: ${underline}px;`;
  }

  ngOnInit(): void {
    this.hideButtons = this.router.url === '/home' ? 'display: none;' : '';
  }

}

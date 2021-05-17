import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/Services/snackbar.service';

@Component({
  selector: 'app-curriculum-modern',
  templateUrl: './curriculum-modern.component.html',
  styleUrls: ['./curriculum-modern.component.css']
})
export class CurriculumModernComponent implements OnInit {

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
    for (let { } of skill.split('')) { underline += 12; }
    
    return `width: ${underline}px;`;
  }
  
  ngOnInit(): void {
    this.hideButtons = this.router.url === '/home' ? 'display: none;' : '';
  }

}

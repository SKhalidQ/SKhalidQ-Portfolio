import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modern-curriculum',
  templateUrl: './modern-curriculum.component.html',
  styleUrls: ['./modern-curriculum.component.scss'],
  standalone: false
})
export class ModernCurriculumComponent implements OnInit {
  @Output() isModern: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: any;

  emailstring = 'mailto:skhalidqdev@outlook.es';
  hideButtons: string | any;

  constructor(private snackbar: SnackbarService, private router: Router) {
  }

  Notify(): void {
    this.snackbar.OpenSnackbar('Copied to clipboard', 'Dismiss');
  }

  UnderLine(skill: string): string {
    let underline = 0;

    for (let { } of skill.split('')) {
      if (skill === "Teamwork")
      underline += 9.5;
      else if (skill === "Communication")
        underline += 8.8;
      else if (skill === "Organisation")
        underline += 7.7;
    }

    return `width: ${underline}px;`;
  }

  SwitchToClassic(skillName: string): void {
    if (skillName === 'C#/.NET')
      this.isModern.emit(false);
  }

  ngOnInit(): void {
    this.hideButtons = this.router.url === '/home' ? 'display: none;' : '';
  }
}

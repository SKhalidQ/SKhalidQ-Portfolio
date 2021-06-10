import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modern-curriculum',
  templateUrl: './modern-curriculum.component.html',
  styleUrls: ['./modern-curriculum.component.scss']
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

    for (let { } of skill.split('')) { underline += 10.3; }

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

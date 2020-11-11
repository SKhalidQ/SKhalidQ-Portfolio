import { Curriculum, CurriculumModel } from 'src/app/Models/curriculum';
import { ActivePageService } from 'src/app/Services/active-page.service';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { ThemeService } from 'src/app/Services/Theme/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {

  curriculum: CurriculumModel[] = Curriculum;

  constructor(activePageService: ActivePageService, private snackbar: SnackbarService, private theme: ThemeService) {
    activePageService.activePage.next('Curriculum Vitae');
  }

  Notify() {
    var currentTheme = (this.theme.themeMode.value == 'LightTheme') ? 'sbarLTheme' : 'sbarDTheme';

    this.snackbar.OpenSnackbar('Copied to clipboard', 'Dismiss', currentTheme);
  }

  UnderLine(skill: string): string {

    var underline = 0;
    for (let { } of skill.split('')) underline += 10.5;

    return `width: ${underline}px;`;
  }

}
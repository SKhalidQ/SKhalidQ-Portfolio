import { Component } from '@angular/core';
import { Curriculum, CurriculumModel } from 'src/app/Models/curriculum';
import { ActivePageService } from 'src/app/Services/active-page.service';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { ThemeService } from 'src/app/Services/Theme/theme.service';

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

  notify() {    
    var currentTheme = (this.theme.themeMode.value == 'LightTheme') ? 'sbarLTheme' : 'sbarDTheme';

    this.snackbar.OpenSnackbar('Website copied to clipboard', 'Dismiss', currentTheme);
  }

}
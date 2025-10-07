import { Component, inject, OnInit } from '@angular/core';
import { Animations } from 'src/app/app.animations';
import { CurriculumInfo } from 'src/app/models/data/Curriculum';
import { Page } from 'src/app/models/enums/Page';
import { Curriculum } from 'src/app/models/interfaces/Curriculum';
import { ActivePageService } from 'src/app/services/activePage/active-page.service';

@Component({
  selector: 'app-curriculum-page',
  templateUrl: './curriculum-page.component.html',
  styleUrls: ['./curriculum-page.component.scss'],
  animations: [Animations.fadeInOut]
})
export class CurriculumPageComponent implements OnInit {
  readonly activePageService = inject(ActivePageService);

  isModern: boolean = false;
  curriculum: Curriculum = CurriculumInfo;

  ngOnInit(): void {
    this.activePageService.activePage.next(`pages.${Page[Page.Curriculum]}`);
  }
}

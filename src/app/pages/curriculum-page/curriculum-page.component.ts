import { Component, inject, OnInit } from '@angular/core';
import { Animations } from 'src/app/app.animations';
import { CurriculumInfo } from 'src/app/models/data/curriculum-info';
import { Page } from 'src/app/models/enums/page';
import { Curriculum } from 'src/app/models/interfaces/curriculum';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';

@Component({
  selector: 'app-curriculum-page',
  templateUrl: './curriculum-page.component.html',
  styleUrls: ['./curriculum-page.component.scss'],
  animations: [Animations.fadeInOut]
})
export class CurriculumPageComponent implements OnInit {
  private readonly activePageService = inject(ActivePageService);

  isModern = false;
  curriculum: Curriculum = CurriculumInfo;

  ngOnInit(): void {
    this.activePageService.setActivePage({ page: `pages.${Page[Page.Curriculum]}` });
  }
}

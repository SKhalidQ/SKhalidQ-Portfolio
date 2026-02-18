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
/**
 * @description
 * Page component for the Curriculum/CV section.
 * Supports toggling between a classic (print-friendly) and a modern
 * interactive layout via the `isModern` flag.
 */
export class CurriculumPageComponent implements OnInit {
  private readonly activePageService = inject(ActivePageService);

  /** Static curriculum data used by both layout variants. */
  curriculum: Curriculum = CurriculumInfo;

  /**
   * @description Sets the active page key so the header bottom bar reflects the Curriculum page.
   * @returns {void}
   */
  ngOnInit(): void {
    this.activePageService.activePage.next(`pages.${Page[Page.Curriculum]}`);
  }
}

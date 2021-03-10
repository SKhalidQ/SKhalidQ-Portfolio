import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ChangeLogModel } from 'src/app/Models/changelogs';
import { ActivePageService } from 'src/app/Services/active-page.service';

import ActivePageEng from '../../../assets/JSON/English/ActivePage.json';
import ActivePageCast from '../../../assets/JSON/Castellano/ActivePage.json';
import ActivePageCat from '../../../assets/JSON/Catala/ActivePage.json';

import ChangelogJson from '../../../assets/JSON/English/Changelog.json';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-change-logs',
  templateUrl: './change-logs.component.html',
  styleUrls: ['./change-logs.component.css']
})
export class ChangeLogsComponent implements OnInit {

  @Output() expansionToggle = new EventEmitter<void>();
  @ViewChild(MatAccordion) accordion: MatAccordion;

  version: string;
  releaseDate: string;
  expand: string;
  expandBtn: string;
  expandText: string;
  collapseText: string;

  expansion = false;
  changelogs: ChangeLogModel[] = ChangelogJson;

  constructor(public activePageService: ActivePageService, languageService: LanguageService) {
    activePageService.activePage.next('Changelog');

    languageService.currentLanguage$.subscribe(
      (response: string) => {
        if (response.startsWith('En')) {
          this.releaseDate = 'Release Date';
          this.expandText = 'Expand all';
          this.collapseText = 'Collapse all';
          this.version = 'Version';
          this.expand = 'Expand';
          activePageService.activePage.next(ActivePageEng.changelog);
        } else if (response.startsWith('Cas')) {
          this.releaseDate = 'Fecha de publicación';
          this.expandText = 'Expandir todo';
          this.collapseText = 'Contraer todo';
          this.version = 'Versión';
          this.expand = 'Expandir';
          activePageService.activePage.next(ActivePageCast.changelog);
        } else if (response.startsWith('Cat')) {
          this.releaseDate = 'Data de publicació';
          this.expandText = 'Expandir tot';
          this.collapseText = 'Col·lapsar tot';
          this.expand = 'Expandir';
          this.version = 'Versió';
          activePageService.activePage.next(ActivePageCat.changelog);
        }

        this.expandBtn = this.expandText;
      }
    );
  }

  ngOnInit(): void {
  }

  Toggle(): void {
    if (this.expansion === false){
      this.expansion = true;
      this.expandBtn = this.collapseText;
      return this.accordion.openAll();
    } else {
      this.expansion = false;
      this.expandBtn = this.expandText;
      return this.accordion.closeAll();
    }
  }
}

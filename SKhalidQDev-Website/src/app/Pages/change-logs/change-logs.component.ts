import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ChangeLogModel } from 'src/app/Models/changelogs';
import { ActivePageService } from 'src/app/Services/active-page.service';

import ChangelogJson from '../../../assets/JSON/Changelog.json';

@Component({
  selector: 'app-change-logs',
  templateUrl: './change-logs.component.html',
  styleUrls: ['./change-logs.component.css']
})
export class ChangeLogsComponent implements OnInit {

  @Output() expansionToggle = new EventEmitter<void>();
  @ViewChild(MatAccordion) accordion: MatAccordion;

  expansion = false;
  expansionBtn = 'Expand All';
  changelogs: ChangeLogModel[] = ChangelogJson;

  constructor(public activePageService: ActivePageService) {
    activePageService.activePage.next('Changelog');
  }

  ngOnInit(): void {
  }

  Toggle(): void {
    if (this.expansion === false){
      this.expansion = true;
      this.expansionBtn = 'Collapse All';
      return this.accordion.openAll();
    } else {
      this.expansion = false;
      this.expansionBtn = 'Expand All';
      return this.accordion.closeAll();
    }
  }
}

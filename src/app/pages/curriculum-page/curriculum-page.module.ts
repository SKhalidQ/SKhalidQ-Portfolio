import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { BulletComponent } from 'src/app/components/curriculum/bullet/bullet.component';
import { ClassicCurriculumComponent } from 'src/app/components/curriculum/classic-curriculum/classic-curriculum.component';
import { HistoryComponent } from 'src/app/components/curriculum/history/history.component';
import { IconRailComponent } from 'src/app/components/curriculum/icon-rail/icon-rail.component';
import { ListComponent } from 'src/app/components/curriculum/list/list.component';
import { ProfileComponent } from 'src/app/components/curriculum/profile/profile.component';

import { CurriculumPageComponent } from './curriculum-page.component';
import { MarkdownPipe } from 'src/app/pipes/nl2br/markdown.pipe';

@NgModule({
  declarations: [
    CurriculumPageComponent,
    ClassicCurriculumComponent,
    HistoryComponent,
    BulletComponent,
    IconRailComponent,
    ListComponent,
    ProfileComponent,
    MarkdownPipe
  ],
  imports: [
    SharedModule,
  ],
})
export class CurriculumPageModule {}

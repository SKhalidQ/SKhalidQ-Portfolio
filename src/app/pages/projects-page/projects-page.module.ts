import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProjectCardComponent } from 'src/app/components/project-card/project-card.component';
import { GithubLogoPipe } from 'src/app/pipes/github-logo/github-logo.pipe';

import { ProjectsPageComponent } from './projects-page.component';

@NgModule({
  declarations: [ProjectsPageComponent, ProjectCardComponent, GithubLogoPipe],
  imports: [
    SharedModule,
  ],
})
export class ProjectsPageModule {}

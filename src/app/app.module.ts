import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { MaterialModules } from './app-material';

import { DisableRightclickDirective } from './Directives/disable-rightclick.directive';
import { ServiceWorkerModule } from '@angular/service-worker';

import { ClassicCurriculumComponent } from './Components/Curriculum/classic-curriculum/classic-curriculum.component';
import { ModernCurriculumComponent } from './Components/Curriculum/modern-curriculum/modern-curriculum.component';
import { ExpansionPanelsComponent } from './Components/expansion-panels/expansion-panels.component';
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import { ChangeLogsComponent } from './Pages/change-logs/change-logs.component';
import { CurriculumComponent } from './Pages/curriculum/curriculum.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { DialogComponent } from './Components/dialog/dialog.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    DisableRightclickDirective,
    ClassicCurriculumComponent,
    ModernCurriculumComponent,
    ExpansionPanelsComponent,
    ProjectCardComponent,
    ChangeLogsComponent,
    CurriculumComponent,
    NotFoundComponent,
    ProjectsComponent,
    SidenavComponent,
    DialogComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    AppComponent,
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModules,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

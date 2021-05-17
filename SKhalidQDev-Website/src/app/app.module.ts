import { DisableRightclickDirective } from './Directives/disable-rightclick.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';

// Material
import { MaterialModules } from './app-material.module';

// Components
import { CurriculumModernComponent } from './Components/curriculum-modern/curriculum-modern.component'
import { CurriculumClassicComponent } from './Components/curriculum-classic/curriculum-classic.component';
import { ExpansionPanelsComponent } from './Components/expansion-panels/expansion-panels.component';
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import { ChangeLogsComponent } from './Pages/change-logs/change-logs.component';
import { CurriculumComponent } from './Pages/curriculum/curriculum.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { DialogComponent } from './Components/dialog/dialog.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './Pages/home/home.component';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// Test Component


@NgModule({
  declarations: [
    CurriculumClassicComponent,
    DisableRightclickDirective,
    CurriculumModernComponent,
    ExpansionPanelsComponent,
    ProjectCardComponent,
    CurriculumComponent,
    ChangeLogsComponent,
    NotFoundComponent,
    ProjectsComponent,
    SideNavComponent,
    DialogComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    AppComponent,
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModules,
    PlatformModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModules } from './app.material';

import { AppComponent } from './app.component';
import { BulletComponent } from './components/curriculum/bullet/bullet.component';
import { ClassicCurriculumComponent } from './components/curriculum/classic-curriculum/classic-curriculum.component';
import { HistoryComponent } from './components/curriculum/history/history.component';
import { IconRailComponent } from './components/curriculum/icon-rail/icon-rail.component';
import { ListComponent } from './components/curriculum/list/list.component';
import { ProfileComponent } from './components/curriculum/profile/profile.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CurriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ReadMorePageComponent } from './pages/read-more-page/read-more-page.component';

import { GithubLogoPipe } from './pipes/github-logo/github-logo.pipe';
import { SocialButtonLogoPipe } from './pipes/social-button-logo/social-button-logo.pipe';
import { TranslatePipe } from './pipes/translate/translate.pipe';

import { DisableRightClickDirective } from './directives/disable-right-click/disable-right-click.directive';
import { DisableTextSelectionDirective } from './directives/disable-text-selection/disable-text-selection.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ProjectCardComponent,
    ProjectsPageComponent,
    MenuComponent,
    TranslatePipe,
    HomePageComponent,
    CurriculumPageComponent,
    AboutPageComponent,
    DisableRightClickDirective,
    DisableTextSelectionDirective,
    ClassicCurriculumComponent,
    HistoryComponent,
    BulletComponent,
    IconRailComponent,
    ListComponent,
    ProfileComponent,
    SnackbarComponent,
    ErrorPageComponent,
    SocialButtonLogoPipe,
    GithubLogoPipe,
    DialogComponent,
    ReadMorePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

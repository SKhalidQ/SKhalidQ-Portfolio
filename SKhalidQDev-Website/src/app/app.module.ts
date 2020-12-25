import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

// Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { PlatformModule } from '@angular/cdk/platform';

// Components
import { CurriculumTemplateComponent } from './Components/curriculum-template/curriculum-template.component';
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
    ProjectCardComponent,
    CurriculumComponent,
    ProjectsComponent,
    NotFoundComponent,
    SideNavComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    AppComponent,
    DialogComponent,
    CurriculumTemplateComponent,
    ChangeLogsComponent,
    ExpansionPanelsComponent,
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatDividerModule,
    ClipboardModule,
    MatButtonModule,
    MatDialogModule,
    PlatformModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

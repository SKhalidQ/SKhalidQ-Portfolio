import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

//Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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

//Components
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import { CurriculumComponent } from './Pages/curriculum/curriculum.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { HeaderComponent } from './Components/header/header.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './Pages/home/home.component';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

//Test Component
//import { TestComponent } from './Test/test/test.component';


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
    // TestComponent,
  ],
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
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

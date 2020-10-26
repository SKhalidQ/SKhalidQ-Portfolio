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
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

//Components
import { CurriculumComponent } from './Components/Pages/curriculum/curriculum.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';
import { ProjectsComponent } from './Components/Pages/projects/projects.component';
import { SideNavComponent } from './Components/Elements/side-nav/side-nav.component';
import { CardComponent } from './Components/Elements/card/card.component';
import { HeaderComponent } from './Components/Elements/header/header.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { TestComponent } from './Test/test/test.component';


@NgModule({
  declarations: [
    CurriculumComponent,
    ProjectsComponent,
    NotFoundComponent,
    SideNavComponent,
    HeaderComponent,
    AboutComponent,
    CardComponent,
    HomeComponent,
    AppComponent,
    TestComponent,
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
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

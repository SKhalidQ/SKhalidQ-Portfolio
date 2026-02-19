import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { HomePageModule } from './pages/home-page/home-page.module';
import { CurriculumPageModule } from './pages/curriculum-page/curriculum-page.module';
import { ProjectsPageModule } from './pages/projects-page/projects-page.module';
import { AboutPageModule } from './pages/about-page/about-page.module';
import { ErrorPageModule } from './pages/error-page/error-page.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomePageModule,
    CurriculumPageModule,
    ProjectsPageModule,
    AboutPageModule,
    ErrorPageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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

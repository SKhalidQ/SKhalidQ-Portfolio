import { HttpStatusCode } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { CurriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'curriculum', component: CurriculumPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: ErrorPageComponent, data: { statusCode: HttpStatusCode.NotFound } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

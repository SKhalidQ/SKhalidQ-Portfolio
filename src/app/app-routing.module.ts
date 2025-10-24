import { HttpStatusCode } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page } from './models/enums/page';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CurriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ReadMorePageComponent } from './pages/read-more-page/read-more-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, data: { pageTitle: Page.Home } },
  { path: 'curriculum', component: CurriculumPageComponent, data: { pageTitle: Page.Curriculum } },
  { path: 'projects', component: ProjectsPageComponent, data: { pageTitle: Page.Projects } },
  { path: 'projects/project', component: ReadMorePageComponent, data: { pageTitle: Page.Projects } },
  { path: 'about', component: AboutPageComponent, data: { pageTitle: Page.About } },
  { path: '**', component: ErrorPageComponent, data: { pageTitle: Page.Error, statusCode: HttpStatusCode.NotFound } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

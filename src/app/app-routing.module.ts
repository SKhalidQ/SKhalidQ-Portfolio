import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'curriculum', loadChildren: () => import('./pages/curriculum-page/curriculum-page.module').then(m => m.CurriculumPageModule) },
  { path: 'projects', loadChildren: () => import('./pages/projects-page/projects-page.module').then(m => m.ProjectsPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about-page/about-page.module').then(m => m.AboutPageModule) },
  { path: '**', loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

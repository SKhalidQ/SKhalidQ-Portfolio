import { ChangeLogsComponent } from './Pages/change-logs/change-logs.component';
import { CurriculumComponent } from './Pages/curriculum/curriculum.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home | SKhalidQ' } },
  { path: 'curriculum', component: CurriculumComponent, data: { title: 'Curriculum Vitae | SKhalidQ' } },
  { path: 'projects', component: ProjectsComponent, data: { title: 'Projects | SKhalidQ' } },
  { path: 'about', component: AboutComponent, data: { title: 'About | SKhalidQ' } },
  // { path: 'test', component: TestComponent, data: { title: 'Test | SKhalidQ' } },
  { path: 'changelog', component: ChangeLogsComponent, data: { title: 'Changelog | SKhalidQ' } },
  { path: '**', component: NotFoundComponent, data: { title: '404 Not Found | SKhalidQ' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/Pages/about/about.component';
import { CurriculumComponent } from './Components/Pages/curriculum/curriculum.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';
import { ProjectsComponent } from './Components/Pages/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

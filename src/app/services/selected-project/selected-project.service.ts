import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Projects } from 'src/app/models/data/projects-info';
import { Project } from 'src/app/models/interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class SelectedProjectService {
  activatedRoute = inject(ActivatedRoute);

  private readonly selectedProjectKey = 'selectedProject';

  private selectedProject = new BehaviorSubject<Project | undefined>(undefined);
  public selectedProject$ = this.selectedProject.asObservable();

  constructor() {
    const storedProject = sessionStorage.getItem(this.selectedProjectKey);
    const savedProject: Project | undefined = storedProject ? JSON.parse(storedProject) : undefined;

    if (savedProject && savedProject.readMoreUrl === this.activatedRoute.snapshot.queryParamMap.get('projectId')) {
      this.selectedProject.next(savedProject);
    }
  }

  selectProject(project: Project): void {
    this.selectedProject.next(project);
    sessionStorage.setItem(this.selectedProjectKey, JSON.stringify(project));
  }

  getSelectedProject(): Project | undefined {
    let project: Project | undefined = this.selectedProject.getValue();

    if (project) {
      return project;
    }

    const projectID = this.activatedRoute.snapshot.queryParamMap.get('projectName');

    project = Projects.find(project => project.readMoreUrl === projectID);

    return project || undefined;
  }

  clearSelectedProject(): void {
    this.selectedProject.next(undefined);
  }
}

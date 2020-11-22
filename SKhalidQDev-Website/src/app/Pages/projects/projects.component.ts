import { ActivePageService } from 'src/app/Services/active-page.service';
import { Projects } from 'src/app/Models/projects';
import { Component } from '@angular/core';
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    // Trigger animation cards array
    trigger('cardAnimation', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-10px)' }),
            style({ opacity: 1, transform: 'translateY(0)' }),
          ]))]), { optional: true }),
      ]),
    ])
  ]
})
export class ProjectsComponent {

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next('Projects');
  }

  projects = Projects;

}

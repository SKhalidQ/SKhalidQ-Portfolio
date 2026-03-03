import { NavigationButton } from '../interfaces/navigation-button';

export const NavigationButtons: NavigationButton[] = [
  { text: 'navigationButtons.home',
    icon: 'home',
    route: '/home'
  },
  { text: 'navigationButtons.curriculum',
    icon: 'description',
    route: '/curriculum'
  },
  { text: 'navigationButtons.projects',
    icon: 'code',
    route: '/projects'
  },
  { text: 'navigationButtons.about',
    icon: 'info',
    route: '/about',
    method: (): void => { /* no-op */ }
  }
];

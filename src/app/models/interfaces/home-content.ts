export interface HomeContent {
  title: string;
  cvHighlight: Highlight;
  projectsHighlight: Highlight;
}

interface Highlight {
  description: string;
  previewPath: string;
  navigationButton: {
    text: string;
    route: string;
  };
}

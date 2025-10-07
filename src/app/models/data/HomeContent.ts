import { HomeContent } from "../interfaces/HomeContent";

export const HomeContentData: HomeContent = {
  title: "homePage.title",
  cvHighlight: {
    description: "homePage.cvHighlight.description",
    previewPath: "./assets/images/previews/CVPreviewDark.png",
    navigationButton: {
      text: "homePage.cvHighlight.navigationButton.text",
      route: "/cv"
    }
  },
  projectsHighlight: {
    description: "homePage.projectsHighlight.description",
    previewPath: "./assets/images/previews/ProjectPreviewDark.png",
    navigationButton: {
      text: "homePage.projectsHighlight.navigationButton.text",
      route: "/projects"
    }
  }
};

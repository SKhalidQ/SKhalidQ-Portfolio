export interface NavigationButton {
  text: string;
  icon: string;
  route: string;
  method?: () => void;
  tooltip?: string;
}

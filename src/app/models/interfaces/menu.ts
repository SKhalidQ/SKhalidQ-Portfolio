export interface MenuButton {
  text: string;
  icon: string;
  menuFor: string;
  disabled?: boolean;
  options?: MenuOption[];
}

export interface MenuOption {
  key: string;
  text: string;
  icon: string;
  iconType: 'icon' | 'image';
  isDisabled?: boolean;
  isActive?: boolean;
  isHidden?: boolean;
  method: (identifier: string) => void;
}

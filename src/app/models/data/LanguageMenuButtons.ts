
import { Language } from "../enums/Language";
import { MenuButton, MenuOption } from "../interfaces/Menu";

export const LanguageMenuOptions: MenuOption[] = [
  { key: Language.enGB, text: `languageMenu.options.${Language[Language.enGB]}`, icon: '../../assets/images/flags/Britain.svg', iconType: 'image', method: (): void => { /* no-op */ }, isActive: true },
  { key: Language.esES, text: `languageMenu.options.${Language[Language.esES]}`, icon: '../../assets/images/flags/España.svg', iconType: 'image', method: (): void => { /* no-op */ } },
  { key: Language.caES, text: `languageMenu.options.${Language[Language.caES]}`, icon: '../../assets/images/flags/Catalunya.svg', iconType: 'image', method: (): void => { /* no-op */ } },
  { key: Language.urPK, text: `languageMenu.options.${Language[Language.urPK]}`, icon: '../../assets/images/flags/Pakistan.svg', iconType: 'image', method: (): void => { /* no-op */ } }
];

export const LanguageMenuButton: MenuButton = {
  text: 'languageMenu.title',
  icon: 'language',
  menuFor: 'languages-menu',
  options: LanguageMenuOptions
};

import { Language } from '../enums/language';
import { MenuButton, MenuOption } from '../interfaces/menu';

export const LanguageMenuOptions: MenuOption[] = [
  { key: Language.enGB, text: `languageMenu.options.${Language[Language.enGB]}`, icon: '../../assets/images/flags/Britain.svg', iconType: 'image', method: (): void => { /* no-op */ }, isActive: true },
  { key: Language.esES, text: `languageMenu.options.${Language[Language.esES]}`, icon: '../../assets/images/flags/España.svg', iconType: 'image', method: (): void => { /* no-op */ } },
  { key: Language.caES, text: `languageMenu.options.${Language[Language.caES]}`, icon: '../../assets/images/flags/Catalunya.svg', iconType: 'image', method: (): void => { /* no-op */ } },
  { key: Language.urPK, text: `languageMenu.options.${Language[Language.urPK]}`, icon: '../../assets/images/flags/Pakistan.svg', iconType: 'image', method: (): void => { /* no-op */ } },
  { key: Language.paPK, text: `languageMenu.options.${Language[Language.paPK]}`, icon: '../../assets/images/flags/Punjab.svg', iconType: 'image', method: (): void => { /* no-op */ }, isDisabled: true }
];

export const LanguageMenuButton: MenuButton = {
  text: 'languageMenu.title',
  icon: 'language',
  menuFor: 'languages-menu',
  options: LanguageMenuOptions
};

import { defineStore } from 'pinia';

import { LanguageEnum } from '../enums/language.enum';

const headerTranslations = {
  [LanguageEnum.FR]: {
    home: 'Accueil',
    login: 'Connexion',
    register: 'Inscription',
    logout: 'Déconnexion',
  },
  [LanguageEnum.EN]: {
    home: 'Home',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
  },
};

type HeaderTranslationKey = keyof typeof headerTranslations[LanguageEnum.FR];

export const useLanguageStore = defineStore('language', {
  state: () => ({
    current: LanguageEnum.FR as LanguageEnum,
  }),
  actions: {
    setLanguage(lang: LanguageEnum) {
      this.current = lang;
    },
  },
  getters: {
    t: (state) => (key: HeaderTranslationKey) =>
      headerTranslations[state.current][key],
  },
});
export type { HeaderTranslationKey };

import { defineStore } from "pinia";

import { translations } from "../assets/translations";
import { LanguageEnum } from "../enums/language.enum";

type TranslationKey = keyof (typeof translations)[LanguageEnum.FR];

export const useLanguageStore = defineStore("language", {
  state: () => ({
    current: LanguageEnum.FR as LanguageEnum,
  }),
  actions: {
    setLanguage(lang: LanguageEnum) {
      this.current = lang;
    },
  },
  getters: {
    t: (state) => (key: TranslationKey) =>
      translations[state.current][key],
  },
});
export type { TranslationKey };

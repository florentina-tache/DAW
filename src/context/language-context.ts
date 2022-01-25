 import { createContext } from 'react';

// export const LanguageContext = createContext({
//     language:  "EN",
//     changeLanguage: (l: string) => {},
//   });

interface ILanguageContext {
  language: string;
  changeLanguage?: any;
}

const defaultState = {
  language:  "EN",
  changeLanguage: () => {},
};

export const LanguageContext = createContext<ILanguageContext>(defaultState);
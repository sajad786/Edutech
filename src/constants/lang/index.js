import LocalizedStrings from 'react-native-localization';
import en from './en';
import ur from './ur';

let strings = new LocalizedStrings({
  en: en,
  ur: ur,
});

export const changeLaguage = languageKey => {
  strings.setLanguage(languageKey);
};

export default strings;

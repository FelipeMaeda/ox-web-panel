import {resolveBrowserLocale} from 'react-admin';

import polyglotI18nProvider from 'ra-i18n-polyglot';

import customEnglishMessages from './dictionaries/en'
import customptBrMessages from './dictionaries/pt'
import customSpanishMessages from './dictionaries/es'


const messages = {
  en: customEnglishMessages,
  pt: customptBrMessages,
  es: customSpanishMessages
};



const i18nProvider = polyglotI18nProvider(
  locale => messages[locale] ? messages[locale] : messages.en,
  resolveBrowserLocale()
);
console.log(messages)
export default i18nProvider
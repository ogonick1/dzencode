import { createI18n } from 'vue-i18n'
//@ts-ignore
import en from './locales/en.json'
//@ts-ignore
import ru from './locales/ru.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ru
  }
})

export default i18n

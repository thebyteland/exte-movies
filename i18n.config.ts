export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'es',
  defaultLocale: 'es',
  messages: {
    en: {
      APP: 'EXTE Movies',
      LANG_ES: 'Spanish',
      LANG_EN: 'English',
      MY_LIST_TITLE: 'My movies',
      MY_LIST_LINK: 'My list',
      HOME_LINK: 'Home',
      FOOTER_TEXT: 'Exte Movies - By Adrián Jiménez Martín',
    },
    es: {
      APP: 'EXTE Movies',
      LANG_ES: 'Español',
      LANG_EN: 'Inglés',
      MY_LIST_TITLE: 'Mis películas',
      MY_LIST_LINK: 'Mi lista',
      HOME_LINK: 'Inicio',
      FOOTER_TEXT: 'Exte Movies - Hecho por Adrián Jiménez Martín',
    }
  }
}))
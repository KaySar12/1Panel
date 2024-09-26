import { createI18n } from 'vue-i18n';
import zh from './modules/zh';
import tw from './modules/tw';
import en from './modules/en';
import vi from './modules/vi';

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'en' || 'zh',
    globalInjection: true,
    messages: {
        zh,
        tw,
        en,
        vi,
    },
    warnHtmlMessage: false,
});

export default i18n;

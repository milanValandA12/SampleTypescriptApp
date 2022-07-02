import i18n, {
    LanguageDetectorAsyncModule,
    Services,
    InitOptions,
} from 'i18next';
import { initReactI18next } from 'react-i18next';
import LocalStorageUtils from '../utils/LocalStorageUtils';
import en from './en';
import hi from './hi';

export const AVAILABLE_LANGUAGES = {
    en,
    hi,
};

export const AVALAILABLE_LANG_CODES = Object.keys(AVAILABLE_LANGUAGES);

const languageDetector: LanguageDetectorAsyncModule = {
    type: 'languageDetector',
    async: true,
    init: (
        _services: Services,
        _detectorOptions: object,
        _i18nextOptions: InitOptions,
    ) => { },
    detect: async (callback: (lng: string) => void) => {
        const lang = await LocalStorageUtils.getItem('APP_LANG');
        callback(lang ?? 'en');
    },
    cacheUserLanguage: (lng: string) => {
        LocalStorageUtils.setItem('APP_LANG', lng);
    },
};

i18n
    .use(languageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: AVAILABLE_LANGUAGES,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
    });
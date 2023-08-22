import React from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs:['en','fr','es','ar','cn','de','hi','id','lo','nl','ps','pt','ro','sq','tr','ur','vi'],
    fallbackLng: "en",
    detection:{
        order: ['cookie' ,'path',  'htmlTag', 'localStorage', 'sessionStorage',  'subdomain'],
        caches: ['cookie'], 
    },
    backend:{
        loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });

const Login = () => {
    const { t } = useTranslation();
  return (
    <div>
        {t('Welcome to React')}
    </div>
  )
}

export default Login
import React, { useEffect, useState } from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
import cookies from "js-cookie"
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'fr', 'es', 'ar', 'cn', 'de', 'hi', 'id', 'lo', 'nl', 'ps', 'pt', 'ro', 'sq', 'tr', 'ur', 'vi'],
        fallbackLng: "en",
        detection: {
            order: ['cookie', 'path', 'htmlTag', 'localStorage', 'sessionStorage', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        }
    });

const Login = () => {
    const languages = [
        {
            code: "en",
            name: "English",
            country_code: "gb"
        },
        {
            code: "es",
            name: "Spanish-Espanol",
            country_code: "es"
        },
        {
            code: "fr",
            name: "French-Francias",
            country_code: "fr"
        },
        {
            code: "ar",
            name: "العربية",
            country_code: "ar",
            dir:"rtl"
        },
        {
            code: "cn",
            name: "Chinees",
            country_code: "gb"
        },
        {
            code: "de",
            name: "Germany",
            country_code: "de"
        },
        {
            code: "hi",
            name: "Hindi",
            country_code: "hi"
        },
        {
            code: "id",
            name: "Indoneshian",
            country_code: "id"
        },

        {
            code: "lo",
            name: "Lao",
            country_code: "gb"
        },
        {
            code: "nl",
            name: "Dutch",
            country_code: "nl"
        },
        {
            code: "ps",
            name: "Pashto",
            country_code: "ps"
        },
        {
            code: "ro",
            name: "Romanian",
            country_code: "ro"
        },
        {
            code: "sq",
            name: "Albania",
            country_code: "sq"
        },
        {
            code: "tr",
            name: "Turkeye",
            country_code: "gb"
        },
        {
            code: "ur",
            name: "Urdu",
            country_code: "pk",
            dir:"rtl"
        },
        {
            code: "vi",
            name: "Vietnam",
            country_code: "vi"
        }

    ]
    const [lang, setLang] = useState('en')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage =languages.find(l => l.code === currentLanguageCode)
    const handleChange =(e)=>{
        if(e.target.name ==="username"){
            setUsername(e.target.value)
        }else if(e.target.name ==="password"){
            setPassword(e.target.value)
        }else if(e.target.name ==="remember_me"){
            if(e.target.value === true){
                setRemember(true)
            }else{
                setRemember(false)
            }
        }
    }
    const langChange = (e) =>{
        if(e.target.name ==="lang"){
            setLang(e.target.value)
        }
    }
    useEffect(() => {
        i18next.changeLanguage(lang)
        document.body.dir = currentLanguage.dir || "ltr"
    }, [lang,currentLanguage])
    
    const { t } = useTranslation();
    return (
        <div className='grid grid-cols-8 sm:flex-col-reverse w-full'>
            <div className='flex flex-col col-span-3 items-center w-full relative  justify-center'>
                <div className='w-full h-screen'>
                    <img src='https://store.ezipos.pk/img/home-bg.jpg' alt='pos' className='w-full h-full  ' />
                    <div className='bg-black/50 absolute w-full h-full top-0 '></div>
                    <div className='absolute top-[50%]  w-full flex flex-col items-center justify-center '>
                        <div className='text-white  font-bold flex  text-3xl'>Ezi Point Of Sale</div>
                        <div className='text-blue-500 flex justify-center font-semibold text-2xl'>1# Inventory Management System</div>

                    </div>
                </div>

            </div>
            <div className='flex flex-col col-span-5 items-center w-full   bg-gray-800 p-5'>
                <div className='flex justify-between w-full'>
                    <select name="lang" value={lang} id='lang' onChange={langChange} className='w-[150] '>
                        {languages.map((val, index) => {
                            return <option key={index} value={val.code}> {val.name}</option>
                        })}
                    </select>
                    <div className='flex '>
                        <button className='bg-red-400 text-white text-xl px-2 py-1 mx-2'> {t('register_question')}</button>
                        <button className=' text-white text-xl mx-2'> {t('pricing')}</button>
                    </div>
                </div>
                <div className='flex flex-col w-[70%]  mt-16 '>
                    <h1 className='text-white text-xl text-start'>{t('Login')}</h1>
                    <div className='relative flex mt-5'>
                        <input className='px-3 py-1 w-full' type='text' onChange={handleChange} value={username} id='username' name='username' placeholder={`${t('Username')}`} />

                    </div>
                    <div className='relative flex mt-5'>
                        <input className='px-3 py-1 w-full' type='password' onChange={handleChange} value={password} id='password' name='passwrod' placeholder={`${t('Password')}`} />

                    </div>
                    <div className='flex mt-5'>
                    <input type='checkbox' className='' id='remember-me' name='remember-me' value={remember} /> 
                    <h1 className='text-white mx-3 text-xl'>{t('remember_me')}</h1>
                    </div>

                    <div className='flex justify-between mt-10'>
                        <button className='bg-blue-400 text-white text-xl px-2 py-1 mx-2'> {t('Login')}</button>
                        <button className=' text-white text-xl mx-2'> {t('forgot_ur_password')}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
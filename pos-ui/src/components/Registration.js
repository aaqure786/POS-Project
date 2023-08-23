import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import {BiSolidUser} from "react-icons/bi"
import {BsFillLockFill} from "react-icons/bs"

const Registration = () => {
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
            code: "vi",
            name: "Vietnam",
            country_code: "vi"
        }

    ]
    const [lang, setLang] = useState('en')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [page, setPage] = useState(1)
    const handleChange =(e)=>{
        if(e.target.name ==="username"){
            setUsername(e.target.value)
        }else if(e.target.name ==="password"){
            setPassword(e.target.value)
        }
    }
const handlePrevious = () => {
  if(page > 1 ){
    setPage(page - 1)
  }
}
    const handleClick = () => {
      if(page < 3 ){
        setPage(page + 1)
      }
      else{
        console.log("I am Register", page)

      }
    }
    const langChange = (e) =>{
        if(e.target.name ==="lang"){
            setLang(e.target.value)

        }
    }
    
     
    
    useEffect(() => {
      i18next.changeLanguage(lang)
      if(lang === "ar"){
          document.body.dir = 'rtl' 
      }else{
        document.body.dir ='ltr'
      }

    }, [lang])
    // const pages =["Bussiness","Bussiness Setting","Owner"]
    const { t } = useTranslation();
    return (
        <div className='grid md:grid-cols-8 sm:grid-cols-1 w-full'>
            <div className='md:flex flex-col hidden  col-span-3 items-center w-full relative  justify-center'>
                <div className='w-full h-screen'>
                    <img src='https://store.ezipos.pk/img/home-bg.jpg' alt='pos' className='w-full h-full  ' />
                    <div className='bg-black/50 absolute w-full h-full top-0 '></div>
                    <div className='absolute top-[50%]  w-full flex flex-col items-center justify-center '>
                        <div className='text-white  font-bold flex  text-3xl'>Ezi Point Of Sale</div>
                        <div className='text-blue-500 flex justify-center font-semibold text-2xl'>1# Inventory Management System</div>

                    </div>
                </div>

            </div>
            <div className='flex flex-col md:col-span-5 items-center w-full h-screen  bg-gray-800 p-5'>
                <div className='flex justify-between w-full '>
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
                    <div className='header flex justify-between'>
                      <div className={`min-h-[70px]  w-[180px] ${page === 1 ? "bg-blue-500 text-white" :"bg-white text-gray-500"} mt-2 rounded-xl flex items-center justify-center`}>
                            <h1 className='text-xl  font-bold'> 1. Bussiness</h1>
                      </div>
                      <div className={`min-h-[70px]  w-[180px] ${page === 2 ? "bg-blue-500 text-white" :"bg-white text-gray-500"} mt-2 rounded-xl flex items-center justify-center`}>
                            <h1 className='text-lg  font-bold'> 2. Bussiness Setting</h1>
                      </div>
                      <div className={`min-h-[70px]  w-[180px] ${page === 3 ? "bg-blue-500 text-white" :"bg-white text-gray-500"} mt-2 rounded-xl flex items-center justify-center`}>
                            <h1 className='text-xl  font-bold'> 3. Owner</h1>
                      </div>

                    </div>
                    <div className='body flex flex-col'>
                    <div className='relative flex mt-5'>
                        <input className='px-3 py-1 w-full' type='text' onChange={handleChange} value={username} id='username' name='username' placeholder={`${t('Username')}`} />
                        <BiSolidUser size={20} className="absolute top-2 right-1" />

                    </div>
                    <div className='relative flex mt-5'>
                        <input className='px-3 py-1 w-full' type='password' onChange={handleChange} value={password} id='password' name='passwrod' placeholder={`${t('Password')}`} />
                        <BsFillLockFill size={20} className="absolute top-2 right-1" />

                    </div>
                    </div>



                    <div className='footer flex justify-end mt-10'>
                        <button disabled={page ===1} className={` ${page  !==1 ? "bg-blue-400 text-white " : "bg-white text-gray-400"} rounded-md  text-xl px-2 py-1 mx-2`} onClick={handlePrevious}> Previous</button>
                        <button  className=' bg-blue-400 text-white rounded-md   text-xl px-2 py-1 mx-2' onClick={handleClick}>
                            {page === 3 ? "Register" : "Next" }
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registration
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BiSolidUser } from "react-icons/bi"


const BussinessSetting = () => {
    const months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",  "December"]
    const {t} = useTranslation()
  return (
    <div className='flex flex-col'>
        <div className=' flex flex-col'>
            <h1 className='flex justify-start text-white text-lg'> {t('bzns_setting')}</h1>
            
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('tx')} 1 {t('nm')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`GST/ VAT/ ${t('othr')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('tx')} 1 {t('nmr')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'   />
                        
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('tx')} 2 {t('nm')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`GST/ VAT/ ${t('othr')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('tx')} 2 {t('nmr')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'   />
                        
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('fnncial_yr_strt_mnt')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <select className='w-full'>
                            {months.map((val,index)=>{
                               return <option key={val} value={t(`${val}`)}>{val}</option>
                             
                            })}
                        </select>
                        </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('altrnt_cntct_nmbr')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <select className='w-full'>
                            <option value={t('fifo')}>{t('fifo')}</option>
                            <option value={t('lifo')}>{t('lifo')}</option>

                        </select>
                    </div>
                </div>
            </div>
           
            

        </div>
    </div>
  )
}

export default BussinessSetting
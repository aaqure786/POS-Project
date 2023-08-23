import React from 'react'
import { useTranslation } from 'react-i18next'
import { BiSolidUser } from "react-icons/bi"
const BussinessForm = () => {
    const { t } = useTranslation()
    return (
        <div className=' flex flex-col'>
            <h1 className='flex justify-start text-white text-lg'> {t('bzns_dtls')}</h1>
            <div className=' grid grid-cols-1 flex-col mt-2'>
                <h2 className='text-white text-start mb-1'> {t('bzns_nm')}:*</h2>
                <div className='flex'>
                    <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                    <input className='px-3 py-1 focus:outline-none w-full' type='text' id='bznsnm' name='bznsnm' placeholder={`${t('bzns_nm')}`} />
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('strt_dt')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text' id='startdate' name='startdate' placeholder={`${t('strt_dt')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('Currency')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <select className='w-full'>
                            <option value={""}>{t('slct_crncy')}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('upld_lgo')}:*</h2>
                    <div className='flex'>
                        <input className='px-3 py-1 focus:outline-none w-full' type='upload'   />
                        <div className='flex bg-blue-600 text-white'> 
                        <BiSolidUser size={32}  className="border-r-[1px] p-1 " />
                        {t('brzr')}
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('Website')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('Website')}`} />
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('bzns_cntct_nmbr')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('bzns_cntct_nmbr')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('altrnt_cntct_nmbr')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('altrnt_cntct_nmbr')}`} />
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('cntry')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('cntry')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('state')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('state')}`} />
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('cty')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('cty')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('zp_cd')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('zp_cd')}`} />
                    </div>
                </div>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 '>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('lndmrk')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <input className='px-3 py-1 focus:outline-none w-full' type='text'  placeholder={`${t('lndmrk')}`} />
                    </div>
                </div>
                <div className=' flex flex-col mt-2'>
                    <h2 className='text-white text-start mb-1'> {t('tm_zn')}:*</h2>
                    <div className='flex'>
                        <BiSolidUser size={32} className="border-r-[1px] p-1 bg-white  border-gray-400" />
                        <select className='w-full'>
                            <option value={"Asia/Karachi"}>Asia/Karachi</option>
                        </select>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default BussinessForm
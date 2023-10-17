import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import AccountTypeTbl from '../Tables/AccountTypeTbl'
import AddorEditAccountTypes from './AddorEditAccountTypes'
const AccountTypes = () => {
    const [isCliked, setIsCliked] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const displayData = () => {
        if (isAdd === true) {
            return <AddorEditAccountTypes id={0} />
        }
    }
    return (
        <div className='w-full flex flex-col bg-gray-100'>



            <div className='flex items-end justify-end bg-white  mt-5 text-sm '>
                <div onClick={() => { setIsCliked(true); setIsAdd(true) }} className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                    <AiOutlinePlus size={15} /> Add

                </div>
            </div>
            <div className='flex flex-col pt-5 bg-white'>
                <AccountTypeTbl />
            </div>
            {isCliked &&
                <div className='absolute top-0 flex flex-col items-center   right-0 bg-black/70 w-full min-h-screen'>
                    <div className='flex flex-col   w-full md:w-[50%]  mt-10 bg-white px-5 pt-2'>
                        <div className='flex items-end justify-end '>
                            <MdCancel onClick={() => { setIsCliked(!isCliked); setIsAdd(false) }} size={20} />

                        </div>
                        <div className='flex items-start justify-center'>
                            {displayData()}
                        </div>
                    </div>
                </div>

            }



        </div>
    )
}

export default AccountTypes
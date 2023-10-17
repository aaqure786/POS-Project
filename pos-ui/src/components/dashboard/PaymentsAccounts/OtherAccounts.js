import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import AccountTbl from '../Tables/AccountTbl'
import { MdCancel } from 'react-icons/md'
import AddorEditAccount from './AddorEditAccount'
const OtherAccounts = () => {
    const [status, setStatus] = useState('Active')
    const [isCliked, setIsCliked] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const displayData = () => {
        if ( isAdd === true) {
            return <AddorEditAccount id={0} />
        } 
    }
    return (
        <div className='w-full flex flex-col bg-gray-100'>

            <div className='flex  items-center mt-5 p-5 justify-between w-full bg-white shadow-xl shadow-gray-300'>
                <select value={status} onChange={(e) => { setStatus(e.target.value) }} className='border-[1px] border-gray-600 px-2 py-1 w-2/6' >
                    <option value={"Active"}>Active</option>
                    <option value={"Closed"}>Closed</option>

                </select>

                <div className='flex  mt-2 text-sm mx-5'>
                    <div onClick={()=>{setIsCliked(true); setIsAdd(true)}} className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                        <AiOutlinePlus size={15} /> Add

                    </div>

                </div>


                

            </div>
            <div className='flex flex-col pt-5 bg-white'>
                    <AccountTbl />
                </div>
            {isCliked &&
                <div className='absolute top-0 flex flex-col items-center  justify-center right-0 bg-black/70 w-full min-h-screen'>
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

export default OtherAccounts
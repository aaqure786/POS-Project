import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'



import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { DefinedRange } from 'react-date-range';
import AccountBookTbl from '../Tables/AccountBookTbl';
const AccountBook = () => {

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection"
        }
    ])

    const [formData, setFormData] = useState({
        transType:"",
        date:range

    })

    const [open3, setOpen3] = useState(false)

    return (
        <div className='flex flex-col items-center min-h-screen justify-self-center w-full p-5 bg-gray-100'>
            <div className='flex justify-start items-start w-full'>
                <h1 className='text-xl font-semibold'>Account Book</h1>

            </div>
            <div className='flex flex-col mt-4 w-full  rounded-md p-3 items-start justify-start'>

                <div className='flex w-full'>
                    <div className='flex flex-col p-4 bg-white mr-[2.5%] w-[35%]'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-start '>Account Name:</h1>
                            <h1 className='text-start '>Test Account</h1>

                        </div>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-start '>Account Type:</h1>
                            <h1 className='text-start '>Assets - Cash In hand</h1>

                        </div>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-start '>Account Number:</h1>
                            <h1 className='text-start '>00000</h1>

                        </div>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-start '>Balance:</h1>
                            <h1 className='text-start '>₨ -36,230.50</h1>

                        </div>
                    </div>
                    <div className='flex p-4 flex-col bg-white w-[60%] ml-[2.5%]'>
                        <div className='flex cursor-pointer items-center' >
                            <FaFilter size={20} />
                            <h1 className='text-xl  font-semibold'>Filters</h1>
                        </div>
                        <div className=' grid grid-cols-1 items-center bg-white rounded-md gap-5 md:grid-cols-2 mt-5 '>

                            <div className='flex flex-col'>
                                <h1 className='text-start font-bold text-sm'>Transaction Type:</h1>
                                <select value={formData.transType} onChange={(e) => { setFormData({ ...formData, transType: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                    <option value={"All"}>All</option>
                                    <option value={"Debit"}>Debit</option>
                                    <option value={"Credit"}>Credit</option>

                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex text-sm text-start font-bold'>
                                    <h1>Purchase Date:</h1>
                                </div>

                                <div className=' bg-gray-300  px-2 flex items-center relative py-1'>
                                    <input
                                        value={`${format(range[0].startDate, "MM/dd/yyyy")} - ${format(range[0].endDate, "MM/dd/yyyy")}`}
                                        readOnly
                                        className='focus:outline-none bg-gray-300 '
                                        onClick={() => { setOpen3(!open3) }} />
                                    {open3 &&
                                        <div onClick={() => { setOpen3(!open3) }} className='absolute top-10 left-4 text-black z-10'>
                                            <DefinedRange
                                                onChange={item => setRange([item.selection])}
                                                ranges={range}

                                            />
                                        </div>

                                    }
                                </div>
                            </div>





                        </div>
                    </div>

                </div>
            </div>

            <div className='flex w-full bg-white mt-5'>
                <AccountBookTbl />
            </div>




        </div>
    )
}

export default AccountBook
import React, { useRef, useState } from 'react'
import { FaFilter, FaUser } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi';
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { DefinedRange } from 'react-date-range';
import ActivityTbl from '../reportTables/ActivityTbl';


const ActivityLogRpt = () => {
   const subject = [
    {
        value:"Contact"
    },
    {
        value:"User"
    },
    {
        value:"Sell"
    },
    {
        value:"Purchase"
    },
    {
        value:"Sales Order"
    },
    {
        value:"Purchase Order"
    },
    {
        value:"Sale Return"
    },
    {
        value:"Purchase Return"
    },
    {
        value:"Stock Transfer"
    },
    {
        value:"Stock Adjustment"
    },
    {
        value:"Expenses"
    }
   ]
    const [open4, setOpen4] = useState(false)

    const [open1, setOpen1] = useState(false)

    const [inputValue1, setInputValue1] = useState('')

    const printRef = useRef()
    // const handlePrint = useReactToPrint({
    //     content: () => printRef.current,
    //     documentTitle: "SellReport",
    //     copyStyles: true,
    // });
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection"
        }
    ])

    

    const [formData, setFormData] = useState({
        businesLocation: "",
        subject:""
})
    const [isFilter, setIsFilter] = useState(false)

    return (
        <div>
            <div className='flex flex-col  bg-gray-100 px-3 pb-3 min-h-screen'>
                <div className=' flex '>
                    <h1 className='font-bold text-xl text-start'>Activity Log</h1>

                </div>
                <div className='flex flex-col mt-4 w-full bg-white rounded-md p-3 items-start justify-start'>
                    <div className='flex cursor-pointer' onClick={() => { setIsFilter(!isFilter) }}>
                        <FaFilter size={20} style={{ color: 'blue' }} />
                        <h1 className='text-xl text-blue-600 font-semibold'>Filters</h1>
                    </div>
                    {isFilter &&
                        <div className=' grid grid-cols-1 bg-white rounded-md gap-5 md:grid-cols-4 mt-5 w-full'>
                             <div className='flex flex-col'>
                                <h1 className='text-start font-bold '>User:</h1>
                                <div className='flex'>

                                    <select value={formData.user} onChange={(e) => { setFormData({ ...formData, user: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                        <option value={"All Users"}>All Users</option>
                                        <option value={"Demo Admin"}>Demo Admin</option>
                                        <option value={"Ismail Shah"}>Ismail Shah</option>
                                        <option value={"mr fdkd"}>mr fdkd</option>

                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex text-sm text-start font-bold'>
                                    <h1>Subject Type:</h1>
                                </div>
                                <div className='flex flex-col relative'>
                                    <div className='flex'>
                                        <FaUser size={15} className='border-[1px] mt-1 w-8 h-8 border-gray-600 p-1' />
                                        <input
                                            onClick={() => setOpen1(!open1)}
                                            className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  py-1 mt-1 border-[1px] border-gray-600'
                                            value={formData.subject}
                                            onChange={(e) => { setFormData({ ...formData, subject: e.target.value }) }}

                                            placeholder='Select Value'
                                        />
                                        <BiChevronDown size={20} className={`${open1 && "rotate-180"} absolute top-3 right-4`} />


                                    </div>
                                    {open1 &&
                                        <ul

                                            className={`bg-white z-10  w-full -right-7 mx-[30px] border-[1px] absolute top-9 border-gray-600  overflow-y-auto ${open1 ? "max-h-60" : "max-h-0"} `}
                                        >
                                            <div className="flex items-center px-1 sticky top-0 bg-white">
                                                <input
                                                    type="text"
                                                    value={inputValue1}
                                                    onChange={(e) => setInputValue1(e.target.value.toLowerCase())}
                                                    className="placeholder:text-gray-700 w-full p-1 outline-none border-[1px] border-gray-500"
                                                />
                                            </div>
                                            {subject?.map((data) => (
                                                <li
                                                    key={data?.value}
                                                    className={`p-2 text-sm text-start hover:bg-sky-600 hover:text-white
                                                        ${data?.value?.toLowerCase() === formData.subject?.toLowerCase() &&
                                                        "bg-sky-600 text-white"
                                                        }
                                                         ${data?.value?.toLowerCase().startsWith(inputValue1)
                                                            ? "block"
                                                            : "hidden"
                                                        }`}
                                                    onClick={() => {
                                                        if (data?.value?.toLowerCase() !== formData.subject.toLowerCase()) {
                                                            setFormData({ ...formData, subject: data?.value })
                                                            setOpen1(false);
                                                            setInputValue1("");
                                                        }
                                                    }}
                                                >
                                                    {data?.value}
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex text-sm text-start font-bold'>
                                    <h1>Date Range:</h1>
                                </div>

                                <div className=' bg-gray-300 mt-2  px-2 flex items-center relative py-1'>
                                    <input
                                        value={`${format(dateRange[0].startDate, "MM/dd/yyyy")} - ${format(dateRange[0].endDate, "MM/dd/yyyy")}`}
                                        readOnly
                                        className='focus:outline-none bg-gray-300 '
                                        onClick={() => { setOpen4(!open4) }} />
                                    {open4 &&
                                        <div onClick={() => { setOpen4(!open4) }} className='absolute top-10 left-4 text-black z-10'>
                                            <DefinedRange
                                                onChange={item => setDateRange([item.selection])}
                                                ranges={dateRange}

                                            />
                                        </div>

                                    }
                                </div>
                            </div>

                           
                        </div>}
                </div>


                <div ref={printRef} className='mt-5'>
                    {/* <h1 className='text-xl font-bold mt-3 flex items-center justify-center '>EZI POS DEMO - Tax Report</h1> */}






                </div>

                {/* <div className='flex items-end justify-end mx-3 mt-3'>
                    <div className='flex bg-blue-500 text-white cursor-pointer px-2 py-1' onClick={() => { handlePrint() }}>
                        <FaPrint size={15} />
                        <h1 className='text-sm mx-1'>Print</h1>
                    </div>
                </div> */}
                <div className='flex w-full bg-white'>
                    <ActivityTbl />
                </div>





            </div>




        </div>
    )
}

export default ActivityLogRpt
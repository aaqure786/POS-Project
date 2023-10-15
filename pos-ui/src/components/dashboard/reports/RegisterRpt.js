import React, { useRef, useState } from 'react'
import { FaFilter, FaUsers } from 'react-icons/fa'
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { DefinedRange } from 'react-date-range';
import RegiterTbl from '../reportTables/RegiterTbl';


const SellPaymentRpt = () => {
     
    const [open4, setOpen4] = useState(false)

    

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
        user: "",
        status: "",
       
        
})
    const [isFilter, setIsFilter] = useState(false)

    return (
        <div>
            <div className='flex flex-col  bg-gray-100 px-3 pb-3 min-h-screen'>
                <div className=' flex '>
                    <h1 className='font-bold text-xl text-start'>Register Report</h1>
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
                                        <option value={"All User"}>All User</option>
                                        <option value={"Demo Admin"}>Demo Admin</option>
                                        <option value={"Ismail Shah"}>Ismail Shah</option>

                                    </select>
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <h1 className='text-start font-bold '>Status:</h1>
                                <div className='flex'>

                                    <FaUsers size={15} className='border-[1px] w-8 h-8 border-gray-600 p-1' />
                                    <select value={formData.customerGrp} onChange={(e) => { setFormData({ ...formData, customerGrp: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                        <option value={"All"}>All</option>
                                        <option value={"Open"}>Open</option>
                                        <option value={"Close"}>Close</option>

                                    </select>
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <div className='flex text-sm text-start font-bold'>
                                    <h1>Date Range:</h1>
                                </div>

                                <div className=' bg-gray-300 mt-1 w-full  px-2 flex items-center relative py-1'>
                                    <input
                                        value={`${format(dateRange[0].startDate, "MM/dd/yyyy")} - ${format(dateRange[0].endDate, "MM/dd/yyyy")}`}
                                        readOnly
                                        className='focus:outline-none bg-gray-300 py-1'
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
                <div className='flex w-full'>
                    <RegiterTbl />
                </div>





            </div>




        </div>
    )
}

export default SellPaymentRpt
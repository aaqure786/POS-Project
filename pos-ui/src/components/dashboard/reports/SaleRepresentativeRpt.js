import React, { useRef, useState } from 'react'
import {  FaCog, FaFilter,  FaMapMarker } from 'react-icons/fa'
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { DefinedRange } from 'react-date-range';
import { Outlet, NavLink } from 'react-router-dom'



const SaleRepresentativeRpt = () => {
    
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
        businesLocation: "",
        user: "",
        date: dateRange,

        
    })
    const [isFilter, setIsFilter] = useState(false)

    return (
        <div>
            <div className='flex flex-col  bg-gray-100 px-3 pb-3 min-h-screen'>
                <div className=' flex '>
                    <h1 className='font-bold text-xl text-start'>Product Purchase Report</h1>

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
                                <h1 className='text-start font-bold '>Business Location:</h1>
                                <div className='flex'>

                                    <FaMapMarker size={15} className='border-[1px] w-8 h-8 border-gray-600 p-1' />
                                    <select value={formData.businesLocation} onChange={(e) => { setFormData({ ...formData, businesLocation: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                        <option value={""}>Please Selecet</option>
                                        <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>
                                    </select>
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

                <div className='flex flex-col bg-white mt-10 px-10 py-[50px]'>
                    <h1 className='text-gray-400 text-start text-3xl '>Total Sale - Total Sales Return: ₨ 17,704.60 - ₨ 0.00 = ₨ 17,704.60</h1>
                    <h1 className='text-gray-400 text-start text-3xl mt-10 '>Total Expense: ₨ 274.00</h1>

                </div>



                <div className='flex  mt-3 bg-white'>
                    <NavLink to={"sr_sales_tab"} className={`flex aria-[current=page]:border-t-[3px] mx-5 aria-[current=page]:border-blue-600  items-center `}>
                        <FaCog size={15} className='mx-2' />
                        <h1 className='font-bold text-lg'>Sales Added</h1>
                    </NavLink>
                    <NavLink to={"sr_commision_tab"} className={`flex aria-[current=page]:border-t-[3px] mx-5 aria-[current=page]:border-blue-600  items-center `}>
                        <FaCog size={15} className='mx-2' />
                        <h1 className='font-bold text-lg'>Sales With Commision</h1>
                    </NavLink>
                    <NavLink to={"sr_expense_tab"} className={`flex aria-[current=page]:border-t-[3px] mx-5 aria-[current=page]:border-blue-600  items-center `}>
                        <FaCog size={15} className='mx-2' />
                        <h1 className='font-bold text-lg'>Expenses</h1>
                    </NavLink>
                    <NavLink to={"sr_payments_with_cmmsn_tab"} className={`flex aria-[current=page]:border-t-[3px] mx-5 aria-[current=page]:border-blue-600  items-center `}>
                        <FaCog size={15} className='mx-2' />
                        <h1 className='font-bold text-lg'>Payments With Commision</h1>
                    </NavLink>
                    

                </div>


                <div className='flex w-full pt-5 min-h-[400px] bg-white'>
                    <Outlet />
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




            </div>




        </div>
    )
}

export default SaleRepresentativeRpt
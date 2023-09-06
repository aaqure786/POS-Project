import React from 'react'
import { FaArrowAltCircleDown, FaHourglassHalf, FaInfo, FaMapMarker, FaMobile, FaMoneyBillAlt, FaPaperclip, FaPenSquare, FaScroll, FaUserTie } from 'react-icons/fa'
import {Outlet , NavLink} from 'react-router-dom'


const ViewContact = () => {
    const dummyData = [
        {
            id: 1,
            Username: "username",
            Name: "User",
            Role: "Admin",
            Email: "username@gmail.com"
        },
        {
            id: 2,
            Username: "username1",
            Name: "User1",
            Role: "Admin",
            Email: "username@gmail.com"
        },
        {
            id: 3,
            Username: "username2",
            Name: "User2",
            Role: "Admin",
            Email: "username2@gmail.com"
        },
        {
            id: 4,
            Username: "username3",
            Name: "User3",
            Role: "Admin",
            Email: "username3@gmail.com"
        },
        {
            id: 5,
            Username: "username4",
            Name: "User4",
            Role: "Admin",
            Email: "username4@gmail.com"
        },
        {
            id: 6,
            Username: "username5",
            Name: "User5",
            Role: "Admin",
            Email: "username5@gmail.com"
        },
        {
            id: 7,
            Username: "username6",
            Name: "User6",
            Role: "Admin",
            Email: "username6@gmail.com"
        }
    ]
    return (
        <div className='w-full p-2 bg-gray-200 min-h-screen'>
            <div className=' flex flex-col md:flex-row justify-between items-center'>
                <h1 className='text-2xl'>View Contact</h1>
                <select type='text' placeholder='Prefix' className='px-2 py-[3px] w-[300px] border-[1px] border-gray-600 focus:outline-none' >
                    {dummyData.map((data, index) => {
                        return <option key={index} value={data.Name}>{data.Name}</option>
                    })}

                </select>
            </div>
            <div className='flex mt-3 flex-col  p-4 shadow-lg shadow-gray-300 bg-white '>
                <div className='flex items-center justify-start'>
                    <FaUserTie size={20} />
                    <h1 className='font-bold text-gray-700 text-lg mt-1'>User Name </h1>
                    <h1 className=' text-lg mt-1 mx-2'>Supplier</h1>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>
                    <div className='flex flex-col justify-start items-start'>
                        <div className='flex items-center'>
                            <FaMapMarker size={15} />
                            <h1 className='font-bold text-gray-700 text-lg'>Address </h1>
                        </div>
                        <h1 className=' text-sm'>Address</h1>
                    </div>
                    <div className='flex flex-col justify-start items-start'> 
                        <div className='flex items-center'>
                            <FaInfo size={15} />
                            <h1 className='font-bold text-gray-700 text-lg'>Tax Number</h1>
                        </div>
                        <h1 className=' text-sm'>Tax Number</h1>

                    </div>
                </div>
                <div className='flex flex-col mt-2 justify-start items-start'>
                    <div className='flex items-center '>
                        <FaMobile size={15} />
                        <h1 className='font-bold text-gray-700 text-lg'>Mobile</h1>
                    </div>
                    <h1 className=' text-sm'>Mobile Number</h1>

                </div>
                <div className='flex items-end justify-end flex-col'>
                    <div className='flex text-white bg-blue-600 items-center p-2 justify-center'>
                        <FaMoneyBillAlt size={15} />
                        <h1 className=' text-sm mx-1'>Pay Due Amount</h1>
                    </div>
                    <div className='flex mt-2 text-white p-2 bg-blue-600 items-center justify-center'>
                        <h1 className=' text-sm'>Add Discount</h1>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-6 mt-3 bg-white'>
                <NavLink to={"ledger_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaScroll size={20} />
                    <h1 className='font-bold text-xl'>Ledger</h1>
                </NavLink>
                <NavLink to={"purchase_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaArrowAltCircleDown size={20} />
                    <h1 className='font-bold text-xl'>Purchases</h1>
                </NavLink>
                <NavLink to={"stock_report_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaHourglassHalf size={20} />
                    <h1 className='font-bold text-xl'>Stock Report</h1>
                </NavLink>
                <NavLink to={"document_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaPaperclip size={20} />
                    <h1 className='font-bold text-xl'>Documents & Notes</h1>
                </NavLink>
                <NavLink to={"payment_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaMoneyBillAlt size={20} />
                    <h1 className='font-bold text-xl'>Payments</h1>
                </NavLink>
                <NavLink to={"activities_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaPenSquare size={20} />
                    <h1 className='font-bold text-xl'>Activities</h1>
                </NavLink>
            </div>
            <div className='flex w-full  min-h-[400px] bg-white'>
                <Outlet />
            </div>


        </div>
    )
}

export default ViewContact
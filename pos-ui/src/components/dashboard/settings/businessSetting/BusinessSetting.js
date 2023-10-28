import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'

const BusinessSetting = () => {
    const [info3, setInfo3] = useState(false)
    return (
        <div className='flex flex-col bg-gray-100 p-5'>
            <h1 className='text-start text-2xl font-semibold'>Business Setting</h1>
            <div className='flex m-10 bg-white shadow-xl shadow-gray-400'>
                <div className='flex flex-col w-1/6'>
                    <NavLink to={"business"} className={`flex py-3 border-[1px] border-gray-400 aria-[current=page]:text-white aria-[current=page]:bg-blue-600  items-center justify-center`}>
                        <h1 className='font-bold'>Business</h1>
                    </NavLink>
                    <NavLink to={"tax"} className={`flex py-3 border-[1px] border-gray-400 relative aria-[current=page]:text-white aria-[current=page]:bg-blue-600  items-center justify-center`}>
                        <h1 className='font-bold flex items-center'>Tax
                            <FaInfoCircle onMouseOver={() => { setInfo3(true) }} onMouseLeave={() => { setInfo3(false) }} size={15} style={{ color: "skyblue" }} className='mx-2  cursor-help' />
                            {info3 &&
                                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                    <p className='text-start mt-2 text-gray-600'>Registered Tax number for your business</p>

                                </div>
                            }
                        </h1>
                    </NavLink>
                    
                    <NavLink to={"system"} className={`flex py-3 border-[1px] border-gray-400 aria-[current=page]:text-white aria-[current=page]:bg-blue-600  items-center justify-center`}>
                        <h1 className='font-bold'>System</h1>
                    </NavLink>
                    <NavLink to={"prefixes"} className={`flex py-3 border-[1px] border-gray-400 aria-[current=page]:text-white aria-[current=page]:bg-blue-600  items-center justify-center`}>
                        <h1 className='font-bold'>Prefixes</h1>
                    </NavLink>
                    <NavLink to={"custom-lables"} className={`flex py-3 border-[1px] border-gray-400 aria-[current=page]:text-white aria-[current=page]:bg-blue-600  items-center justify-center`}>
                        <h1 className='font-bold'>CustomLables</h1>
                    </NavLink>
                </div>
                <div className='flex w-5/6 p-3'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default BusinessSetting
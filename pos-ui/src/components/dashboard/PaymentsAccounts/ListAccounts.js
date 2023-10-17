import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaBook, FaList } from 'react-icons/fa'
const ListAccounts = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-100 p-5'>
            <div className='flex items-center'>
                <h1 className='text-2xl text-start '>Payment Accounts</h1>
                <h1 className='text-sm mx-2 mt-2 '>Manage Your Accounts</h1>
            </div>

            <div className='flex bg-red-500 mt-2 items-center rounded-md w-full text-white p-3'>
                <h1>Total 34 payments are not linked with any Account</h1>
                <Link to={"/home/accounts/payment-account-report"} className='underline mx-2'>View Details</Link>
            </div>


            <div className='flex  mt-3 p-2 bg-white'>
                <NavLink to={"othe_accounts"} className={`flex aria-[current=page]:border-t-[3px] mx-5 aria-[current=page]:border-blue-600  items-center `}>
                    <FaBook size={15} className='mx-1' />
                    <h1 className='font-bold text-lg'>Accounts</h1>
                </NavLink>
                <NavLink to={"accounts_types"} classNaame={`flex aria-[current=page]:border-t-[3px] mx-5 aria-[current=page]:border-blue-600  items-center `}>
                    <div className='flex items-center'>
                        <FaList size={15} className='mx-1' />
                        <h1 className='font-bold text-lg'>Accounts Types</h1>
                    </div>
                </NavLink>

            </div>


            <div className='flex w-full pt-5 min-h-[400px] bg-white'>
                <Outlet />
            </div>


        </div>
    )
}

export default ListAccounts
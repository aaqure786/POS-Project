import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BiChevronDown, BiSearchAlt } from 'react-icons/bi'
import { MdOutlineManageAccounts, MdDashboard, MdOutlineLocalShipping, MdUpdate, MdReport } from 'react-icons/md'
import { PiOfficeChair } from 'react-icons/pi'
import { TbReport, TbReportMoney } from 'react-icons/tb'
import { BsFillPersonFill, BsHouseAdd, BsPersonAdd } from 'react-icons/bs'
import { GoReport } from 'react-icons/go'
import { HiDocumentReport } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AiOutlineCheckCircle, AiOutlineEdit, AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { FaTruckPickup } from 'react-icons/fa'
const SideBar = () => {
  const [moffice, setMoffice] = useState(false)
  const [offmang, setOffmang] = useState(false)
  const [mangshipmnt, setMangshipmnt] = useState(false)
  const [reports, setReports] = useState(false)
  const [customer, setCustomer] = useState(false)
  const [courier, setCourier] = useState(false)
  return (
    <div className='bg-gray-900 min-h-[83vh] py-[50px] w-full flex   flex-col'>
      {/* Dashboard button */}
      <Link to={"mainDashboard"} className='flex mx-5 px-2 py-1 border-2 border-gray-600 active:border-white justify-start'>
        <MdDashboard size={30} style={{ color: "white" }} />
        <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Dashboard</h1>
      </Link>
      {/* Manage Offices */}
      <div className='flex mx-5 px-2 mt-2 py-1 border-2 border-gray-600 active:border-white  justify-start'>
        <Link to={"manageOffice"} className='flex'>
          <MdOutlineManageAccounts size={30} style={{ color: "white" }} />
          <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Manage Offices</h1>
        </Link>
        <motion.h1 animate={moffice ? { rotate: 180 } : { rotate: 0 }} className='text-lg md:text-3xl mt-1 text-white cursor-pointer '> <BiChevronDown onClick={() => { setMoffice(!moffice) }} /> </motion.h1>
      </div>
      {moffice &&
        <Link to={'manageOffice/addoffice'} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
          <BsHouseAdd size={30} style={{ color: "white" }} />
          <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Add Offices</h1>
        </Link>
      }
      {/* Office Managers */}
      <div className='flex mx-5 px-2 mt-2 py-1 border-2 border-gray-600 active:border-white justify-start'>
        <Link to={"officeManager"} className='flex'>
          <PiOfficeChair size={30} style={{ color: "white" }} />
          <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Office Managers</h1>
        </Link>
        <motion.h1 animate={offmang ? { rotate: 180 } : { rotate: 0 }} className='text-lg md:text-3xl mt-1 text-white cursor-pointer '> <BiChevronDown onClick={() => { setOffmang(!offmang) }} /> </motion.h1>
      </div>
      {offmang &&
        <div>
          <Link to={"officeManager/addManager"} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <BsPersonAdd size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Add Office Manager</h1>
          </Link>
          {/* <Link to={"officeManager/addManager"} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <BiShow size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>View Office Manager</h1>
          </Link> */}
        </div>
      }
      {/* Manage Shippment */}
      <div className='flex mx-5 px-2 mt-2 py-1 border-2 border-gray-600 justify-start'>
        <Link to={"shipment"} className='flex'>
          <MdOutlineLocalShipping size={30} style={{ color: "white" }} />
          <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Manage Shipment</h1>
        </Link>
        <motion.h1 animate={mangshipmnt ? { rotate: 180 } : { rotate: 0 }} className='text-lg md:text-3xl mt-1 text-white cursor-pointer '> <BiChevronDown onClick={() => { setMangshipmnt(!mangshipmnt) }} /> </motion.h1>
      </div>
      {mangshipmnt &&
        <div>
          <Link to={'shipment/searchbyconsignment'} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <BiSearchAlt size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg'>Search By Consignment</h1>
          </Link>
          <Link to={'shipment/updateStatus'} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <MdUpdate size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Update Status</h1>
          </Link>
        </div>
      }
      {/* View Reports */}
      <div className='flex mx-5 px-2 mt-2 py-1 border-2 border-gray-600 justify-start'>
        <Link to={'report'} className='flex'>
        <TbReport size={30} style={{ color: "white" }} />
        <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>View Reports</h1>
        </Link>
        <motion.h1 animate={reports ? { rotate: 180 } : { rotate: 0 }} className='text-lg md:text-3xl mt-1 text-white cursor-pointer '> <BiChevronDown onClick={() => { setReports(!reports) }} /> </motion.h1>
      </div>
      {reports &&
        <div>
          <Link to={'report/customerReport'} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <HiDocumentReport size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Customer Reports</h1>
          </Link>
          <Link to={'report/consignmentReport'} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <TbReportMoney size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Consignment Report</h1>
          </Link>
          <Link to={'report/pickupReport'} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <GoReport size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg'>Pickup Report</h1>
          </Link> 
          <Link to={'report/statusReport'} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <MdReport size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Status Report</h1>
          </Link>
        </div>
      }
      {/* Customer */}
      <div className='flex mx-5 px-2 mt-2 py-1 border-2 border-gray-600 justify-start'>
        <Link to={"customer"} className='flex'>
          <BsFillPersonFill size={30} style={{ color: "white" }} />
          <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'> Customer</h1>
        </Link>
        <motion.h1 animate={customer ? { rotate: 180 } : { rotate: 0 }} className='text-lg md:text-3xl mt-1 text-white cursor-pointer '> <BiChevronDown onClick={() => { setCustomer(!customer) }} /> </motion.h1>
      </div>
      {customer &&
        <div>
          <div className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <AiOutlineUserAdd size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Add Customer</h1>
          </div>
          <div className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <AiOutlineShoppingCart size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Place Order</h1>
          </div>
          <div className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <AiOutlineCheckCircle size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg'>Check Status</h1>
          </div>
          
            <Link to={'customer/updateCustomerStatus'} className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
              <AiOutlineEdit size={30} style={{ color: "white" }} />
              <h1 className='text-white mt-1 mx-2 text-lg'>Approve Customer</h1>
            </Link>
          
        </div>
      }
      {/* Courier */}
      <div className='flex mx-5 px-2 mt-2 py-1 border-2 border-gray-600 justify-start'>
        <Link to={"courier"} className='flex'>
          <BsFillPersonFill size={30} style={{ color: "white" }} />
          <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'> Courier</h1>
        </Link>
        <motion.h1 animate={courier ? { rotate: 180 } : { rotate: 0 }} className='text-lg md:text-3xl mt-1 text-white cursor-pointer '> <BiChevronDown onClick={() => { setCourier(!courier) }} /> </motion.h1>
      </div>
      {courier &&
        <div>
          <div className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <FaTruckPickup size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Parcel Pickup</h1>
          </div>
          {/* <div className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <AiOutlineShoppingCart size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg md:text-xl'>Place Order</h1>
          </div>
          <div className='flex w-[80%] ml-11 px-2 mt-2 py-1 border-2 border-gray-700 justify-start'>
            <AiOutlineCheckCircle size={30} style={{ color: "white" }} />
            <h1 className='text-white mt-1 mx-2 text-lg'>Check Status</h1>
          </div> */}
        </div>
      }
    </div>
  )
}
export default SideBar
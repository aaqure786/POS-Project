import React, { useState } from "react";
import { BiSolidChevronLeft } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import {
  FaAddressBook,
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaCalendarCheck,
  FaChartBar,
  FaCheckCircle,
  FaCog,
  FaCubes,
  FaDatabase,
  FaEnvelope,
  FaFire,
  FaIndustry,
  FaListAlt,
  FaMinusCircle,
  FaMoneyCheckAlt,
  FaProjectDiagram,
  FaQrcode,
  FaTachometerAlt,
  FaTruck,
  FaUsers,
  FaWordpress,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {motion} from "framer-motion"
// import { useSelector } from 'react-redux'

const SideBar = () => {
  // const clicked = useSelector((state)=>state.sidebar.value)
  const openNewTab=  (URl)=>{
    const url = URl;
    window.open(url,'_blank')
}
  
  const [actionList, setActionList] = useState(Array(20).fill(false))

    const toggleDropdown = (index) => {
        const dropDownAction = [...actionList];
        dropDownAction.map((val, i) => {
            if (i === index) {
                dropDownAction[i] = !dropDownAction[i];

            } else {
                dropDownAction[i] = false
            }
            return dropDownAction
        })
        setActionList(dropDownAction);
      }

  const clicked = useSelector((state) => state.sidebar.value);

  return (
    <div
      className={`whitespace-nowrap min-h-[100%] py-[20px] w-full ${clicked ? "flex" : "hidden"
        }   md:flex bg-gray-100  flex-col`}
    >
      {/* Home button */}
      <div className="flex justify-between items-center">
        <Link
          to={"/home"}
          className="flex mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaTachometerAlt size={20} />
          <h1 className="mt-1 ml-5 text-sm ">Home</h1>
        </Link>
      </div>
      {/* User Management */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(0)
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaAddressBook size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">User Management</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[0] && (
        <motion.div initial = {{ height: 0, opacity:0}} animate={{height: actionList[0] ? "auto" : 0, opacity:1}} transition={{duration:0.4}}  className="flex flex-col mx-4">
          <NavLink
            to={"/home/users"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm  ">Users</h1>
          </NavLink>
          <NavLink
            to={"/home/roles"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Roles</h1>
          </NavLink>
          <NavLink
            to={"/home/sales-commission-agents"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Sales Commision Agents
            </h1>
          </NavLink>
        </motion.div>
      )}
      {/* Contacts */}
      <div  className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(1)
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaUsers size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Contacts</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[1] && (
        <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[1] ? "auto" : 0, opacity:1}} transition={{duration:0.4}} className="flex flex-col mx-4">
          <NavLink
            to={"/home/contact/supplier"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Suppliers</h1>
          </NavLink>
          <NavLink
            to={"/home/contact/customer"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Customers</h1>
          </NavLink>
          <NavLink
            to={"/home/contact/customer-group"}
            className="flex hover:text-black  py-1 items-center aria-[current=page]:font-bold aria-[current=page]:text-black   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              {" "}
              Customer Groups
            </h1>
          </NavLink>
          <NavLink
            to={"/home/contact/import"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Import Contacts{" "}
            </h1>
          </NavLink>
        </motion.div>
      )}
      {/* Products */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(2);
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaCubes size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Products</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[2] && (
        <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[2] ? "auto" : 0, opacity:1}} transition={{duration:0.4}} className="flex flex-col mx-4">
          <NavLink
            to={"/home/products"}
            className="flex hover:text-black aria-[current=page]:font-bold  aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">List Products</h1>
          </NavLink>
          <NavLink
            to={"/home/products/create"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Add Product</h1>
          </NavLink>
          <NavLink
            to={"/home/update-product-price"}
            className="flex hover:text-black  aria-[current=page]:font-bold aria-[current=page]:text-black py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              {" "}
              Update Price{" "}
            </h1>
          </NavLink>
          <NavLink
            to={"/home/lables/show"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              {" "}
              Print Lables{" "}
            </h1>
          </NavLink>
          <NavLink
            to={"/home/variation-templates"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Variations</h1>
          </NavLink>
          <NavLink
            to={"/home/import-products"}
            className="flex hover:text-black  py-1 items-center aria-[current=page]:font-bold aria-[current=page]:text-black  justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Import Products
            </h1>
          </NavLink>
          <NavLink
            to={"/home/import-opening-stock"}
            className="flex hover:text-black  py-1 items-center  aria-[current=page]:font-bold aria-[current=page]:text-black justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Import Opening Stocks
            </h1>
          </NavLink>
          <NavLink
            to={"/home/selling-price-group"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Selling Price Group
            </h1>
          </NavLink>
          <NavLink
            to={"/home/units"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Units</h1>
          </NavLink>
          <NavLink
            to={"/home/taxonomies/product"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Categories</h1>
          </NavLink>
          <NavLink
            to={"/home/brands"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Brands</h1>
          </NavLink>
          <NavLink
            to={"/home/warranties"}
            className="flex hover:text-black  py-1 items-center aria-[current=page]:font-bold aria-[current=page]:text-black  justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Warranties</h1>
          </NavLink>
        </motion.div>
      )}
      {/* Manufacturing */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaIndustry size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Manufacturing</h1>
        </Link>
      </div>
      {/* Purchase */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(3)
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaArrowCircleDown size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Purchases</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[3] && (
        <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[3] ? "auto" : 0, opacity:1}} transition={{duration:0.4}} className="flex flex-col mx-4">
          <NavLink
            to={"/home/purchase-order"}
            className="flex hover:text-black  py-1 items-center  aria-[current=page]:font-bold aria-[current=page]:text-black justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm  ">
              Purchase Order
            </h1>
          </NavLink>
          <Link
            to={"/home/purchase"}
            className="flex hover:text-black  py-1 items-center aria-[current=page]:font-bold aria-[current=page]:text-black   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              List Purchases
            </h1>
          </Link>
          <NavLink
            to={"/home/purchase/create"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Add Purchase</h1>
          </NavLink>
          <NavLink
            to={"/home/purchase-return"}
            className="flex hover:text-black aria-[current=page]:font-bold py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm  ">
              List Purchase Return
            </h1>
          </NavLink>
        </motion.div>
      )}
      {/* Sell */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(4)
          }}
          className="flex mx-2 px-2  cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaArrowCircleUp size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Sell</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>

      {actionList[4] && 
      <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[4] ? "auto" : 0, opacity:1}} transition={{duration:0.4}}  className='flex flex-col mx-4'>
        <NavLink to={"/home/sells"} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>All Sales</h1>
        </NavLink>
        <NavLink to={"/home/sell/create"} className='flex hover:text-black  py-1 items-center aria-[current=page]:font-bold aria-[current=page]:text-black   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>Add Sale</h1>
        </NavLink>
        <NavLink to={"/home/pos"} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>List POS</h1>
        </NavLink>
        <NavLink  onClick={()=>{openNewTab("/pos/create")}} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>POS</h1>
        </NavLink>
        <NavLink to={"/home/sell/create/draft"} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>Add Draft</h1>
        </NavLink>
        <NavLink to={"/home/sells/draft"} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>List Drafts</h1>
        </NavLink>
        <NavLink to={"/home/sell/create/quotation"} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>Add Quotation</h1>
        </NavLink>
        <NavLink to={"/home/sells/quotations"} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>List quotation</h1>
        </NavLink>
        <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>List Sell Return</h1>
        </Link>
        <NavLink to={"/home/shipments"} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>Shipments</h1>
        </NavLink>
        <NavLink to={"/home/discounts"} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>Discounts</h1>
        </NavLink>
        {/* <Link to={"/"} className='flex hover:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>Subscriptions</h1>
        </Link> */}
        <NavLink to={"/home/import-sales"} className='flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start'>
          <BsArrowRight size={15} />
          <h1 className=' mt-1 ml-5 text-gray-500 text-sm '>Import Sales</h1>
        </NavLink>
      </motion.div>
      }


      {/* Stock Transfer */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(5);
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaTruck size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Stock Transfer</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[5] && (
        <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[5] ? "auto" : 0, opacity:1}} transition={{duration:0.4}} className="flex flex-col mx-4">
          <NavLink
            to={"/home/stock-transfer"}
            className="flex hover:text-black  aria-[current=page]:font-bold aria-[current=page]:text-black py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              List Stock Transfer
            </h1>
          </NavLink>
          <NavLink
            to={"/home/stock-transfers/create"}
            className="flex hover:text-black  py-1 items-center  aria-[current=page]:font-bold aria-[current=page]:text-black justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Add Stock Transfer
            </h1>
          </NavLink>
        </motion.div>
      )}
      {/* Stock Adjustment */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(6);
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center   active:bg-gray-200 justify-start"
        >
          <FaDatabase size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Stock Adjustment</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[6] && (
        <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[6] ? "auto" : 0, opacity:1}} transition={{duration:0.4}} className="flex flex-col mx-4">
          <NavLink
            to={"/home/stock-adjustments"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              List Stock Adjustment
            </h1>
          </NavLink>
          <Link
            to={"/home/stock-adjustments/create"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Add Stock Adjustment
            </h1>
          </Link>
        </motion.div>
      )}
      {/* Expenses */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(7);
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaMinusCircle size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Expenses</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[7] && (
        <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[7] ? "auto" : 0, opacity:1}} transition={{duration:0.4}} className="flex flex-col mx-4">
          <NavLink
            to={"/home/expenses"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">List Expenses</h1>
          </NavLink>
          <NavLink
            to={"/home/expenses/create"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Add Expenses</h1>
          </NavLink>
          <NavLink
            to={"/home/expenses-categories"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Expense Categories
            </h1>
          </NavLink>
        </motion.div>
      )}
      {/* Payment Accounts */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(8);
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaMoneyCheckAlt size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Payment Accounts</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[8] && (
        <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[8] ? "auto" : 0, opacity:1}} transition={{duration:0.4}} className="flex flex-col mx-4">
          <NavLink
            to={"/home/accounts/accounts"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">List Accounts</h1>
          </NavLink>
          <NavLink
            to={"/home/accounts/balance-sheet"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Balance Sheet</h1>
          </NavLink>
          <NavLink
            to={"/home/accounts/trial-balance"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Trial Balance</h1>
          </NavLink>
          <NavLink
            to={"/home/accounts/cash-flow"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Cash Flow</h1>
          </NavLink>
          <NavLink
            to={"/home/accounts/payment-account-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Payment Account Report
            </h1>
          </NavLink>
        </motion.div>
      )}
      {/* Reports */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
           toggleDropdown(9);
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaChartBar size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Reports</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[9] && (
        <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[9] ? "auto" : 0, opacity:1}} transition={{duration:0.4}} className="flex flex-col mx-4">
          <NavLink
            to={"/home/reports/profit-loss"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Profit/Loss Report
            </h1>
          </NavLink>
          <NavLink
            to={"/home/reports/purchase-sell"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Purchase & Sale
            </h1>
          </NavLink>
          <NavLink
            to={"/home/reports/tax-report"}
            className="flex hover:text-black  aria-[current=page]:font-bold aria-[current=page]:text-black py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Tax Report</h1>
          </NavLink>
          {/* <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 mx-1 text-gray-500 text-xs ">
              Supplier & Customer Report
            </h1>
          </Link>
          <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Customer Groups Report
            </h1>
          </Link> */}
          <NavLink
            to={"/home/reports/stock-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Stock Report</h1>
          </NavLink>
          {/* <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Lot Report</h1>
          </Link> */}
          <NavLink
            to={"/home/reports/stock-adjustments-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-xs ">
              Stock Adjustment Report
            </h1>
          </NavLink>
          {/* <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Trending Products
            </h1>
          </Link> */}
          <NavLink
            to={"/home/reports/item-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Items Report</h1>
          </NavLink>
          <NavLink
            to={"/home/reports/product-purchase-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-xs ">
              Product Purchase Report
            </h1>
          </NavLink>
          <NavLink
            to={"/home/reports/product-sell-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Product Sell Report
            </h1>
          </NavLink>
          <NavLink
            to={"/home/reports/purchase-payment-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-xs ">
              Purchase Payment Report
            </h1>
          </NavLink>
          <NavLink
            to={"/home/reports/sell-payment-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Sell Payment Report
            </h1>
          </NavLink>
          <NavLink
            to={"/home/reports/expense-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Expense Report
            </h1>
          </NavLink>
          <NavLink
            to={"/home/reports/register-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Register Report
            </h1>
          </NavLink>
          <NavLink
            to={"/home/reports/sales-representative-report"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-xs ">
              Sales Representative Report
            </h1>
          </NavLink>
          {/* <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Table Report</h1>
          </Link> */}
          {/* <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Service Staff Report
            </h1>
          </Link> */}
          <NavLink
            to={"/home/reports/activity-log"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Activity Log</h1>
          </NavLink>
        </motion.div>
      )}
      {/* Booking */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaCalendarCheck size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Booking</h1>
        </Link>
      </div>
      {/* Kitchen */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaFire size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Kitchen</h1>
        </Link>
      </div>
      {/* Orders */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaListAlt size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Orders</h1>
        </Link>
      </div>
      {/* Notification Template */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaEnvelope size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Notification Template</h1>
        </Link>
      </div>
      {/* Settings */}
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            toggleDropdown(10);
          }}
          className="flex mx-2 px-2 cursor-pointer py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaCog size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Settings</h1>
        </div>
        <BiSolidChevronLeft size={20} className="mx-1" />
      </div>
      {actionList[10] && (
        <motion.div initial = {{ height:0, opacity:0}} animate={{height: actionList[10] ? "auto" : 0, opacity:1}} transition={{duration:0.4}} className="flex flex-col mx-4">
          <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Business Settings
            </h1>
          </Link>
          <NavLink
            to={"/home/business-location"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Business Locations
            </h1>
          </NavLink>
          <NavLink
            to={"/home/invoice-scheme"}
            className="flex hover:text-black aria-[current=page]:font-bold aria-[current=page]:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Invoice Settings
            </h1>
          </NavLink>
          <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Barcode Settings
            </h1>
          </Link>
          <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Receipt Printers
            </h1>
          </Link>
          <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Tax Rates</h1>
          </Link>
          <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">Tables</h1>
          </Link>
          <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Type of Services
            </h1>
          </Link>
          <Link
            to={"/"}
            className="flex hover:text-black  py-1 items-center   justify-start"
          >
            <BsArrowRight size={15} />
            <h1 className=" mt-1 ml-5 text-gray-500 text-sm ">
              Package Subscriptions
            </h1>
          </Link>
        </motion.div>
      )}
      {/* Project */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaProjectDiagram size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Project</h1>
        </Link>
      </div>
      {/* HRM */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaUsers size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">HRM</h1>
        </Link>
      </div>
      {/* Essentials */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaCheckCircle size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Essentials</h1>
        </Link>
      </div>
      {/* Woocommerce */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaWordpress size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Woocommerce</h1>
        </Link>
      </div>
      {/* Catalouge QR */}
      <div className="flex justify-between items-center">
        <Link
          to={"/"}
          className="flex hover:text-black mx-2 px-2 py-1 items-center  active:bg-gray-200 justify-start"
        >
          <FaQrcode size={20} />
          <h1 className=" mt-1 ml-5 text-sm ">Catalouge QR</h1>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;

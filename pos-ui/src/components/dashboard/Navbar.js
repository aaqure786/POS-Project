import React, { useState } from 'react'
// , 
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai"
import { MdNotifications, MdOutlineCancel } from "react-icons/md"
import { motion } from "framer-motion"
import {  BiLogOut } from "react-icons/bi"
import { BsInfoLg } from 'react-icons/bs'
import { FaArrowAltCircleDown, FaCalculator, FaMoneyBillAlt, FaPlusCircle, FaThLarge } from 'react-icons/fa'

const Navbra = () => {
    const [menu, setMenu] = useState(false)
    const [cliked, setCliked] = useState(false)
    const [arrow, setArrow] = useState(false)
    const [money, setMoney] = useState(false)
    const [pos, setPos] = useState(false)
    const [cal, setCal] = useState(false)
    const data = new Date()
    let fullyear = data.getFullYear()
    let fullmonth = data.getMonth() +1
    let fuldate = data.getDate()
    const date = fuldate +"/" + fullmonth +"/"+fullyear;
    return (
        <div>
            <div className='flex w-full h-[50px]   bg-gray-700 z-10 border-b-2 border-gray-400    justify-between '>
                <div className='w-[70%] md:w-[20%] bg-black justify-center hidden md:flex items-center '>
                    <h1 className='text-2xl text-center  text-white  '> EZI POINT OF SALE</h1>
                </div>
                <div className=' w-full md:w-[80%] flex justify-between bg-gradient-to-r from-[#3c3c4e] to-[#245b80]'>
                    <div className='w-[30%]  flex items-center '>
                        <div className='px-5  flex'>
                            <AiOutlineMenu onClick={() => { setMenu(!menu) }} className='text-white cursor-pointer text-xl ' />
                            <BsInfoLg onClick={() => { setMenu(!menu) }} className='bg-white rounded-full cursor-pointer text-xl mx-2 ' />
                        </div>
                    </div>
                    <div className='w-[70%]   relative items-center rounded-r-2xl  flex lg:flex'>
                        <div className='w-[85%] h-full flex items-center justify-end'>
                        <button className='py-1.5 px-2 relative mx-1 bg-blue-300 text-white' onMouseOver={()=>{setArrow(true)}} onMouseLeave={()=>{setArrow(false)}}><FaArrowAltCircleDown size={15} />
                            {arrow && <sapn className="absolute top-8 z-10 text-white bg-black p-2">sometext</sapn>}
                        </button>
                        <button className='py-1.5 px-2 relative mx-1 bg-green-300 text-white' ><FaPlusCircle size={15} /></button>
                        <button className='py-1.5 px-2 relative mx-1 bg-green-300 text-white' onMouseOver={()=>{setCal(true)}} onMouseLeave={()=>{setCal(false)}}><FaCalculator size={15} />
                        {cal && <sapn className="absolute top-8 z-10 text-white bg-black p-2">sometext</sapn>}
                        </button>
                        <button className='py-1 px-2 relative mx-1 bg-green-300 text-white flex items-center justify-center' onMouseOver={()=>{setPos(true)}} onMouseLeave={()=>{setPos(false)}}><FaThLarge size={15} /> <span className='mx-2 font-semibold text-sm'>POS</span>
                        {pos && <sapn className="absolute top-8 z-10 text-white bg-black p-2">sometext</sapn>}
                        </button>
                        <button className='py-1.5 px-2 relative mx-1 bg-green-300 text-white' onMouseOver={()=>{setMoney(true)}} onMouseLeave={()=>{setMoney(false)}}><FaMoneyBillAlt size={15} />
                        {money && <sapn className="absolute top-8 z-10 text-white bg-black p-2">sometext</sapn>}
                        </button>
                        

                        <h1 className='mx-2 text-white font-bold textsm'>{date}</h1>
                        <div className='flex w-[5%]  h-[80%] justify-center items-center mx-2 hover:bg-black' onClick={() => { setCliked(!cliked) }}>
                            <h1 className=' text-white'><MdNotifications size={20}/></h1>
                        </div>
                        </div>
                        <div className='flex w-[15%]  h-[80%] justify-center items-center mx-2 hover:bg-black' onClick={() => { setCliked(!cliked) }}>
                            <h1 className='text-sm  text-white'>Username</h1>
                        </div>
                        {cliked &&
                            <div className='w-full h-[150px] absolute top-20 z-10 right-10 bg-gray-100 justify-center rounded-3xl flex items-start  flex-col'>
                                <div className='flex'>
                                    <AiOutlineSetting size={20} className='mx-5 mt-1' />
                                    <h1 className='text-xl font-semibold'>Manage Account</h1>
                                </div>
                                <button className='flex mt-2 '>
                                    <BiLogOut size={20} className='mx-5 mt-1' />
                                    <h1 className='text-xl font-semibold'>Logout</h1>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {menu && <div className='absolute  bg-gray-100 top-0 z-20  flex justify-center w-full h-screen'>
                <div className='mt-10 flex justify-center'>
                    <MdOutlineCancel className='text-2xl cursor-pointer' onClick={() => { setMenu(!menu) }} />
                </div>
                <div className='flex items-center'>
                    <nav>
                        <motion.ul className='flex flex-col items-center '>
                            <div className='flex'>
                                <AiOutlineSetting size={20} className='mx-5 mt-1' />
                                <h1 className='text-xl font-semibold'>Manage Account</h1>
                            </div>
                            <div className='flex mt-2 '>
                                <BiLogOut size={20} className='mx-5 mt-1' />
                                <h1 className='text-xl font-semibold'>Logout</h1>
                            </div>
                        </motion.ul>
                    </nav>
                </div>
            </div>}
        </div>
    )
}
export default Navbra
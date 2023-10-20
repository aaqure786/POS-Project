import React, { useRef, useState } from 'react'
import { FaEdit, FaPowerOff, FaSearch, FaWrench } from 'react-icons/fa'

import { AiFillCaretDown, AiOutlinePlus } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AddorEditBusinessLocation from '../settings/businesLocation/AddorEditBusinessLocation';


const BusinessLocationTbl = () => {
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
    const printRef = useRef()

    





    const [crpage, setCrpage] = useState(1)
    const rcrdprpg = 5
    const lasIndex = crpage * rcrdprpg
    const frstIndex = lasIndex - rcrdprpg
    const record = dummyData.slice(frstIndex, lasIndex)
    const npage = Math.ceil(dummyData.length / rcrdprpg)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const [actionList, setActionList] = useState(Array(record.length).fill(false))

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
        
        console.log(dropDownAction)
        setActionList(dropDownAction);
    };





    //Function to print


    const prevPage = () => {
        if (crpage !== 1) {
            setCrpage(crpage - 1)
        }
    }
    const nextPage = () => {
        if (crpage !== numbers.length) {
            setCrpage(crpage + 1)
        }
    }
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [iseidtId, setIseidtId] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const displayData = () => {
        if (isAdd === true) {
            return <AddorEditBusinessLocation id={0} />
        } else if (isEdit === true && iseidtId !== 0) {
            return <AddorEditBusinessLocation id={iseidtId} />
        }
    }


    return (
        <div className='bg-white w-full border-t-[3px] border-blue-600 rounded-md py-5 px-2'>
            <div className='flex justify-between mt-2 text-sm mx-5'>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold text-start'>All your Business Locations</h1>
                </div>
                <button onClick={() => { setIsAdd(true); setIsClicked(true) }} className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                    <AiOutlinePlus size={15} /> Add

                </button>

            </div>
            <div className='flex mt-5 flex-col md:flex-row  items-center justify-center md:justify-between mx-5'>



                <div className='flex items-center justify-center  w-[300px] md:w-auto my-2 md:my-0 border-[1px] border-black'>
                    <FaSearch size={15} className=' mt-1 mx-1' />
                    <input className=' focus:outline-none px-2' type='search' id="search" name='serch' placeholder='Search' />
                </div>


            </div>


            <div className='flex flex-col justify-center items-center mt-5 mx-5' ref={printRef} >
                <table id='usertbl' className="table-fixed w-full mb-10  whitespace-no-wrap ">
                    <thead>
                        <tr className='h-100px]'>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Name</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Location ID</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Landmark</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">City</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Zip Code</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">State</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Country</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Price Group</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Invoice Scheme</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Invoice Layout for POS</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Invoice Layout for Sale</th>
                            <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-white tracking-wider font-medium text-gray-900 text-sm bg-gray-200 relative">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {record.map((value, index) => {
                            return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""}`}>
                                <td className="px-1 py-1 text-sm">{value.Username}</td>
                                <td className="px-1 py-1"> {value.Name}</td>
                                <td className="px-1 py-1 text-sm">{value.Username}</td>
                                <td className="px-1 py-1"> {value.Name}</td>
                                <td className="px-1 py-1 text-sm">{value.Username}</td>
                                <td className="px-1 py-1"> {value.Name}</td>
                                <td className="px-1 py-1"> {value.Name}</td>
                                <td className="px-1 py-1 text-sm">{value.Username}</td>
                                <td className="px-1 py-1"> {value.Name}</td>
                                <td className="px-1 py-1 text-sm">{value.Username}</td>
                                <td className="px-1 py-1"> {value.Name}</td>
                                <td className='py-1 flex '>
                                        <div onClick={() => { toggleDropdown(index) }} className='flex px-2 py-1 relative cursor-pointer items-center bg-blue-400 rounded-md text-white justify-center'>
                                            <h1 className='text-sm'>Action</h1>
                                            <AiFillCaretDown size={10} />
                                            {actionList[index] &&
                                                <ul className='absolute top-5 right-10 z-20 flex flex-col items-start w-[130px] bg-white text-gray-600 shadow-xl shadow-gray-400 '>

                                                    <li className='w-full'>
                                                        <div onClick={() => { setIsClicked(true); setIsEdit(true); setIseidtId(value.id) }} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                            <FaEdit size={15}  className='mx-1'/>
                                                            <h1 className='text-sm'>Edit</h1>
                                                        </div >
                                                    </li>
                                                    <li className='w-full'>
                                                        <Link to={`/home/accounts/accounts/${value.id}`} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                            <FaWrench size={15}  className='mx-1'/>
                                                            <h1 className='text-sm'>Account Book</h1>
                                                        </Link>
                                                    </li>
                                                    <li className='w-full'>
                                                        <div onClick={()=>{}} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaPowerOff size={15}  className='mx-1'/>
                                                            
                                                            <h1 className='text-sm'>Fund Transfer</h1>
                                                        </div >
                                                    </li>
                                                    
                                                </ul>
                                            }
                                        </div>
                                    </td>
                            </tr>
                        })}


                    </tbody>
                </table>
                <nav className='  my-2 w-full'>
                    <ul className='flex justify-end'>
                        <li>
                            <button disabled={crpage === 1 ? true : false} className='p-3 mx-1 bg-green-400 text-white' onClick={prevPage}> Previous</button>
                        </li>
                        {
                            numbers.map((n, i) => {
                                return <li key={i} className={`${crpage === n ? 'bg-blue-500' : ''} py-3 px-4 mx-1 border-[1px] border-gray-400`}>
                                    <button onClick={() => { setCrpage(n) }}>{n}</button>
                                </li>
                            })
                        }
                        <li>
                            <button className='p-3 bg-green-400 text-white mx-1 ' onClick={nextPage}> Next</button>
                        </li>
                    </ul>
                </nav>

                {isClicked &&
                    <div className='absolute top-0  flex flex-col  items-center  right-0 bg-black/50 w-full min-h-screen'>
                        <div className='w-full md:w-[70%]   mt-10 bg-white px-5 pt-2'>
                            <div className='flex items-end justify-end '>
                                <MdCancel onClick={() => { setIsClicked(false); setIsAdd(false); setIsEdit(false); setIseidtId(0) }} size={20} />

                            </div>
                            {displayData()}
                        </div>

                    </div>

                }
            </div>
        </div>
    )
}

export default BusinessLocationTbl
import React, {  useState } from 'react'
import {  FaFileAlt } from 'react-icons/fa'

import { AiOutlinePlus } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router-dom';


const InvoiceLayout = () => {
    const dummyData = [
        {
            id: 1,
            location: "Ezitech",
            Name: "Default",
            
        },
        {
            id: 2,
            location: "Eziline Software House (Pvt.) Ltd ",
            Name: "Test Layout",
        }
    ]
   
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [iseidtId, setIseidtId] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const displayData = () => {
        if (isAdd === true) {
            // return <AddorEditInvoiceScheme id={0} />
        } else if (isEdit === true && iseidtId !== 0) {
            // return <AddorEditInvoiceScheme id={iseidtId} />
        }
    }


    return (
        <div className='bg-white w-full '>
            <div className='flex justify-between w-full mt-2 text-sm p-5'>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold text-start'>All your Invoice Layout</h1>
                </div>
                <Link to={"/home/invoice-layout/create"} onClick={() => { setIsAdd(true); setIsClicked(true) }} className='flex items-center justify-center  font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                    <AiOutlinePlus size={15} /> Add

                </Link>

            </div>
            

            <div className='grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5'>
                {dummyData.map((val,index)=>{
                    return <div  key={index} onc className='flex flex-col items-center justify-center'>
                        <Link to={`/home/invoice-layout/${val.id}/edit`} className='flex flex-col items-center'>
                        <FaFileAlt size={50} style={{color:"blue"}} className=' '/>
                        <p className='text-blue-400 '>{val.Name}</p>
                        <h1 className='text-center font-bold '>Used in Location:</h1>
                        <p className=''>{val.location}</p>
                        </Link>
                    </div>
                })}
            </div>


            {isClicked &&
                    <div className='absolute top-0  flex flex-col  items-center  right-0 bg-black/50 w-full min-h-screen'>
                        <div className='w-full md:w-[50%]   mt-10 bg-white px-5 pt-2'>
                            <div className='flex items-end justify-end '>
                                <MdCancel onClick={() => { setIsClicked(false); setIsAdd(false); setIsEdit(false); setIseidtId(0) }} size={20} />

                            </div>
                            {displayData()}
                        </div>

                    </div>

                }

           
        </div>
    )
}

export default InvoiceLayout
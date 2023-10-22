import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const UpdateStatus = (props) => {
    const [col6, setCol6] = useState(false)
    const [status, setStatus] = useState("")
    const [isserror, setIsserror] = useState(false);
    const handleClick = (e) => {
        if (status.length === 0) {
            setIsserror(true);
        } else if (props.id) {
           
            console.log("Handle Update", status);
        } 
    };
    return (
        <div className='flex flex-col w-full px-5 pb-5 bg-white '>
            <div className='flex text-2xl text-start items-center relative'>
                <h1> Payment Options:</h1>
                <FaInfoCircle onMouseOver={() => { setCol6(true) }} onMouseLeave={() => { setCol6(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-2 cursor-help' />
                {col6 &&
                    <div className='flex flex-col w-[200px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                        <p className='text-start text-sm mt-2 text-gray-800'>Stock Transfer Will not be editable if status is completed</p>

                    </div>
                }
            </div>

            <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex relative">
                        Status:*
                        <h2 className="text-red-400">
                        {isserror && status.length === 0
                            ? "Required field"
                            : ""}
                    </h2>
                    </h2>
                    <select type="text" placeholder='Alternate Contact Number'
                        value={status}
                        onChange={(e) => setStatus(e.target.value) }
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
                        <option value={""}>Please Select</option>
                        <option value={"Pending"}>Pending</option>
                        <option value={"Transit"}>Transit</option>
                        <option value={"Completed"}>Completed</option>

                    </select>
                </div>

                <div className='flex items-end mt-5 justify-end'>
                <button
                    onClick={handleClick}
                    className="bg-green-500 w-[100px] px-2 py-2 items-center justify-center flex"
                >
                    Update
                </button>
            </div>

        </div>
    )
}

export default UpdateStatus
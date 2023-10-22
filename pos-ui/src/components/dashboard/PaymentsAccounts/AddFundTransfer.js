import React, { useRef, useState } from 'react'
import { AiTwotoneFolderOpen } from 'react-icons/ai'

const AddFundTransfer = (props) => {
    const [isserror, setIsserror] = useState(false)
    const [formData, setFormData] = useState({
        transferFrom: "",
        transferTo: "",
        amount: "",
        date: "",
        file:"",
        note: ""
    })
    const inpuRef = useRef()

    const handleSaveorEdit = () => {
        if (formData.transferFrom.length === 0 ||
             formData.transferTo.length === 0 ||
              formData.amount.length === 0 ||
              formData.date.length === 0) {
            setIsserror(true)
        } else if (props.id) {
            console.log("Handle Update", formData)
        } else {
            console.log("Handle Save", formData)

        }
    }

    return (
        <div className='flex flex-col w-full px-3 bg-white '>
            <div className='flex'>
                <h1 className='text-2xl font-semibold text-start '>Fund Transfer</h1>
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Transfer From:*
                    <span className='text-red-400'>{isserror && formData.transferFrom.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='text' value={formData.transferFrom} onChange={(e) => { setFormData({ ...formData, transferFrom: e.target.value }) }} placeholder='Transfer From' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Transfer To:*
                    <span className='text-red-400'>{isserror && formData.transferTo.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='text' value={formData.transferTo} onChange={(e) => { setFormData({ ...formData, transferTo: e.target.value }) }} placeholder='Transfer To' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Amount:*
                    <span className='text-red-400'>{isserror && formData.amount.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='number' value={formData.amount} onChange={(e) => { setFormData({ ...formData, amount: e.target.value }) }}  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div><div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Date:*
                    <span className='text-red-400'>{isserror && formData.date.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='date' value={formData.date} onChange={(e) => { setFormData({ ...formData, date: e.target.value }) }} placeholder='Account Number' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
           <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Note:
                </h1>
                <textarea rows={4} type='text' value={formData.note} onChange={(e) => { setFormData({ ...formData, note: e.target.value }) }} placeholder='Account Details' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className=' flex flex-col mt-5 w-[50%] '>
          <h2 className='text-start font-bold '> Attach Document:</h2>
          <div className='flex'>
            {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
            <input value={formData.file} readOnly type='text' className='px-3  border-[1px] border-gray-700  focus:outline-none w-[60%]' />
            <input value={formData.file} onChange={(e) => { setFormData({ ...formData, file: e.target.value }) }} className='px-3   focus:outline-none w-[60%] hidden' type='file' ref={inpuRef} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
            <div onClick={() => { inpuRef.current?.click(); }} className='flex cursor-pointersu bg-blue-600 text-white w-[40%] items-center justify-center'>
              <AiTwotoneFolderOpen size={32} />
              Browse
            </div>
          </div>
          <p className='text-start  flex '>Max File size: 5MB:
            <br />
            Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
          </p>

        </div>

            




            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>Transfer</h1>

                </button>
            </div>
        </div>
    )
}

export default AddFundTransfer
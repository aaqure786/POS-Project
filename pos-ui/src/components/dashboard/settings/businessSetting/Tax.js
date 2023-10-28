import React, { useState } from 'react'
import { FaInfo } from 'react-icons/fa'

const Tax = () => {
  const [formData, setFormData] = useState([

  ])
  const handleSetting = () => {
    console.log("Update Setting", formData)
  }
  return (
    <div className='flex flex-col bg-white p-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
        <div className='flex flex-col '>
          <h1 className='flex text-start font-bold'>Tax 1 Name:</h1>
          <div className='flex'>
            <FaInfo size={15} className='w-8 h-9 border-[1px] px-2 py-1 border-gray-400' />
            <input value={formData.tax1Name} onChange={(e) => { setFormData({ ...formData, tax1Name: e.target.value }) }} type='text' placeholder='GST / VAT / Other' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex flex-col '>
          <h1 className='flex text-start font-bold'>Tax 1 No.:</h1>
          <div className='flex'>
            <FaInfo size={15} className='w-8 h-9 border-[1px] px-2 py-1 border-gray-400' />
            <input value={formData.tax1No} onChange={(e) => { setFormData({ ...formData, tax1No: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex flex-col '>
          <h1 className='flex text-start font-bold'>Tax 2 Name:</h1>
          <div className='flex'>
            <FaInfo size={15} className='w-8 h-9 border-[1px] px-2 py-1 border-gray-400' />
            <input value={formData.tax2Name} onChange={(e) => { setFormData({ ...formData, tax2Name: e.target.value }) }} type='text' placeholder='GST / VAT / Other' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex flex-col '>
          <h1 className='flex text-start font-bold'>Tax 2 No.:</h1>
          <div className='flex'>
            <FaInfo size={15} className='w-8 h-9 border-[1px] px-2 py-1 border-gray-400' />
            <input value={formData.tax2No} onChange={(e) => { setFormData({ ...formData, tax2No: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex items-center mt-3'>
          <input value={formData.enableInlineTax} onChange={(e) => { setFormData({ ...formData, enableInlineTax: e.target.value }) }} type='checkbox' className='w-5 h-5 mx-1' />
          <h1 className='flex text-start text-sm '>Enable inline tax in purchase and sell</h1>
        </div>
      </div>
      <div className='flex items-center justify-center mt-5'>
        <button onClick={() => { handleSetting() }} className='bg-red-500 rounded-md text-white px-2 py-2'>Update Settings</button>
      </div>
    </div>
  )
}

export default Tax
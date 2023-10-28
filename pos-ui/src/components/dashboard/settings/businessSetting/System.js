import React, { useState } from 'react'

const System = () => {
  const [formData, setFormData] = useState({
    
  })
  const handleSetting = () => {
    console.log("Update Setting", formData)
  }
  return (
    <div className='flex flex-col p-5'>
      <div className='flex flex-col'>
        <h1 className='text-start font-bold'>Theme Color</h1>
        <div className='flex'>
            <select value={formData.themeColor} onChange={(e) => { setFormData({ ...formData, themeColor: e.target.value }) }} type='text'  className='w-full border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
            <option value={""}>Please Select</option>
              <option value={'Blue'}>Blue</option>
              <option value={'Black'}>Black</option>
              <option value={'Purple'}>Purple</option>
              <option value={'Green'}>Green</option>
              <option value={'Red'}>Red</option>
              <option value={'Yellow'}>Yellow</option>
              <option value={'Blue Light'}>Blue Light</option>
              <option value={'Black Light'}>Black Light</option>
              <option value={'Purple Light'}>Purple Light</option>
              <option value={'Green Light'}>Green Light</option>
              <option value={'Red Light'}>Red Light</option>
            </select>
          </div>
      </div>
      <div className='flex items-center justify-center mt-5'>
        <button onClick={() => { handleSetting() }} className='bg-red-500 rounded-md text-white px-2 py-2'>Update Settings</button>
      </div>
    </div>
  )
}

export default System
import React from 'react'
import { useParams } from 'react-router-dom'

const Settings = () => {
    const parms = useParams()
    const id = parms.id
  return (
    <div className='flex flex-col min-h-screen w-full px-5 py-2 bg-gray-100'>
        <h1 className='text-3xl font-semibold mt-3 text-start'>Business Location Settings - Eziline Software House (Pvt.) Ltd</h1>
        <div className='flex flex-col bg-white '>

        </div>
    </div>
  )
}

export default Settings
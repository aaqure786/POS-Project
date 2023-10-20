import React from 'react'
import BusinessLocationTbl from '../../Tables/BusinessLocationTbl'

const BusinessLocation = () => {
  return (
    <div className='flex flex-col w-full max-h-screen bg-gray-100 px-4 py-2 '>
        <div className='flex'>
            <h1 className='text-2xl font-semibold text-start'>Business Locations</h1>
            <h1 className='text-sm text-gray-500 mx-2 mt-3 text-start'>Manage your business locations</h1>

        </div>
        <div className='flex mt-10'>
        <BusinessLocationTbl />
        </div>
    </div>
  )
}

export default BusinessLocation
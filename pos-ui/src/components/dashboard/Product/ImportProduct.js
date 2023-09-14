import React, { useRef } from 'react'

const ImportProduct = () => {
    const ref = useRef();
    const handleFileUpload = ()=>{
        ref.current?.click();
    }
    return (
        <div className='flex flex-col min-h-screen bg-white p-5'>
            <h1 className='text-xl  text-start mb-4'>Import Products</h1>
            <div onClick={handleFileUpload} className='flex flex-col w-full p-3'>
                <h1 className='text-xl  text-start '>File To Import</h1>
                <div className='flex w-full h-[200px] border-[2px] border-gray-700 cursor-pointer items-center justify-center '>
                    <span>Drop Files Here to Upload</span>
                    <input type='file' className='hidden' ref={ref} />
                </div>


            </div>
        </div>
    )
}

export default ImportProduct
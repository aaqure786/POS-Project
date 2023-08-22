import React from 'react'
import { motion } from 'framer-motion'
import { FcCheckmark } from 'react-icons/fc'
const PekagesCard = () => {
    return (
        <div>
            <div className='min-h-[600px] mt-5 '>
                <div className='grid grid-cols-1 gap-[100px] pb-[100px] sm:flex-col md:grid-cols-3  mx-[5%]  '>
                    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className='flex flex-col max-h-screen shadow-xl border-t-2 border-green-400 md:w-[350px] shadow-gray-300 rounded-xl'>
                        <div className='h-[100px] px-5 py-10   flex flex-col items-center justify-center'>
                            <h1 className=' text-2xl '>Standard</h1>
                            <hr className=' w-full h-[2px] mt-2' />

                        </div>
                        <div className='py-5 px-5 flex flex-col items-center rounded-b-3xl justify-center'>
                            <h1 className='text-gray-500 text-lg mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' /> Creative Design Enable</h1>
                            <h1 className='text-gray-500 text-lg mt-3  flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' /> Vibrant Color Usage</h1>
                            <h1 className='text-gray-500 text-lg mt-3  flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' /> Eye Catching Design</h1>
                            <h1 className='text-gray-500 text-lg mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' /> Extreme Typography</h1>
                            <h1 className='text-gray-500 text-lg mt-3 flex'><FcCheckmark size={20} className='text-green-300 mt-1 mx-2 ' /> Exceptional Design</h1>
                            
                            <h1 className='text-4xl mt-10 flex'>₨ 1,500.00 <span className='text-xl mt-3 text-gray-500'>/ 1 Months</span></h1>
                            
                        </div>
                        <div className='w-full h-[100px] bg-gray-400 flex flex-col items-center justify-center'>
                                <button className='w-[70%] bg-green-400 text-xl py-2 text-white'>Register & subscribe</button>
                                <h1 className='text-sm'>For Small Business</h1>
                            </div>
                    </motion.div>


                </div>
            </div>
        </div>
    )
}

export default PekagesCard
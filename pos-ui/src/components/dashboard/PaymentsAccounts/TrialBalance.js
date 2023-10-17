import React, { useRef, useState } from 'react'
import { FaFilter, FaPrint } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print'

const TrialBalance = () => {
    const [isFilter, setIsFilter] = useState(false)
    const [businesLocation, setBusinesLocation] = useState('')
    const [date, setDate] = useState('')

    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "SellReport",
        copyStyles: true,
    });

    return (

        <div className='flex flex-col mt-4 w-full bg-white rounded-md px-3 items-start justify-start'>
            <h1 className='text-3xl'>Trial Balance</h1>

            <div className='flex cursor-pointer mt-5' onClick={() => { setIsFilter(!isFilter) }}>
                <FaFilter size={20} style={{ color: 'blue' }} />
                <h1 className='text-xl text-blue-600 font-semibold'>Filters</h1>
            </div>
            {isFilter &&
                <div className=' grid grid-cols-1 bg-white rounded-md gap-5 md:grid-cols-4 mt-5 w-full'>
                    <div className='flex flex-col'>
                        <h1 className='text-start font-bold text-sm'>Business Location:</h1>
                        <select value={businesLocation} onChange={(e) => { setBusinesLocation(e.target.value) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Selecet</option>
                            <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Filter By Date:</h1>
                        </div>
                        <input type='date' value={date} onChange={(e) => { setDate(e.target.value) }} className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none' />
                    </div>
                </div>}


            <div className='flex flex-col w-full mt-10 ' ref={printRef}>
                <table className='table-auto w-full'>
                    <thead>
                        <tr className='bg-gray-300 h-[50px] '>
                            <td className='text-center px-2 font-bold py-1'>Trial Balance</td>
                            <td className='text-center px-2 font-bold py-1'>Debit</td>
                            <td className='text-center px-2 font-bold py-1'>Credit</td>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-full'>
                            <th>Supplier Due</th>
                            <td></td>
                            <td>₨ 336,230.50</td>

                        </tr>
                        <tr className='w-full'>
                            <th>Customer Due</th>
                            <td>₨ 336,230.50</td>
                            <td></td>

                        </tr>
                        <tr className='w-full'>
                            <th>Account Balance</th>
                            <td></td>
                            <td></td>

                        </tr>
                    </tbody>
                            <tbody >
                                <tr >
                                    <td>Test Account</td>
                                    <td>₨ -36,230.50</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Askari Bank</td>
                                    <td>₨ -36,230.50</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>asd</td>
                                    <td>₨ -36,230.50</td>
                                    <td></td>
                                </tr>
                            </tbody>

                    <tbody>
                            
                        <tr className='bg-gray-300 h-[50px]'>
                           
                                            <th className='text-center px-2'>Total</th>
                                            <td>₨ 336,220.50</td>
                                            <td>₨ 336,220.50</td>
                                        
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className='flex items-end justify-end mx-3 mt-3 w-full px-5'>
                <div className='flex bg-blue-500 text-white cursor-pointer px-2 py-1' onClick={() => { handlePrint() }}>
                    <FaPrint size={15} />
                    <h1 className='text-sm mx-1'>Print</h1>
                </div>
            </div>

        </div>

    )
}

export default TrialBalance
import React, { useRef, useState } from 'react'
import { FaFilter, FaPrint } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print'

const BalanceSheet = () => {
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
                    <h1 className='text-3xl'>Balance Sheet</h1>

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
                                <td className='text-start px-2 font-bold py-1'>Liability</td>
                                <td className='text-start px-2 font-bold py-1'>Assets</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='w-full'>
                                <td>
                                    <table className='table-auto w-full'>
                                        <tbody>
                                            <tr >
                                                <th className='text-start '>Supplier Due</th>
                                                <td className='text-center '>₨ 336,220.50</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </td>
                                <td>
                                    <table className='table-auto w-full'>
                                        <tbody>
                                            <tr>
                                                <th className='text-start'>Customer Due</th>
                                                <td className='text-center'>₨ 336,220.50</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start'>Closing Stock</th>
                                                <td className='text-center'>₨ 336,220.50</td>
                                            </tr>
                                            <tr>
                                                <th className='text-start'>Account Balances</th>
                                                <td className='text-center'>₨ 336,220.50</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    <table className='table-auto w-full'>
                                        <tbody>
                                            <tr>
                                                <td className='text-start '>Test Account</td>
                                                <td className='text-center '>₨ 336,220.50</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start '>Askari Bank</td>
                                                <td className='text-center '>₨ 336,220.50</td>
                                            </tr><tr>
                                                <td className='text-start '>asd</td>
                                                <td className='text-center '>₨ 336,220.50</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr className='bg-gray-300 h-[50px]'>
                                <td>
                                    <table className='table-auto w-full'>
                                        <tbody>
                                            <tr>
                                                <th className='text-start px-2'>Total Liability</th>
                                                <td>₨ 336,220.50</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </td>
                                <td>
                                    <table className='table-auto w-full'>
                                        <tbody>
                                            <tr>
                                                <th className='text-start px-2'>Total Assets</th>
                                                <td>₨ 336,220.50</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                   
                                   
                                </td>
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

export default BalanceSheet
import React, { useRef, useState } from 'react'
import {  FaPrint } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print';


const TodaysProfit = () => {
    const [summary] = useState([
        {
            heading: "Opening Stock",
            subheading: "(By Purchase Price)",
            amont: 0.00
        }, {
            heading: "Opening Stock",
            subheading: "(By Sale Price)",
            amont: 0.00
        }, {
            heading: "Total Purchase",
            subheading: "(Exc. Tax, Discount)",
            amont: 0.00
        }, {
            heading: "Total Stock Adjusment",
            amont: 0.00
        }, {
            heading: "Total Expenses",
            amont: 0.00
        }, {
            heading: "Total Purchase Shipping Charge",
            amont: 0.00
        }, {
            heading: "Purchase additional expenses",
            amont: 0.00
        }, {
            heading: "Total transfer shipping charge",
            amont: 0.00
        }, {
            heading: "Total Sell discount",
            amont: 0.00
        }, {
            heading: "Total customer reward",
            amont: 0.00
        }, {
            heading: "Total Sell Return",
            amont: 0.00
        }, {
            heading: "Total Payroll",
            amont: 0.00
        }, {
            heading: "Total Production Cost",
            amont: 0.00
        }

    ])
    const [summary1] = useState([
        {
            heading: "Closing Stock",
            subheading: "(By Purchase Price)",
            amont: 0.00
        }, {
            heading: "Closing Stock",
            subheading: "(By Sale Price)",
            amont: 0.00
        }, {
            heading: "Total Sales",
            subheading: "(Exc. Tax, Discount)",
            amont: 0.00
        }, {
            heading: "Total Sell Shipping Charge",
            amont: 0.00
        }, {
            heading: "Sell additional expenses",
            amont: 0.00
        }, {
            heading: "Total Stock shipping Recoverd",
            amont: 0.00
        }, {
            heading: "Total Purchase Return",
            amont: 0.00
        }, {
            heading: "Total Purchase discount",
            amont: 0.00
        }, {
            heading: "Total Sell round off",
            amont: 0.00
        }

    ])
   
   
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "SellReport",
        copyStyles: true,
    });

    return (
        <div>
            <div className='flex flex-col  bg-gray-100 px-3 pb-3 min-h-screen'>
                <h1 className='font-bold text-xl text-start'>Today's Profit</h1>

                
                <div ref={printRef}>


                    <div className='grid grid-cols-2 gap-4 bg-gray-100 mt-3'>
                        <div className='flex bg-white p-4 w-full'>
                            <table className='table-auto w-full'>
                                {summary.map((val, index) => {
                                    return <tr className={`${index % 2 === 0 ? "bg-gray-100" : ""} my-2`}>
                                        <th className='flex flex-col text-start'>
                                            {val.heading}
                                            <small className='text-gray-500'>{val.subheading}</small>
                                        </th>
                                        <td>
                                            Rs {val.amont}
                                        </td>

                                    </tr>
                                })}
                            </table>

                        </div>
                        <div className='flex bg-white p-4 w-full'>
                            <table className='table-auto w-full'>
                                {summary1.map((val, index) => {
                                    return <tr className={`${index % 2 === 0 ? "bg-gray-100" : ""} my-2`}>
                                        <th className='flex flex-col text-start'>
                                            {val.heading}
                                            <small className='text-gray-500'>{val.subheading}</small>
                                        </th>
                                        <td>
                                            Rs {val.amont}
                                        </td>

                                    </tr>
                                })}
                            </table>
                        </div>
                    </div>

                    <div className='flex flex-col p-5 mt-5 bg-white'>
                        <h1 className='text-3xl text-gray-500 text-start'>Gross Profit: Rs 0.00</h1>
                        <h1 className='text-xs text-gray-500 text-start'>(Total sell price - Total purchase price)</h1>
                        <h1 className='text-3xl text-gray-500 text-start mt-3'>Net Profit: ₨ 506.60</h1>
                        <h1 className='text-xs text-gray-500 text-start'>Gross Profit + (Total sell shipping charge + Sell additional expenses + Total Stock Recovered + Total Purchase discount + Total sell round off )</h1>
                        <h1 className='text-xs text-gray-500 text-start'>- ( Total Stock Adjustment + Total Expense + Total purchase shipping charge + Total transfer shipping charge + Purchase additional expenses + Total Sell discount + Total customer reward + Total Payroll + Total Production Cost )</h1>

                    </div>

                </div>

                <div className='flex items-end justify-end mx-3 mt-3'>
                    <div className='flex bg-blue-500 text-white cursor-pointer px-2 py-1' onClick={() => { handlePrint() }}>
                        <FaPrint size={15} />
                        <h1 className='text-sm mx-1'>Print</h1>
                    </div>
                </div>

            </div>


            


            

        </div>
    )
}

export default TodaysProfit
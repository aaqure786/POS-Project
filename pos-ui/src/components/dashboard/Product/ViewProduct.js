import React, { useRef } from 'react'
import { FaPrint } from "react-icons/fa"
import { useReactToPrint } from 'react-to-print';

const ViewProduct = (props) => {
    const dummyData = [
        {
            id: 1,
            Username: "username",
            Name: "User",
            Role: "Admin",
            Email: "username@gmail.com"
        },
        {
            id: 2,
            Username: "username1",
            Name: "User1",
            Role: "Admin",
            Email: "username@gmail.com"
        },
        {
            id: 3,
            Username: "username2",
            Name: "User2",
            Role: "Admin",
            Email: "username2@gmail.com"
        },
        {
            id: 4,
            Username: "username3",
            Name: "User3",
            Role: "Admin",
            Email: "username3@gmail.com"
        },
        {
            id: 5,
            Username: "username4",
            Name: "User4",
            Role: "Admin",
            Email: "username4@gmail.com"
        },
        {
            id: 6,
            Username: "username5",
            Name: "User5",
            Role: "Admin",
            Email: "username5@gmail.com"
        },
        {
            id: 7,
            Username: "username6",
            Name: "User6",
            Role: "Admin",
            Email: "username6@gmail.com"
        }
    ]

    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "SellReport",
        copyStyles: true,
    });
    return (
        <div className='w-full  flex  flex-col  bg-white'>
            <div className='w-full px-2 my-2' ref={printRef}>
                <div className='flex items-start '>
                    <h1 className='text-xl'>{props.name}</h1>
                </div>
                
                <div className='grid grid-cols-1 mt-4 gap-2 md:grid-cols-4'>
                    <div className='flex  items-start flex-col '>
                        <div className='flex'>
                            <h1 className='font-bold'>SKU: </h1>
                            <h1 className='mx-1'>#0026</h1>

                        </div>
                        <div className='flex'>
                            <h1 className='font-bold'>Brand: </h1>
                            <h1 className='mx-1'>Final</h1>

                        </div>
                        <div className='flex'>
                            <h1 className='font-bold'>Unit:</h1>
                            <h1 className='mx-1'>Paid</h1>

                        </div>
                        <div className='flex'>
                            <h1 className='font-bold'>Barcode Type: </h1>
                            <h1 className='mx-1'>Paid</h1>

                        </div>
                        <div className='flex'>
                            <h1 className='font-bold'>Available in Locations: </h1>
                            <h1 className='mx-1'>Paid</h1>

                        </div>
                    </div>
                    <div className='flex  items-start flex-col '>
                    <div className='flex'>
                            <h1 className='font-bold'>Category: </h1>
                            <h1 className='mx-1'>mr rs</h1>

                        </div>
                        <div className='flex'>
                            <h1 className='font-bold'>Sub Category: </h1>
                            <h1 className='mx-1'>mr rs</h1>

                        </div>
                        <div className='flex'>
                            <h1 className='font-bold'>Manage Stock?: </h1>
                            <h1 className='mx-1'>Yes</h1>

                        </div>
                        <div className='flex'>
                            <h1 className='font-bold'>Alert Quantity: </h1>
                            <h1 className='mx-1'>239</h1>

                        </div>
                    </div>
                    <div className='flex  items-start flex-col '>
                        <div className='flex'>
                            <p className='font-bold'>Expires in:</p>
                            <p className='mx-1'>47104</p>
                        </div>
                        <div className='flex'>
                            <p className='font-bold'>Applicable Tax:</p>
                            <p className='mx-1'></p>
                        </div>
                        <div className='flex'>
                            <p className='font-bold'>Selling Price Tax Type:</p>
                            <p className='mx-1'> </p>
                        </div>
                        <div className='flex'>
                            <p className='font-bold'>Product Type</p>
                            <p className='mx-1'></p>
                        </div>



                    </div>
                    <div className='flex w-full h-full'>
                        <img src='https://store.ezipos.pk/img/default.png' alt='Defaul Pic' className='w-full h-full'/>
                    </div>
                </div>
                <div className='flex  mt-5 ' >
                    <table className="table-auto w-full  mb-2   px-5 ">
                        <thead>
                            <tr className='h-[50px] bg-green-500'>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Default Purchase Price (Exc. tax)</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Default Purchase Price (Inc. tax)</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">x Margin(%)</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Default Selling Price (Exc. tax)</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Default Selling Price (Inc. tax)</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Group Prices</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Variation Images</th>
                                
                            </tr>
                        </thead>
                        <tbody >
                            {dummyData.map((value, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""}`}>
                                    <td className=" py-1 px-1">{value.Username}</td>
                                    <td className="px-1 py-1 text-sm">{value.Username}</td>
                                    <td className="px-1 py-1"> {value.Name}</td>
                                    <td className="px-1 py-1">{value.Role}</td>
                                    <td className=" py-1 px-1">{value.Name}</td>
                                    <td className=" py-1 px-1">{value.Role}</td>
                                    <td className="px-1 py-1 text-sm">{value.Username}</td>
                                    
                                </tr>
                            })}


                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
                <div className='flex flex-col mt-5'>
                        <h1 className='text-xl text-start my-2 font-bold'>Product Stock Details:</h1>

                        <table className="table-fixed  mb-2   px-5 ">
                            <thead>
                                <tr className='h-[50px] bg-green-500'>
                                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm px-2 ">SKU</th>
                                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm px-2 ">Product</th>
                                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm px-2 ">Location</th>
                                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm px-2 ">Unit Price</th>
                                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm px-2 ">Current Stock</th>
                                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm px-2 ">Current Stock Value</th>

                                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm px-2 ">Total unit sold</th>
                                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm px-2 ">Total Unit Transfered</th>
                                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm px-2 ">Total Unit Adjusted</th>

                                </tr>
                            </thead>
                            <tbody >
                                {dummyData.map((value, index) => {
                                    return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""}`}>
                                        <td className=" py-1 px-1">{value.Username}</td>
                                        <td className="px-1 py-1 text-sm">{value.Username}</td>
                                        <td className="px-1 py-1"> {value.Name}</td>
                                        <td className="px-1 py-1">{value.Role}</td>
                                        <td className="px-1 py-1">{value.Role}</td>
                                        <td className="px-1 py-1 text-sm">{value.Username}</td>
                                        <td className="px-1 py-1"> {value.Name}</td>
                                        <td className="px-1 py-1">{value.Role}</td>
                                        <td className="px-1 py-1">{value.Role}</td>
                                    </tr>

                                })}


                            </tbody>
                            <tfoot>
                                <tr></tr>
                            </tfoot>
                        </table>
                    </div>
                
                
            </div>
            <div className='flex items-end justify-end mx-4'>
                <div className='flex bg-green-400 text-white cursor-pointer px-2 py-1' onClick={handlePrint}>
                    <FaPrint size={15} />
                    <h1 className='text-sm mx-1'>Print</h1>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct
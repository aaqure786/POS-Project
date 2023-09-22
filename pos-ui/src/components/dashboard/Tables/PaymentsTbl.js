import React from 'react'
import { FaEdit, FaEye,  FaTrash } from 'react-icons/fa'



const PaymentsTbl = () => {
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
        }
    ]
 
    return (
        <div className=' w-full shadow-md my-5 shadow-gray-400  border-t-[2px] border-blue-600 rounded-xl'>

            
            <div className='flex flex-col justify-center items-center '  >
                <table id='usertbl' className="table-auto w-full   whitespace-no-wrap ">
                    <thead>
                        <tr>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Date</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Reference No</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Amount</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Payment Method</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Payment Note</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Payment Account</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody >
                        {dummyData.map((value, index) => {
                            return <tr key={index} className=''>
                                
                                <td className="px-1 py-1"> {value.Name}</td>
                                <td className="px-1 py-1">{value.Role}</td>
                                <td className=" py-1 px-1">{value.Name}</td>
                                <td className="px-1 py-1 text-sm">{value.Username}</td>
                                <td className="px-1 py-1"> {value.Name}</td>
                                <td className="px-1 py-1">{value.Role}</td>
                                <td className='py-1 flex '>
                                    <div className='flex mx-1 p-1 items-center bg-blue-300 text-white justify-center'>
                                        <FaEdit size={15} />
                                    </div>
                                    <div className='flex mx-1 p-1 items-center bg-red-500 text-white justify-center'>
                                        <FaTrash size={15} />
                                    </div>
                                    <div className='flex mx-1 p-1 items-center bg-blue-600 text-white justify-center'>
                                        <FaEye size={15} />
                                    </div>

                                </td>
                                


                            </tr>
                        })}


                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default PaymentsTbl
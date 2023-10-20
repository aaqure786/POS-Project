import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const AddorEditSellingPriceGrps = () => {
    const [info, setInfo] = useState(false)
    const [info1, setInfo1] = useState(false)
    const [info2, setInfo2] = useState(false)
    const [info3, setInfo3] = useState(false)

    const [formData, setFormData] = useState({
        productName: "Fetch From Data Base",
        productId: '',
        
        grpPrices: [{
            dfltSlngPrice: "1200.00",
            retailAmount: "",
            retailType: "Fixed",
            salemanAmount: "",
            salemanType: "Fixed",
            minimumPriceAmount: "",
            minimumPriceType: "Fixed",
            salePointsAmount: "",
            salePointsType: "Fixed"
        }]
    })
    const handleChange = (e, index) => {
        const updatedData = formData.grpPrices.map((item, ind) => {
            if (ind === index) {
                // Create a new copy of the item with the modified subItem
                return {
                    ...item, [e.target.name]: e.target.value
                };
            }
            return item;
        });
        setFormData({ ...formData, grpPrices: updatedData });
    }

    const handleSaveorEdit = () => {

        console.log("Handle Save", formData)

    }

    return (
        <div className='flex flex-col w-full px-5 bg-white '>
            <div className='flex'>
                <h1 className='text-2xl font-semibold text-start '>Add or edit Group Prices</h1>
            </div>
            <div className='flex flex-col p-5 bg-gray-100'>
                <div className='flex'>
                    <h1 className=' font-semibold text-start '>Product:</h1>
                    <h1 className=' font-semibold text-start mx-1 '>{formData.productName}</h1>
                    <h1 className=' font-semibold text-start mx-1'>({formData.productId})</h1>

                </div>
                <table className="table-auto mt-5  w-full  items-start">
                    <thead>
                        <tr className='Fixed bg-green-500 '>
                            <th>
                                <div className='flex px-2 py-1 border-[1px] border-white   Fixed'>
                                    <h1 className='text-start font-bold text-white'>Default Selling Price (Inc. Tax)</h1>
                                </div>
                            </th>
                            <th>
                                <div className='flex px-2 py-1 border-[1px] border-white  relative  Fixed'>

                                    <h1 className='text-start font-bold text-white'>retail</h1>
                                    <FaInfoCircle onMouseOver={() => { setInfo(true) }} onMouseLeave={() => { setInfo(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                                    {info &&
                                        <div className='flex flex-col w-[180px] rounded-md  border-[2px] border-gray-400 absolute top-8 p-2 20 bg-white shadow-md shadow-gray-300'>
                                            <p className='text-start'>
                                                if <span className='font-bold'>Fixedd</span>
                                                - the entered price will be used. if
                                                <span className='font-bold'>Percentage</span> - price will be that much % of default selling price </p>

                                        </div>
                                    }
                                </div>
                            </th>
                            <th>
                                <div className='flex px-2 py-1 border-[1px] border-white  relative  '>

                                    <h1 className='text-start font-bold text-white'>Saleman</h1>
                                    <FaInfoCircle onMouseOver={() => { setInfo1(true) }} onMouseLeave={() => { setInfo1(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                                    {info1 &&
                                        <div className='flex flex-col w-[180px] rounded-md  border-[2px] border-gray-400 absolute top-8 p-2 20 bg-white shadow-md shadow-gray-300'>
                                            <p className='text-start'>
                                                if <span className='font-bold'>Fixedd</span>
                                                - the entered price will be used. if
                                                <span className='font-bold'>Percentage</span> - price will be that much % of default selling price </p>

                                        </div>
                                    }
                                </div>
                            </th>
                            <th>
                                <div className='flex px-2 py-1 border-[1px] border-white  relative  '>

                                    <h1 className='text-start font-bold text-white'>Minimum Price</h1>
                                    <FaInfoCircle onMouseOver={() => { setInfo2(true) }} onMouseLeave={() => { setInfo2(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                                    {info2 &&
                                        <div className='flex flex-col w-[180px] rounded-md  border-[2px] border-gray-400 absolute top-8 p-2 20 bg-white shadow-md shadow-gray-300'>
                                            <p className='text-start'>
                                                if <span className='font-bold'>Fixedd</span>
                                                - the entered price will be used. if
                                                <span className='font-bold'>Percentage</span> - price will be that much % of default selling price </p>

                                        </div>
                                    }
                                </div>
                            </th>
                            <th>
                                <div className='flex px-2 py-1 border-[1px] border-white  relative  '>

                                    <h1 className='text-start font-bold text-white'>Sale Points</h1>
                                    <FaInfoCircle onMouseOver={() => { setInfo3(true) }} onMouseLeave={() => { setInfo3(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                                    {info3 &&
                                        <div className='flex flex-col w-[180px] rounded-md  border-[2px] border-gray-400 absolute top-8 p-2 20 bg-white shadow-md shadow-gray-300'>
                                            <p className='text-start'>
                                                if <span className='font-bold'>Fixedd</span>
                                                - the entered price will be used. if
                                                <span className='font-bold'>Percentage</span> - price will be that much % of default selling price </p>

                                        </div>
                                    }
                                </div>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.grpPrices.map((val,index)=>{
                            return  <tr key={index}>
                            <td>
                                <h1>{val.dfltSlngPrice}</h1>
                            </td>
                            <td >
                                <div className='flex flex-col'>
                                    <input type='number' name='retailAmount' value={val.retailAmount} onChange={(e) => { handleChange(e,index)  }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                                    <select name='retailType' value={formData.retailType} onChange={(e) => { handleChange(e,index)  }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                        <option value={"Fixed"}>Fixed</option>
                                        <option value={"Percentage"}>Percentage</option>

                                    </select>
                                </div>


                            </td>
                            <td >
                                <div className='flex flex-col'>
                                    <input type='number' name='salemanAmount' value={formData.salemanAmount} onChange={(e) => { handleChange(e,index)  }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                                    <select name='salemanType' value={formData.salemanType} onChange={(e) => { handleChange(e,index)  }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                        <option value={"Fixed"}>Fixed</option>
                                        <option value={"Percentage"}>Percentage</option>

                                    </select>
                                </div>
                            </td>
                            <td >
                                <div className='flex flex-col'>
                                    <input type='number' name='minimumPriceAmount' value={formData.minimumPriceAmount}  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                                    <select name='minimumPriceType' value={formData.minimumPriceType} onChange={(e) => { handleChange(e,index)  }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                        <option value={"Fixed"}>Fixed</option>
                                        <option value={"Percentage"}>Percentage</option>

                                    </select>
                                </div>
                            </td>
                            <td >
                                <div className='flex flex-col'>
                                    <input name='salePointsAmount' type='number' value={formData.salePointsAmount} onChange={(e) => { handleChange(e,index)  }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                                    <select name='salePointsType' value={formData.salePointsType} onChange={(e) => { handleChange(e,index)  }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                        <option value={"Fixed"}>Fixed</option>
                                        <option value={"Percentage"}>Percentage</option>

                                    </select>
                                </div>
                            </td>
                        </tr>
                        })}
                       


                    </tbody>

                </table>

            </div>


            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>Save</h1>

                </button>
            </div>
        </div>
    )
}

export default AddorEditSellingPriceGrps
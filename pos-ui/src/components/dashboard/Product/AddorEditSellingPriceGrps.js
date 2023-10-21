import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'

const AddorEditSellingPriceGrps = () => {
    const dummyData = [
        { priceGrp: "Sell" },
        { priceGrp: "retail" },
        { priceGrp: "Dummy" },
        { priceGrp: "Checking" }

    ]
    const resultData = dummyData.map(({priceGrp})=>{
        return  {priceGrp,amount:0,type:""}
    })

    const [isAddOther, setIsAddOther] = useState(false)
    const [isOpeningStock, setIsOpeningStock] = useState(false)
    const [actionList, setActionList] = useState(Array(dummyData.length).fill(false))

    const toggleDropdown = (data, index) => {
        const dropDownAction = [...actionList];
        dropDownAction.map((val, i) => {
            if (i === index) {
                dropDownAction[i] = data;

            }

            return dropDownAction
        })

        setActionList(dropDownAction);
    };

    const [formData, setFormData] = useState({
        productName: "Fetch From Data Base",
        productId: '',
        dfltSlngPrice: "",
        grpPrices: resultData
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

        console.log("Handle Save", formData )

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
                            {dummyData.map((val, index) => {
                                return <th key={index}>
                                    <div className='flex px-2 py-1 border-[1px] border-white  relative  Fixed'>

                                        <h1 className='text-start font-bold text-white'>{val.priceGrp}</h1>
                                        <FaInfoCircle onMouseOver={() => { toggleDropdown(true, index) }} onMouseLeave={() => { toggleDropdown(false, index) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                                        {actionList[index] &&
                                            <div className='flex text-gray-500 flex-col w-[180px] rounded-md  border-[2px] border-gray-400 absolute top-8 p-2 20 bg-white shadow-md shadow-gray-300'>
                                                <p className='text-start'>
                                                    if <span className='font-bold'>Fixedd</span>
                                                    - the entered price will be used. if
                                                    <span className='font-bold'>Percentage</span> - price will be that much % of default selling price </p>

                                            </div>
                                        }
                                    </div>
                                </th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>
                                <h1>{formData.dfltSlngPrice}</h1>
                            </td>
                            {formData.grpPrices.map((val, index) => {
                                return <td key={index}>
                                    <div className='flex flex-col'>
                                        <input type='number' name={"amount"} value={val.amount} onChange={(e) => { handleChange(e, index) }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                                        <select name={`type`} value={val.type} onChange={(e) => { handleChange(e, index) }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                            <option value={"Fixed"}>Fixed</option>
                                            <option value={"Percentage"}>Percentage</option>

                                        </select>
                                    </div>


                                </td>
                            })}


                        </tr>




                    </tbody>

                </table>

            </div>


            <div className='justify-end items-end flex py-5'>
                <button onClick={() => { setIsOpeningStock(true); setIsAddOther(false); handleSaveorEdit(); }} className='bg-blue-500  px-2 py-2 text-white items-center justify-center flex'>Save & Add Opening Stock</button>
                <button onClick={() => { setIsOpeningStock(false); setIsAddOther(true); handleSaveorEdit(); }} className='bg-red-500  px-2 py-2 text-white items-center justify-center flex'>Save & Add Another</button>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'><h1 className='  text-start px-3 py-2'>Save</h1></button>
            </div>

        </div>
    )
}

export default AddorEditSellingPriceGrps
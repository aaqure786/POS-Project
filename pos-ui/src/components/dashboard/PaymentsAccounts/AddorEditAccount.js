import React, { useState } from 'react'

const AddorEditAccount = (props) => {
    const [isserror, setIsserror] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        accountNumber: "",
        accountType: "",
        openingBalance: 0,
        lable1: "",
        value1: "",
        lable2: "",
        value2: "",
        lable3: "",
        value3: "",
        lable4: "",
        value4: "",
        lable5: "",
        value5: "",
        lable6: "",
        value6: "",
        note: ""
    })

    const handleSaveorEdit = () => {
        if (formData.name.length === 0 || formData.accountNumber.length === 0) {
            setIsserror(true)
        } else if (props.id) {
            console.log("Handle Update", formData)
        } else {
            console.log("Handle Save", formData)

        }
    }

    return (
        <div className='flex flex-col w-full px-3 bg-white '>
            <div className='flex'>
                <h1 className='text-2xl font-semibold text-start '>{props.id ? "Edit Account" : "Add Account"}</h1>
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Name:*
                    <span className='text-red-400'>{isserror && formData.name.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='text' value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} placeholder='Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Account Number:*
                    <span className='text-red-400'>{isserror && formData.shortName.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='text' value={formData.accountNumber} onChange={(e) => { setFormData({ ...formData, accountNumber: e.target.value }) }} placeholder='Account Number' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Account Type:

                </h1>
                <select type='text' value={formData.accountType} onChange={(e) => { setFormData({ ...formData, accountType: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                    <option value={""}>Please Select</option>
                    <option value={"Assets"}>Assets</option>
                    <option value={"Askari Bank"}>Askari Bank</option>
                    <option value={"Cash in hand"}>Cash in hand</option>

                </select>
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Opening Balance:

                </h1>
                <input type='number' value={formData.openingBalance} onChange={(e) => { setFormData({ ...formData, openingBalance: e.target.value }) }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>

            <div className='flex flex-col'>
                <h1 className='text-start font-bold'>Account details:</h1>
                <div className='grid  grid-cols-2 gap-5 mt-5'>
                    <input type='text' value={formData.lable1} onChange={(e) => { setFormData({ ...formData, lable1: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.value1} onChange={(e) => { setFormData({ ...formData, value1: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.lable2} onChange={(e) => { setFormData({ ...formData, lable2: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.value2} onChange={(e) => { setFormData({ ...formData, value2: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.lable3} onChange={(e) => { setFormData({ ...formData, lable3: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.value3} onChange={(e) => { setFormData({ ...formData, value3: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.lable4} onChange={(e) => { setFormData({ ...formData, lable4: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.value4} onChange={(e) => { setFormData({ ...formData, value4: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.lable5} onChange={(e) => { setFormData({ ...formData, lable5: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.value5} onChange={(e) => { setFormData({ ...formData, value5: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.lable6} onChange={(e) => { setFormData({ ...formData, lable6: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />
                    <input type='text' value={formData.value6} onChange={(e) => { setFormData({ ...formData, value6: e.target.value }) }} className='border-[1px] border-gray-400 px-2 py-1  focus:outline-none' />



                </div>

            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Note:

                </h1>
                <textarea rows={4} type='text' value={formData.note} onChange={(e) => { setFormData({ ...formData, note: e.target.value }) }} placeholder='Account Details' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            




            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>{props.id ? "Update" : "Save"}</h1>

                </button>
            </div>
        </div>
    )
}

export default AddorEditAccount
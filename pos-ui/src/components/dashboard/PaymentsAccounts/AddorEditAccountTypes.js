import React, { useState } from 'react'

const AddorEditAccountTypes = (props) => {
    const [isserror, setIsserror] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        paccountType: "",
        
    })

    const handleSaveorEdit = () => {
        if (formData.name.length === 0 ) {
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
                <h1 className='text-2xl font-semibold text-start '>{props.id ? "Edit Account Types" : "Add Account Type"}</h1>
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
                   Parent Account Type:

                </h1>
                <select type='text' value={formData.paccountType} onChange={(e) => { setFormData({ ...formData, paccountType: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                    <option value={""}>Please Select</option>
                    <option value={"Assets"}>Assets</option>
                    
                </select>
            </div>
            
            




            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>{props.id ? "Update" : "Save"}</h1>

                </button>
            </div>
        </div>
    )
}

export default AddorEditAccountTypes
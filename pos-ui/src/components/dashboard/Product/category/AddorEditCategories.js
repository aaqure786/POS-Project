import React, { useState } from 'react'

const AddorEditCategories = (props) => {
    const [isserror, setIsserror] = useState(false)
    const [taxonomy, setTaxonomy] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        Description: "",
        categoryCode: "",
        parentCategory: ""

    })

    const handleSaveorEdit = () => {
        if (formData.name.length === 0) {
            setIsserror(true)
        } else if (props.id) {
            console.log("Handle Update", formData)
        } else {
            console.log("Handle Save", formData)

        }
    }

    return (
        <div className='flex flex-col w-full px-5 bg-white '>
            <div className='flex'>
                <h1 className='text-2xl font-semibold text-start '>{props.id ? "Edit Categories" : "Add Categories"}</h1>
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Category Name:*
                    <span className='text-red-400'>{isserror && formData.name.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='text' value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Category Code:

                </h1>
                <input type='text' value={formData.categoryCode} onChange={(e) => { setFormData({ ...formData, categoryCode: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                <h1 className='text-start flex text-gray-500'>Category code is same as <span className='font-bold'>HSN code</span></h1>
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Description:

                </h1>
                <textarea rows={5} type='text' value={formData.Description} onChange={(e) => { setFormData({ ...formData, Description: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex mt-3'>
                <input type='checkbox' value={taxonomy} onChange={(e) => { setTaxonomy(!taxonomy); console.log(taxonomy); }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                <h1 className='flex mx-2 text-start '>
                    Add as sub taxonomy

                </h1>
            </div>
            {taxonomy ? 
                <div className='flex flex-col mt-3'>
                    <h1 className='flex text-start font-bold'>
                        Select Parent Category

                    </h1>
                    <select type='text' value={formData.parentCategory} onChange={(e) => { setFormData({ ...formData, parentCategory: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none'>
                        <option value={"TestCategory"}>TestCategory</option>
                        <option value={"test cat 2"}>test cat 2</option>

                    </select>
                </div>
             : ""}


            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>{props.id ? "Update" : "Save"}</h1>

                </button>
            </div>
        </div>
    )
}

export default AddorEditCategories
import React, { useState } from 'react'

const AddorEditExpenseCategory = (props) => {
    const [formData, setFormData] = useState({
        categoryName:'',
        categoryCode:'',
        subCategory:false
    })
    const [isserror, setIsserror] = useState(false);
    const handleClick = (e) => {
        if (
            formData.categoryName.length === 0
        ) {
            setIsserror(true);
            console.log(isserror);
        } else if (props.id) {
            console.log("Handle Update", formData);
        } else {
            console.log("Handle Save", formData);
        }
    };
    return (
        <div className='flex flex-col w-full bg-white p-3'>
            <h1 className="text-xl text-start font-bold ">{props.id ? "Edit" : "Add"} Expense Category</h1>

            <div className='flex flex-col'>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Category Name:*
                        <h2 className="text-red-400">
                            {isserror && formData.categoryName.length === 0
                                ? "Required field"
                                : ""}
                        </h2>
                    </h2>
                    <input type="text" placeholder='Name' value={formData.categoryName} onChange={(e) => { setFormData({ ...formData, categoryName: e.target.value }) }} className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Category Code
                    </h2>
                    <input type="text" placeholder='Category Code' value={formData.categoryCode} onChange={(e) => { setFormData({ ...formData, categoryCode: e.target.value }) }} className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex mt-5'>
                    <input type="checkbox" placeholder='Name' checked={formData.subCategory ? true : false} onChange={(e) => { setFormData({ ...formData, subCategory: e.target.checked }) }} className="mx-3 w-6 h-6 " />
                    <h2 className="text-start flex ">
                        <b>Add as Sub-Category</b>
                    </h2>
                </div>
            </div>
            <div className='flex items-end justify-end'>
                <button
                    onClick={handleClick}
                    className="bg-green-500 w-[100px] px-2 py-2 items-center justify-center flex"
                >
                    {props.id ? "Update" : "Save"}
                </button>
            </div>

        </div>
    )
}

export default AddorEditExpenseCategory
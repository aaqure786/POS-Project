import React, { useState } from 'react'
import { FaBriefcase, FaCalendar, FaChevronCircleDown, FaEnvelope, FaGlobe, FaIdBadge, FaInfo, FaMapMarker, FaMobile, FaMoneyBillAlt, FaPhone, FaUser, FaUsers } from 'react-icons/fa'

const AddorEditContact = (props) => {
    const [iserror, setIserror] = useState(false)
    const [moreInfor, setMoreInfor] = useState(false)
    const [radioVal, setRadioVal] = useState('')
    const [formData, setFormData] = useState({
        contactType: "",
        prefix: "",
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        address: "",
        slscmsnPercnetage: 0
    })

    const handleClick = () => {
        if (formData.firstName.length === 0) {
            setIserror(true)
        } else if (props.id === 0) {
            console.log("Handle Save", formData)
        } else if (props.id !== 0) {
            console.log("Handle Update", formData)
        }
    }



    return (
        <div className='flex w-full md:w-[75%] flex-col justify-center items-center bg-white p-5'>
            <h1 className=' text-xl font-bold flex justify-start w-full'>{props.id !== 0 ? "Edit a contact" : "Add a new contact"}</h1>
            <div className=' w-full flex flex-col'>
                <div className='grid grid-cols-1 mt-2 md:grid-cols-3 gap-2'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Contact Type:*</h1>
                        <div className='flex'>
                            < FaUser size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <select value={formData.contactType} onChange={(e) => { setFormData({ ...formData, contactType: e.target.value }) }} type='text' placeholder='Prefix' className='px-2 py-[3px] border-[1px] border-gray-600 focus:outline-none' >
                                <option value={""}>Please Select</option>
                                <option value={"Suppliers"}>Suppliers</option>
                                <option value={"Customers"}>Customers</option>
                                <option value={"Both "}>Both (Suppliers & Customers) </option>

                            </select>
                        </div>

                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex items-center '>
                            <input type='radio' className='w-5 h-5' name='contact-type-r' value='individual' onChange={(e) => { setRadioVal(e.target.value) }} />
                            <h1 className='flex text-lg text-start mx-1'>Individual</h1>
                        </div>
                        <div className='flex items-center'>
                            <input type='radio' className='w-5 h-5' name='contact-type-r' value='business' onChange={(e) => { setRadioVal(e.target.value) }} />
                            <h1 className='flex text-lg text-start mx-1'>Business</h1>
                        </div>

                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Contact ID:</h1>
                        <div className='flex'>
                            < FaIdBadge size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                        <h1 className='flex text-sm text-start'>Leave Empty to autogenerate</h1>

                    </div>
                </div>
                {formData.contactType === "Customers" &&
                    <div className='grid grid-cols-1 md:grid-cols-4 mt-2 gap-2'>

                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Customer Group:</h1>
                            <div className='flex'>
                                < FaUsers size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <select value={formData.contactType} onChange={(e) => { setFormData({ ...formData, contactType: e.target.value }) }} type='text' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' >
                                    <option value={""}>None</option>


                                </select>
                            </div>

                        </div>
                        <div ></div>
                        <div ></div>
                        <div ></div>
                    </div>
                }
                {radioVal === "individual" &&
                    <div className='grid grid-cols-1 md:grid-cols-4 mt-2 gap-2'>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Prefix:</h1>
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Mr / Mrs / Miss' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'> First Name:</h1>
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='First Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Middle Name:</h1>
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Middle Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Last Name:</h1>
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>

                    </div>
                }
                {radioVal === "business" &&
                    <div className='grid grid-cols-1 md:grid-cols-4 mt-2 gap-2'>
                        <div className='flex flex-col'>
                            <h1 className='flex text-sm text-start'>Business Name:</h1>
                            <div className='flex'>
                                < FaBriefcase size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Business Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                        </div>


                    </div>
                }
                <div className='grid grid-cols-1 md:grid-cols-4 mt-2 gap-2'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Mobile:*</h1>
                        <div className='flex'>
                            < FaMobile size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Alternate Contact Number:</h1>
                        <div className='flex'>
                            < FaPhone size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Landline:</h1>
                        <div className='flex'>
                            < FaPhone size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Email:</h1>
                        <div className='flex'>
                            < FaEnvelope size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mt-2'>

                    {radioVal === "individual" &&
                        <div className='flex flex-col '>
                            <h1 className='flex text-sm text-start'>Date of Birth:</h1>
                            <div className='flex'>
                                < FaCalendar size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Date of Birth' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                        </div>

                    }
                    <div className='flex flex-col md:col-span-2'>
                        <h1 className='flex text-sm text-start'>Assigned to:</h1>
                        <div className='flex'>
                            < FaUser size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div >

                    </div>


                </div>
                <div className='flex items-center justify-center w-full mt-5'>
                    <div className='w-[150px] bg-blue-600 items-center justify-center py-4 text-white flex' onClick={() => { setMoreInfor(!moreInfor) }}>
                        <h1 className='flex text-sm text-start'>More Information</h1>
                        < FaChevronCircleDown size={15} className='mx-1 border-[1px] border-gray-600' />
                    </div>
                </div>
                {moreInfor &&
                    <>
                        <div className='w-[96%] mx-[2%] mt-10 h-[1px]  bg-black'></div>
                        <div className='grid grid-cols-1 md:grid-cols-3 my-5  gap-2'>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Tax Number:</h1>
                                <div className='flex'>
                                    < FaInfo size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Opening Balance:</h1>
                                <div className='flex'>
                                    < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Landline:</h1>
                                <div className='flex'>
                                    <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Salary' className='px-2 py-[3px] w-1/2 border-[1px] border-gray-600 focus:outline-none' />
                                    <select value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' className='px-2 py-[3px] w-1/2 border-[1px] border-gray-600 focus:outline-none'>
                                        <option value={""}>Please Select</option>
                                        <option value={"Months"}>Months</option>
                                        <option value={"Days"}>Days</option>
                                    </select>

                                </div>
                            </div>

                        </div>
                        <div className='w-[96%] mx-[2%] mt-10 h-[1px]  bg-black'></div>
                        <div className='grid grid-cols-1 md:grid-cols-2 mt-5  gap-2'>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Address Line 1:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Address Line 1' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />

                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Address Line 2:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Address Line 2' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />

                            </div>

                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-4 mb-5 mt-2 gap-2'>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>City</h1>
                                <div className='flex'>
                                    < FaMapMarker size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='City' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>State:</h1>
                                <div className='flex'>
                                    < FaMapMarker size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='State' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>State:</h1>
                                <div className='flex'>
                                    < FaGlobe size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Last Name' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Zip Code:</h1>
                                <div className='flex'>
                                    < FaMapMarker size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                    <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Zip/Postal Code' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                </div>
                            </div>

                        </div>
                        <div className='w-[96%] mx-[2%] mt-10 h-[1px]  bg-black'></div>
                        <div className='grid grid-cols-1 md:grid-cols-4 my-5  gap-2'>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 1:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 1' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 2:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 2' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 3:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 3' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 4:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 4' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 5:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 5' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 6:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 6' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 7:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 7' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 8:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 8' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 9:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 9' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='flex text-sm text-start'>Custom Field 10:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Custom Field 10' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>


                        </div>
                        <div className='w-[96%] mx-[2%] mt-10 h-[1px]  bg-black'></div>
                        <div className='flex items-center justify-center w-full my-5'>
                            <div className='flex flex-col w-1/2'>
                                <h1 className='flex text-sm text-start'>Shipping Address:</h1>
                                <input value={formData.lastName} onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }) }} type='text' placeholder='Shipping Address' className='px-2 py-[3px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                        </div>

                    </>
                }

                <div className='flex items-end justify-end'>
                    <button onClick={handleClick} className='w-[100px] text-center px-3 py-1 border-[1px] border-gray-400 bg-green-400 mx-2'>{props.id !== 0 ? "Update" : "Save"}</button>

                </div>
            </div>
        </div>
    )
}

export default AddorEditContact
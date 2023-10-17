import React, { useState } from 'react'
import { FaInfo, FaLock } from 'react-icons/fa'

const UserProfile = () => {
    const [open1, setOpen1] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [formData, setFormData] = useState({
        cpassword: "",
        npassword: "",
        cnfrmPassword: "",

    })
    const [formData1, setFormData1] = useState({
        prefix: "",
        firstName: "",
        lastName: "",
        email: "",
        language: "",
        file:"",
    })
    const languages = [
        "English",
        "Spanish - Español",
        "Albanian - Shqip",
        "Hindi - हिंदी",
        "Dutch",
        "French - Français",
        "German - Deutsch",
        "Arabic - العَرَبِيَّة",
        "Turkish - Türkçe",
        "Indonesian",
        "Portuguese",
        "Vietnamese",
        "Chinese",
        "Romanian",
        "Lao"

    ]
    return (
        <div className='bg-gray-100 px-4 py-2 pb-10 w-full min-h-screen'>
            <h1 className='text-3xl text-start'>My Profile</h1>

            <div className='flex  flex-col bg-white p-10 mt-5'>
                <h1 className='text-2xl text-start'>Change Password</h1>

                <div className='flex items-center mt-5 justify-center flex-col w-2/3 mx-auto'>
                    <div className='flex items-center justify-between  mt-4 w-full'>
                        <h1 className='font-bold text-start'>Current Password</h1>
                        <div className='flex w-3/4'>
                            <FaLock size={15} className='w-8 h-9 p-1 border-[1px]  border-gray-400' />
                            <input type='text' value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} placeholder='Current Password' className='border-[1px] w-full px-2 py-1 border-gray-400 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between  mt-4 w-full'>
                        <h1 className='font-bold text-start'>New Password</h1>
                        <div className='flex w-3/4'>
                            <FaLock size={15} className='w-8 h-9 p-1 border-[1px]  border-gray-400' />
                            <input type='text' value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} placeholder='New Password' className='border-[1px] w-full px-2 py-1 border-gray-400 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex items-center justify-between  mt-4 w-full'>
                        <h1 className='font-bold text-start'>Confirm Password</h1>
                        <div className='flex w-3/4'>
                            <FaLock size={15} className='w-8 h-9 p-1 border-[1px]  border-gray-400' />
                            <input type='text' value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} placeholder='Confirm Password' className='border-[1px] w-full px-2 py-1 border-gray-400 focus:outline-none' />
                        </div>
                    </div>
                </div>

                <div className='flex justify-end items-end '>
                    <button className='bg-blue-500 text-white px-2 py-1 rounded-md'>Update</button>
                </div>
            </div>

            <div className='flex justify-between bg-gray  mt-5'>

                <div className='flex flex-col p-5 w-full md:w-[60%] bg-white'>
                    <h1 className='text-2xl text-start'>Change Password</h1>
                    <div className='flex mt-5 w-full'>
                        <div className='flex flex-col w-full md:w-[20%] mx-5'>
                            <h1 className='text-sm font-bold text-start'>Prefix:</h1>
                            <div className=' flex'>
                                <FaInfo size={15} className='w-8 h-9 p-2 border-[1px]  border-gray-400' />
                                <input type='text' value={formData1.prefix} onChange={(e) => { setFormData1({ ...formData1, prefix: e.target.value }) }} placeholder='Mr/ Miss' className='border-[1px] w-full px-2 py-1 border-gray-400 focus:outline-none' />

                            </div>

                        </div>
                        <div className='flex flex-col w-full md:w-[35%] mx-5'>
                            <h1 className='text-sm font-bold text-start'>FirstName:</h1>
                            <div className=' flex'>
                                <FaInfo size={15} className='w-8 h-9 p-2 border-[1px]  border-gray-400' />
                                <input type='text' value={formData1.firstName} onChange={(e) => { setFormData1({ ...formData1, firstName: e.target.value }) }} placeholder='First Name' className='border-[1px] w-full px-2 py-1 border-gray-400 focus:outline-none' />

                            </div>

                        </div>
                        <div className='flex flex-col w-full md:w-[35%] mx-5'>
                            <h1 className='text-sm font-bold text-start'>Last Name:</h1>
                            <div className=' flex'>
                                <FaInfo size={15} className='w-8 h-9 p-2 border-[1px]  border-gray-400' />
                                <input type='text' value={formData1.lastName} onChange={(e) => { setFormData1({ ...formData1, lastName: e.target.value }) }} placeholder='Last Name' className='border-[1px] w-full px-2 py-1 border-gray-400 focus:outline-none' />

                            </div>

                        </div>
                    </div>
                    <div className='flex mt-5 w-full'>

                        <div className='flex flex-col w-full mx-5'>
                            <h1 className='text-sm font-bold text-start'>Email:</h1>
                            <div className=' flex'>
                                <FaInfo size={15} className='w-8 h-9 p-2 border-[1px]  border-gray-400' />
                                <input type='email' value={formData1.email} onChange={(e) => { setFormData1({ ...formData1, email: e.target.value }) }} placeholder='First Name' className='border-[1px] w-full px-2 py-1 border-gray-400 focus:outline-none' />

                            </div>

                        </div>
                        <div className='flex flex-col w-full  mx-5'>
                            <h1 className='text-sm font-bold text-start'>Language:</h1>
                            <div className=' flex relative'>
                                <FaInfo size={15} className='w-8 h-9 p-2 border-[1px]  border-gray-400' />
                                <input type='text' onClick={()=>{setOpen1(true)}} value={formData1.language} onChange={(e) => { setFormData1({ ...formData1, language: e.target.value }) }} className='border-[1px] w-full px-2 py-1 border-gray-400 focus:outline-none' />



                                {open1 &&
                                    <ul

                                        className={`bg-white text-start w-full border-[1px] z-10 absolute top-8 border-gray-600 overflow-y-auto ${open1 ? "max-h-60" : "max-h-0"} `}
                                    >
                                        <div className="flex items-center px-2 sticky top-0 bg-white">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                                className="placeholder:text-gray-700 p-1 w-full outline-none border-[1px] border-gray-500"
                                            />
                                        </div>
                                        {languages?.map((data, index) => (
                                            <li
                                                key={index}
                                                className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                        ${data?.toLowerCase() === formData1.language?.toLowerCase() &&
                                                    "bg-sky-600 text-white"
                                                    }
                                         ${data?.toLowerCase().startsWith(inputValue)
                                                        ? "block"
                                                        : "hidden"
                                                    }`}
                                                onClick={() => {
                                                    if (data?.toLowerCase() !== formData1.language.toLowerCase()) {
                                                        setFormData1({...formData1, language: data})
                                                        setOpen1(false);
                                                        setInputValue("");
                                                    }
                                                }}
                                            >
                                                {data}
                                            </li>
                                        ))}
                                    </ul>
                                }

                            </div>

                        </div>
                    </div>

                </div>
                <div className='flex flex-col p-5 w-full md:w-[35%] bg-white'>
                <h1 className='text-2xl text-start'>Profile Photo</h1>
                <div className='flex flex-col w-full mt-5  mx-5'>
                            <h1 className='text-sm font-bold text-start'>Upload Image:</h1>
                            <div className=' flex'>
                                <input type='file' value={formData1.file} onChange={(e) => { setFormData1({ ...formData1, file: e.target.value }) }}  className=' w-full  focus:outline-none' />

                            </div>
                            <h1 className='text-xs text-gray-500 text-start'>Max File Size 5MB</h1>


                        </div>
                </div>


            </div>

            {/* More Information */}
            <div className='flex flex-col mt-5 w-full bg-white my-5 shadow-sm p-5 shadow-gray-400'>
                    <h1 className='text-2xl items-start flex mx-2 justify-start  font-semibold'>More Information</h1>


                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Date of Birth:</h1>
                            <input value={formData1.dateOfBirth} onChange={(e) => setFormData1({ ...formData1, dateOfBirth: e.target.value })} type='date' placeholder='Date of Birth' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Gender:*</h1>
                            <select value={formData1.gender} onChange={(e) => setFormData1({ ...formData1, gender: e.target.value })} type='text' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' >
                                <option value={""}>-- Please Select --</option>
                                <option value={"Male"}>Male</option>
                                <option value={"Female"}>Female</option>
                                <option value={"Others"}>Others</option>

                            </select>
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Martial Status:</h1>
                            <select value={formData1.martialStatus} onChange={(e) => setFormData1({ ...formData1, martialStatus: e.target.value })} type='text' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' >
                                <option value={""}>-- Please Select --</option>
                                <option value={"Married"}>Married</option>
                                <option value={"Unmarried"}>Unmarried</option>
                                <option value={"Divorced"}>Divorced</option>

                            </select>
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Blood Group:</h1>
                            <input value={formData1.bloodGroup} onChange={(e) => setFormData1({ ...formData1, bloodGroup: e.target.value })} type='text' placeholder='Blood Group' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Mobile Number:</h1>
                            <input value={formData1.momobileNumber} onChange={(e) => setFormData1({ ...formData1, mobileNumber: e.target.value })} type='text' placeholder='Mobile Number' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Alternate contact number:</h1>
                            <input value={formData1.alternateContactNumber} onChange={(e) => setFormData1({ ...formData1, alternateContactNumber: e.target.value })} type='text' placeholder='Alternate contact number' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Family Contact Number:</h1>
                            <input value={formData1.familyContactNumber} onChange={(e) => setFormData1({ ...formData1, familyContactNumber: e.target.value })} type='text' placeholder='Family Contact Number' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Facebook Link:</h1>
                            <input value={formData1.facebookLink} onChange={(e) => setFormData1({ ...formData1, facebookLink: e.target.value })} type='text' placeholder='Facebook Link' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Twitter Link:</h1>
                            <input value={formData1.twitterLink} onChange={(e) => setFormData1({ ...formData1, twitterLink: e.target.value })} type='text' placeholder='Twitter Link' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Social Media 1:</h1>
                            <input value={formData1.socialMedia1} onChange={(e) => setFormData1({ ...formData1, socialMedia1: e.target.value })} type='text' placeholder='Social Media 1' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col w-full'>

                        </div>
                        <div className='flex flex-col w-full'>

                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Social Media 2:</h1>
                            <input value={formData1.socialMedia2} onChange={(e) => setFormData1({ ...formData1, socialMedia2: e.target.value })} type='text' placeholder='Social Media 2' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Custom Field 1:</h1>
                            <input value={formData1.customField1} onChange={(e) => setFormData1({ ...formData1, customField1: e.target.value })} type='text' placeholder='Custom Field 1' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Custom Field 2:</h1>
                            <input value={formData1.customField2} onChange={(e) => setFormData1({ ...formData1, customField2: e.target.value })} type='text' placeholder='Custom Field 2' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Custom Field 3:</h1>
                            <input value={formData1.customField3} onChange={(e) => setFormData1({ ...formData1, customField3: e.target.value })} type='text' placeholder='Custom Field 3' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Custom Field 4:</h1>
                            <input value={formData1.customField4} onChange={(e) => setFormData1({ ...formData1, customField4: e.target.value })} type='text' placeholder='Custom Field 4' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Guardian Name:</h1>
                            <input value={formData1.guardianName} onChange={(e) => setFormData1({ ...formData1, guardianName: e.target.value })} type='text' placeholder='Guardian Name' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>ID Proof name:</h1>
                            <input value={formData1.idProofName} onChange={(e) => setFormData1({ ...formData1, idProofName: e.target.value })} type='text' placeholder='ID Proof name' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>ID Proof number:</h1>
                            <input value={formData1.idProofNumber} onChange={(e) => setFormData1({ ...formData1, idProofNumber: e.target.value })} type='text' placeholder='ID Proof number' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-4 mt-5 gap-5'>
                        <div className='flex flex-col col-span-2 items-start w-full '>
                            <h1 className='text-sm font-bold'>Permenent Address:</h1>
                            <textarea value={formData1.permenentAddress} onChange={(e) => setFormData1({ ...formData1, permenentAddress: e.target.value })} rows={4} type='text' placeholder='Permenent Address' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col col-span-2 items-start w-full '>
                            <h1 className='text-sm font-bold'>Current Address:</h1>
                            <textarea value={formData1.currentAddress} onChange={(e) => setFormData1({ ...formData1, currentAddress: e.target.value })} rows={4} type='text' placeholder='Current Address' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>

                    </div>

                </div>
                {/* Bank Details */}
                <div className='flex flex-col mt-5 w-full bg-white shadow-sm p-5 shadow-gray-400'>
                    <h1 className='text-2xl items-start flex mx-2 justify-start  font-semibold'> Bank Details</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mt-5 '>

                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Account Holder's Name:</h1>
                            <input value={formData1.accountHolderName} onChange={(e) => setFormData1({ ...formData1, accountHolderName: e.target.value })} type='text' placeholder='Account Holder Name ' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>

                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-sm font-bold'>Account Number:</h1>
                            <input value={formData1.accountNumber} onChange={(e) => setFormData1({ ...formData1, accountNumber: e.target.value })} type='text' placeholder='Account Number' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Bank Name:</h1>
                            <input value={formData1.bankName} onChange={(e) => setFormData1({ ...formData1, bankName: e.target.value })} type='text' placeholder='Bank Name' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>

                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-sm font-bold'>Bank Identifier Code:</h1>
                            <input value={formData1.bankIdentifierCode} onChange={(e) => setFormData1({ ...formData1, bankIdentifierCode: e.target.value })} type='text' placeholder='Bank Identifier Code' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                        <div className='flex flex-col items-start w-full '>
                            <h1 className='text-sm font-bold'>Branch:</h1>
                            <input value={formData1.branch} onChange={(e) => setFormData1({ ...formData1, branch: e.target.value })} type='text' placeholder='Branch' className='focus:outline-none w-full   border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>

                        <div className='flex flex-col items-start w-full'>
                            <h1 className='text-sm font-bold'>Tax Payer ID:</h1>
                            <input value={formData1.taxPayerId} onChange={(e) => setFormData1({ ...formData1, taxPayerId: e.target.value })} type='text' placeholder='Tax Payer ID' className='focus:outline-none w-full border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                        </div>
                    </div>
                </div>


                <div className='flex justify-center items-center mt-5'>
                    <button className='bg-blue-500 text-white px-3 py-2 font-bold rounded-md'>Update</button>
                </div>
        </div>
    )
}

export default UserProfile
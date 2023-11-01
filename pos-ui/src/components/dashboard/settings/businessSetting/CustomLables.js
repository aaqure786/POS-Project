import React, { useState } from 'react'

const CustomLables = () => {

    const [productCustomData, setProductCustomData] = useState([
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        },
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        },
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        },
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        },
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        },
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        },
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        },
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        },
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        },
        {
            customLable: "",
            customLableType: "",
            dropdownOptions: ""
        }
    ])
    const [contactCustomData, setContactCustomData] = useState([
        {
            customLable: "",

        },
        {
            customLable: "",

        },
        {
            customLable: "",

        },
        {
            customLable: "",


        },
        {
            customLable: "",

        },
        {
            customLable: "",

        },
        {
            customLable: "",

        },
        {
            customLable: "",

        },
        {
            customLable: "",

        },
        {
            customLable: "",

        }
    ])
    const [purchaseCustomData, setPurchaseCustomData] = useState([
        {
            customLable: "",
            isRequired: false
        },
        {
            customLable: "",
            isRequired: false
        },
        {
            customLable: "",
            isRequired: false
        },
        {
            customLable: "",
            isRequired: false
        }
    ])
    const handleChange = (e, index) => {
        const updatedData = productCustomData.map((item, ind) => {
            if (ind === index) {

                return {
                    ...item, [e.target.name]: e.target.value
                };
            }
            return item;
        });
        setProductCustomData(updatedData);
    }
    const handleChange1 = (e, index) => {
        const updatedData = contactCustomData.map((item, ind) => {
            if (ind === index) {

                return {
                    ...item, [e.target.name]: e.target.value
                };
            }
            return item;
        });
        setContactCustomData(updatedData);
    }
    const handleChange2 = (e, index) => {
        const updatedData = purchaseCustomData.map((item, ind) => {
            if (ind === index) {

                return {
                    ...item, [e.target.name]: e.target.name === "isRequired" ? e.target.checked : e.target.value
                };
            }
            return item;
        });
        setPurchaseCustomData(updatedData);
    }
    const handleSetting = () => {
        console.log("Update Setting", productCustomData, "\n", contactCustomData, "\n", purchaseCustomData)
    }
    return (
        <div className='bg-white py-5 flex flex-col'>
            <div className='flex flex-col mt-5'>
                {/* <h1 className='text-start text-xl  font-bold'>Lables For Custom Payments</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.pcustomField1} onChange={(e) => { setFormData({ ...formData, pcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.pcustomField2} onChange={(e) => { setFormData({ ...formData, pcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.pcustomField3} onChange={(e) => { setFormData({ ...formData, pcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.pcustomField4} onChange={(e) => { setFormData({ ...formData, pcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <input value={formData.pcustomField5} onChange={(e) => { setFormData({ ...formData, pcustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 6:</h1>
                        <input value={formData.pcustomField6} onChange={(e) => { setFormData({ ...formData, pcustomField6: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 7:</h1>
                        <input value={formData.pcustomField7} onChange={(e) => { setFormData({ ...formData, pcustomField7: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                </div> */}
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for contact custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>

                    {contactCustomData.map((val, index) => {
                        return <div key={index} className='flex flex-col '>
                            <h1 className='flex text-start font-bold'>Custom Field {index + 1}:</h1>
                            <input value={val.customLable} name='customLable' onChange={(e) => { handleChange1(e, index) }} type='text' placeholder={`Custom Field ${index + 1}`} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                        </div>
                    })}



                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for product custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    {productCustomData.map((val, index) => {
                        return <div key={index} className='flex flex-col '>
                            <h1 className='flex text-start font-bold'>Custom Field {index + 1}:</h1>
                            <div className='flex'>
                                <input name='customLable' value={val.customLable} onChange={(e) => { handleChange(e, index) }} type='text' placeholder={`Custom Field ${index + 1}`} className='border-[1px] px-2 w-2/4 py-1 border-gray-400 focus:outline-none' />
                                <select name='customLableType' value={val.customLableType} onChange={(e) => { handleChange(e, index) }} type='text' className='border-[1px] px-2 py-1 w-2/4 border-gray-400 focus:outline-none' >
                                    <option value={""}>Field type</option>
                                    <option value={"text"}>text</option>
                                    <option value={"datetime"}>Datepicker</option>
                                    <option value={"Dropdown"}>Dropdown</option>
                                </select>
                            </div>
                            {val.customLableType === "Dropdown" &&
                                <textarea rows={2} name='dropdownOptions' value={val.dropdownOptions} onChange={(e) => { handleChange(e, index) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                            }
                        </div>
                    })}


                </div>
            </div>
            {/* <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for location custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.lcustomField1} onChange={(e) => { setFormData({ ...formData, lcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.lcustomField2} onChange={(e) => { setFormData({ ...formData, lcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.lcustomField3} onChange={(e) => { setFormData({ ...formData, lcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.lcustomField4} onChange={(e) => { setFormData({ ...formData, lcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for Users custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.ucustomField1} onChange={(e) => { setFormData({ ...formData, ucustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.ucustomField2} onChange={(e) => { setFormData({ ...formData, ucustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.ucustomField3} onChange={(e) => { setFormData({ ...formData, ucustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.ucustomField4} onChange={(e) => { setFormData({ ...formData, ucustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>

                </div>
            </div> */}
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for Purchase custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    {purchaseCustomData.map((val, index) => {
                        return <div key={index}  className='flex flex-col '>
                            <h1 className='flex text-start font-bold'>Custom Field {index + 1}:</h1>
                            <div className='flex'>

                                <input name='customLable' value={val.customLable} onChange={(e) => { handleChange2(e, index) }} type='text' placeholder={`Custom Field ${index + 1}`} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                                <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                    <input name='isRequired' checked={val.isRequired ? true : false} onChange={(e) => { handleChange2(e, index) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                    <h1 className='text-sm'>Is required</h1>
                                </div>


                            </div>
                        </div>
                    })}


                </div>
            </div>
            {/* <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for Purchase Shipping custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField1} onChange={(e) => { setFormData({ ...formData, puShpcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField1Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField1Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField2} onChange={(e) => { setFormData({ ...formData, puShpcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField2Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField2Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField3} onChange={(e) => { setFormData({ ...formData, puShpcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField3Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField3Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField4} onChange={(e) => { setFormData({ ...formData, puShpcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField4Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField4Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField5} onChange={(e) => { setFormData({ ...formData, puShpcustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField5Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField5Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for sell custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <div className='flex'>
                            <input value={formData.scustomField1} onChange={(e) => { setFormData({ ...formData, scustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.scustomField1Required} onChange={(e) => { setFormData({ ...formData, scustomField1Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <div className='flex'>
                            <input value={formData.scustomField2} onChange={(e) => { setFormData({ ...formData, scustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.scustomField2Required} onChange={(e) => { setFormData({ ...formData, scustomField2Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <div className='flex'>
                            <input value={formData.scustomField3} onChange={(e) => { setFormData({ ...formData, scustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.scustomField3Required} onChange={(e) => { setFormData({ ...formData, scustomField3Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <div className='flex'>
                            <input value={formData.scustomField4} onChange={(e) => { setFormData({ ...formData, scustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.scustomField4Required} onChange={(e) => { setFormData({ ...formData, scustomField4Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for Purchase Shipping custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField1} onChange={(e) => { setFormData({ ...formData, sShpcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='w-1/3 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField1Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField1Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField1Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField1Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField2} onChange={(e) => { setFormData({ ...formData, sShpcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] w-1/3 px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField2Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField2Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField2Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField2Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField3} onChange={(e) => { setFormData({ ...formData, sShpcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] w-1/3 px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField3Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField3Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField3Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField3Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField4} onChange={(e) => { setFormData({ ...formData, sShpcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] w-1/3 px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField4Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField4Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField4Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField4Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField5} onChange={(e) => { setFormData({ ...formData, sShpcustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] w-1/3 px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField5Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField5Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField5Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField5Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for types of services custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.tscustomField1} onChange={(e) => { setFormData({ ...formData, tscustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.tscustomField2} onChange={(e) => { setFormData({ ...formData, tscustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.tscustomField3} onChange={(e) => { setFormData({ ...formData, tscustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.tscustomField4} onChange={(e) => { setFormData({ ...formData, tscustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <input value={formData.tscustomField5} onChange={(e) => { setFormData({ ...formData, tscustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 6:</h1>
                        <input value={formData.tscustomField6} onChange={(e) => { setFormData({ ...formData, tscustomField6: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>

                </div>
            </div> */}
            <div className='flex items-center justify-center mt-5'>
                <button onClick={() => { handleSetting() }} className='bg-red-500 rounded-md text-white px-2 py-2'>Update Settings</button>
            </div>
        </div>
    )
}

export default CustomLables
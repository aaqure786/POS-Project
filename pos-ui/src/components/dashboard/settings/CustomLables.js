import React, { useState } from 'react'

const CustomLables = () => {
    const [formData, setFormData] = useState({

    })
    return (
        <div className='bg-white py-16 flex flex-col'>
            <div className='flex flex-col'>
                <h1 className='text-start font-bold'>Lables For Custom Payments</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.pcustomField1} onChange={(e) => { setFormData({ ...formData, pcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.pcustomField2} onChange={(e) => { setFormData({ ...formData, pcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.pcustomField3} onChange={(e) => { setFormData({ ...formData, pcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.pcustomField4} onChange={(e) => { setFormData({ ...formData, pcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <input value={formData.pcustomField5} onChange={(e) => { setFormData({ ...formData, pcustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 6:</h1>
                        <input value={formData.pcustomField6} onChange={(e) => { setFormData({ ...formData, pcustomField6: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 7:</h1>
                        <input value={formData.pcustomField7} onChange={(e) => { setFormData({ ...formData, pcustomField7: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-start font-bold'>Labels for contact custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.ccustomField1} onChange={(e) => { setFormData({ ...formData, ccustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.ccustomField2} onChange={(e) => { setFormData({ ...formData, ccustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.ccustomField3} onChange={(e) => { setFormData({ ...formData, ccustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.ccustomField4} onChange={(e) => { setFormData({ ...formData, ccustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <input value={formData.ccustomField5} onChange={(e) => { setFormData({ ...formData, ccustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 6:</h1>
                        <input value={formData.ccustomField6} onChange={(e) => { setFormData({ ...formData, ccustomField6: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 7:</h1>
                        <input value={formData.ccustomField7} onChange={(e) => { setFormData({ ...formData, ccustomField7: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 8:</h1>
                        <input value={formData.ccustomField8} onChange={(e) => { setFormData({ ...formData, ccustomField8: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 9:</h1>
                        <input value={formData.ccustomField9} onChange={(e) => { setFormData({ ...formData, ccustomField9: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 10:</h1>
                        <input value={formData.ccustomField10} onChange={(e) => { setFormData({ ...formData, ccustomField10: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-start font-bold'>Labels for product custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField1} onChange={(e) => { setFormData({ ...formData, prcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField1Type} onChange={(e) => { setFormData({ ...formData, prcustomField1Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField1Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption1} onChange={(e) => { setFormData({ ...formData, dropdownOption1: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField2} onChange={(e) => { setFormData({ ...formData, prcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField2Type} onChange={(e) => { setFormData({ ...formData, prcustomField2Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField2Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption2} onChange={(e) => { setFormData({ ...formData, dropdownOption2: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField3} onChange={(e) => { setFormData({ ...formData, prcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField3Type} onChange={(e) => { setFormData({ ...formData, prcustomField3Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField3Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption3} onChange={(e) => { setFormData({ ...formData, dropdownOption3: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField4} onChange={(e) => { setFormData({ ...formData, prcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField4Type} onChange={(e) => { setFormData({ ...formData, prcustomField4Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField4Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption4} onChange={(e) => { setFormData({ ...formData, dropdownOption4: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField5} onChange={(e) => { setFormData({ ...formData, prcustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField5Type} onChange={(e) => { setFormData({ ...formData, prcustomField5Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField5Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption5} onChange={(e) => { setFormData({ ...formData, dropdownOption5: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 6:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField6} onChange={(e) => { setFormData({ ...formData, prcustomField6: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField6Type} onChange={(e) => { setFormData({ ...formData, prcustomField6Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField6Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption6} onChange={(e) => { setFormData({ ...formData, dropdownOption6: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 7:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField7} onChange={(e) => { setFormData({ ...formData, prcustomField7: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField7Type} onChange={(e) => { setFormData({ ...formData, prcustomField7Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField7Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption7} onChange={(e) => { setFormData({ ...formData, dropdownOption7: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 8:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField8} onChange={(e) => { setFormData({ ...formData, prcustomField8: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField8Type} onChange={(e) => { setFormData({ ...formData, prcustomField8Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField8Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption8} onChange={(e) => { setFormData({ ...formData, dropdownOption8: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 9:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField9} onChange={(e) => { setFormData({ ...formData, prcustomField9: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField9Type} onChange={(e) => { setFormData({ ...formData, prcustomField9Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField9Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption9} onChange={(e) => { setFormData({ ...formData, dropdownOption9: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-start font-bold'>Custom Field 10:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField10} onChange={(e) => { setFormData({ ...formData, prcustomField10: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField10Type} onChange={(e) => { setFormData({ ...formData, prcustomField10Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField10Type === "Dropdown" &&
                            <textarea rows={3} value={formData.dropdownOption10} onChange={(e) => { setFormData({ ...formData, dropdownOption10: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomLables
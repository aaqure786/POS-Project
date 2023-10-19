import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import JoditEditor from 'jodit-react';


const AddorEditInvoiceLayout = () => {
    const editor = useRef(null)
    const [isserror, setIsserror] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        design: ""
    })
    const handleClick = (e) => {
        e.preventDefault();
        console.log(formData);
        if (
            formData.name.length === 0 ||
            formData.design.length === 0
        ) {
            setIsserror(true);
            console.log(isserror);
        } else if (id) {
            console.log("Handle Update", formData);
        } else {
            console.log("Handle Save", formData);
        }
    };
    const parms = useParams();
    const id = parms.id
    return (
        <div className='flex flex-col w-full bg-gray-100 px-5 py-2'>
            <h1 className="text-xl text-start font-bold ">{id ? "Edit" : "Add"} Invoice Layout</h1>
            <div className='flex flex-col mt-5 bg-white p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Layout name:*
                            <h2 className="text-red-400">
                                {isserror && formData.name.length === 0 ? "Required field" : ""}
                            </h2>
                        </h2>
                        <input type="text" placeholder='Name'
                            value={formData.name}
                            onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Design:*
                            <h2 className="text-red-400">
                                {isserror && formData.design.length === 0 ? "Required field" : ""}
                            </h2>
                        </h2>
                        <select type="text" placeholder='Name'
                            value={formData.design}
                            onChange={(e) => { setFormData({ ...formData, design: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
                            <option value={"classic"} selected="selected">Classic (For normal printer)</option>
                            <option value={"elegant"} selected="selected">Elegant (For normal printer)</option>
                            <option value={"detailed"} selected="selected">Detailed (For normal printer)</option>
                            <option value={"columnize-taxes"} selected="selected">Columnize taxes (For normal printer)</option>
                            <option value={"slim"} selected="selected">Slim (Recommended for thermal line receipt printer, 80mm paper size)</option>
                            <option value={"slim2"} selected="selected">Slim 2 (Recommended for thermal line receipt printer, 80mm and 58mm paper size)</option>

                        </select>

                        <h1 className='text-gray-700 font-semibold text-start'>Used for browser based printing</h1>
                    </div>
                    <div className='flex  '>
                        <input type="checkbox" placeholder='Name'
                            checked={formData.showLetterHead ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showLetterHead: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Show Letter Head

                        </h2>

                    </div>
                    <div className='flex  '>
                        <input type="checkbox"
                            checked={formData.showInvoiceLogo ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showInvoiceLogo: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Show Invoice Logo

                        </h2>

                    </div>
                    <div className='flex flex-col items-start justify-start'>
                        <h1 className='text-start font-bold'>Invoice Logo:</h1>
                        <input type="file"
                            value={formData.invoiceLogo}
                            onChange={(e) => { setFormData({ ...formData, invoiceLogo: e.target.value }) }}
                            className=" mx-2 " />
                        <p className='text-gray-700 font-semibold'>Max 1 MB, jpeg,gif,png formats only.</p>
                        <p className='text-gray-700 font-semibold'>Upload only if you want to replace previous logo</p>

                    </div>


                </div>
                <div className='flex flex-col mt-5'>
                    <h1 className='text-start font-bold'>Header Text:</h1>
                    <JoditEditor
                        className='w-full h-[300px] border-[1px] border-gray-500'
                        ref={editor}
                        value={formData.headerText} onChange={(newContent) => { setFormData({ ...formData, headerText: newContent }) }}
                    />
                </div>
                <div className='grid grid-rows-2 md:grid-cols-4 mt-5 gap-5'>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Sub Heading Line 1

                        </h2>
                        <input type="text" placeholder='Sub Heading Line 1'
                            value={formData.subHeadLine1}
                            onChange={(e) => { setFormData({ ...formData, subHeadLine1: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Sub Heading Line 2

                        </h2>
                        <input type="text" placeholder='Sub Heading Line 2'
                            value={formData.subHeadLine2}
                            onChange={(e) => { setFormData({ ...formData, subHeadLine2: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Sub Heading Line 3

                        </h2>
                        <input type="text" placeholder='Sub Heading Line 3'
                            value={formData.subHeadLine3}
                            onChange={(e) => { setFormData({ ...formData, subHeadLine3: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Sub Heading Line 4

                        </h2>
                        <input type="text" placeholder='Sub Heading Line 4'
                            value={formData.subHeadLine4}
                            onChange={(e) => { setFormData({ ...formData, subHeadLine4: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Sub Heading Line 5

                        </h2>
                        <input type="text" placeholder='Sub Heading Line 5'
                            value={formData.subHeadLine5}
                            onChange={(e) => { setFormData({ ...formData, subHeadLine5: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col bg-white mt-10 p-5'>
                <div className='grid grid-rows-2 md:grid-cols-4 gap-5'>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Invoice Heading

                        </h2>
                        <input type="text" placeholder='Invoice Heading'
                            value={formData.invoiceHeading}
                            onChange={(e) => { setFormData({ ...formData, invoiceHeading: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Heading Suffix for not paid

                        </h2>
                        <input type="text" placeholder='Heading Suffix for not paid'
                            value={formData.headingSuffixForNotPaid}
                            onChange={(e) => { setFormData({ ...formData, headingSuffixForNotPaid: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Heading Suffix for paid

                        </h2>
                        <input type="text" placeholder='Heading Suffix for paid'
                            value={formData.headingSuffixForPaid}
                            onChange={(e) => { setFormData({ ...formData, headingSuffixForPaid: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Proforma Invoice Heading

                        </h2>
                        <input type="text" placeholder='Proforma Invoice Heading'
                            value={formData.proformaInvoiceHeading}
                            onChange={(e) => { setFormData({ ...formData, proformaInvoiceHeading: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Quotations Headings

                        </h2>
                        <input type="text" placeholder='Quotations Headings'
                            value={formData.quoutationHeading}
                            onChange={(e) => { setFormData({ ...formData, quoutationHeading: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Sales Order Heading

                        </h2>
                        <input type="text" placeholder='Sales Order Heading'
                            value={formData.salesOrderHeading}
                            onChange={(e) => { setFormData({ ...formData, salesOrderHeading: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Invoice no. lable:

                        </h2>
                        <input type="text" placeholder='Invoice no. lable'
                            value={formData.invoiceNoLable || "Invoice No"}
                            onChange={(e) => { setFormData({ ...formData, invoiceNoLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Quotations no. lable

                        </h2>
                        <input type="text" placeholder='Quotations no. lable'
                            value={formData.quoutationNoLable}
                            onChange={(e) => { setFormData({ ...formData, quoutationNoLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Date Lable

                        </h2>
                        <input type="text" placeholder='Date Lable'
                            value={formData.dateLable || "Date"}
                            onChange={(e) => { setFormData({ ...formData, dateLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Due date lable

                        </h2>
                        <input type="text" placeholder='Due date lable'
                            value={formData.dueDateLable}
                            onChange={(e) => { setFormData({ ...formData, dueDateLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex  '>
                        <input type="checkbox"
                            checked={formData.showDueDate ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showDueDate: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Show Due Date

                        </h2>

                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Date Time Format

                        </h2>
                        <input type="text" placeholder='Date Time Format'
                            value={formData.dateTimeFormat}
                            onChange={(e) => { setFormData({ ...formData, dateTimeFormat: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Sale Person Lable

                        </h2>
                        <input type="text" placeholder='Sale Person Lable'
                            value={formData.salePersonLable}
                            onChange={(e) => { setFormData({ ...formData, salePersonLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Commission agent lable

                        </h2>
                        <input type="text" placeholder='Commission agent lable'
                            value={formData.cmmsnAgentLable}
                            onChange={(e) => { setFormData({ ...formData, cmmsnAgentLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 '>
                    <div className='flex  '>
                        <input type="checkbox"
                            checked={formData.showBusinessName ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showBusinessName: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Show Business Name

                        </h2>

                    </div>
                    <div className='flex  '>
                        <input type="checkbox"
                            checked={formData.showLocationName ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showLocationName: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Show Location Name

                        </h2>

                    </div>
                    <div className='flex  '>
                        <input type="checkbox"
                            checked={formData.showSalesPerson ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showSalesPerson: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Show Sales Person

                        </h2>

                    </div>
                    <div className='flex  '>
                        <input type="checkbox"
                            checked={formData.showCmmsnAgent ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showCmmsnAgent: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Show Commission Agent

                        </h2>

                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <h1 className='text-start font-bold my-2'>Fields For Customer Details</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                        <div className='flex  '>
                            <input type="checkbox"
                                checked={formData.showCustomerInfo ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showCustomerInfo: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Show Customer information

                            </h2>

                        </div>
                        <div className='flex flex-col '>
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Customer Lable

                            </h2>
                            <input type="text" placeholder='Sale Person Lable'
                                value={formData.customerLable || "Customer"}
                                onChange={(e) => { setFormData({ ...formData, customerLable: e.target.value }) }}
                                className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                        </div>
                        <div className='flex  '>
                            <input type="checkbox"
                                checked={formData.showClientId ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showClientId: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Show Client ID

                            </h2>

                        </div>
                        <div className='flex flex-col '>
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Client ID lable

                            </h2>
                            <input type="text" placeholder='Client ID lable'
                                value={formData.clientIdLable}
                                onChange={(e) => { setFormData({ ...formData, clientIdLable: e.target.value }) }}
                                className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                        </div>
                        <div className='flex flex-col '>
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Client tax number lable

                            </h2>
                            <input type="text" placeholder='Client tax number lable'
                                value={formData.clientTaxNoLable}
                                onChange={(e) => { setFormData({ ...formData, clientTaxNoLable: e.target.value }) }}
                                className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                        </div>
                        <div className='flex  '>
                            <input type="checkbox"
                                checked={formData.showRewardPoint ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showRewardPoint: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Show Reward Point

                            </h2>

                        </div>
                        <div ></div>
                        <div></div>
                        <div className='flex  '>
                            <input type="checkbox"
                                checked={formData.showFatherName ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showFatherName: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Abu Ka Name

                            </h2>

                        </div>
                        <div className='flex  '>
                            <input type="checkbox"
                                checked={formData.ccustomField1 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, ccustomField1: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 1

                            </h2>

                        </div>
                        <div className='flex  '>
                            <input type="checkbox"
                                checked={formData.ccustomField2 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, ccustomField2: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 2

                            </h2>

                        </div>
                        <div className='flex  '>
                            <input type="checkbox"
                                checked={formData.ccustomField3 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, ccustomField3: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 3

                            </h2>

                        </div>


                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <h1 className='text-start font-bold my-5 text-xl'>Fields to be shown in location address:</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.landmark ? true : false}
                                onChange={(e) => { setFormData({ ...formData, landmark: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Landmark

                            </h2>

                        </div>

                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.city ? true : false}
                                onChange={(e) => { setFormData({ ...formData, city: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                City

                            </h2>

                        </div>


                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.state ? true : false}
                                onChange={(e) => { setFormData({ ...formData, state: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                State

                            </h2>

                        </div>

                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.country ? true : false}
                                onChange={(e) => { setFormData({ ...formData, country: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Country

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.zipCode ? true : false}
                                onChange={(e) => { setFormData({ ...formData, zipCode: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Zip Code

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.lcustomField1 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, lcustomField1: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 1

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.lcustomField2 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, lcustomField2: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 2

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.lcustomField3 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, lcustomField3: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 3

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.lcustomField4 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, lcustomField4: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 4

                            </h2>

                        </div>


                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <h1 className='text-start font-bold my-5 text-xl' >Fields for communication details:</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.mobile ? true : false}
                                onChange={(e) => { setFormData({ ...formData, mobile: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Mobile Number

                            </h2>

                        </div>

                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.alternateNumber ? true : false}
                                onChange={(e) => { setFormData({ ...formData, alternateNumber: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Alternate Number

                            </h2>

                        </div>


                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.email ? true : false}
                                onChange={(e) => { setFormData({ ...formData, email: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Email

                            </h2>

                        </div>



                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <h1 className='text-start font-bold my-5 text-xl'>Fields for tax details:</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                        <div className='flex '>
                            <input type="checkbox"
                                checked={formData.tax1detail ? true : false}
                                onChange={(e) => { setFormData({ ...formData, tax1detail: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Tax 1 detail

                            </h2>

                        </div>

                        <div className='flex '>
                            <input type="checkbox"
                                checked={formData.tax2detail ? true : false}
                                onChange={(e) => { setFormData({ ...formData, tax2detail: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Tax 2 detail

                            </h2>

                        </div>






                    </div>
                </div>

            </div>
            <div className='flex flex-col w-full mt-10 bg-white p-5'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Product Lable:

                        </h2>
                        <input type="text" placeholder='Product Lable'
                            value={formData.productLable || "Product"}
                            onChange={(e) => { setFormData({ ...formData, productLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Quantity Lable

                        </h2>
                        <input type="text" placeholder='Quantity Lable'
                            value={formData.quantityLable || "Quantity"}
                            onChange={(e) => { setFormData({ ...formData, quantityLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Unit Price Label:

                        </h2>
                        <input type="text" placeholder='Unit Price Label'
                            value={formData.unitPriceLabel}
                            onChange={(e) => { setFormData({ ...formData, unitPriceLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Subtotal Label:

                        </h2>
                        <input type="text" placeholder='Subtotal Label'
                            value={formData.subtotalLabel}
                            onChange={(e) => { setFormData({ ...formData, subtotalLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Category or HSN code label:

                        </h2>
                        <input type="text" placeholder='Category or HSN code label'
                            value={formData.categoryCodeLabel}
                            onChange={(e) => { setFormData({ ...formData, categoryCodeLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Total quantity Label:

                        </h2>
                        <input type="text" placeholder='Total quantity Label'
                            value={formData.totalQuantityLabel}
                            onChange={(e) => { setFormData({ ...formData, totalQuantityLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Item discount label:

                        </h2>
                        <input type="text" placeholder='Item discount label'
                            value={formData.itemDiscountLabel}
                            onChange={(e) => { setFormData({ ...formData, itemDiscountLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Discount unit price Label:

                        </h2>
                        <input type="text" placeholder='Discount unit price Label'
                            value={formData.discountUnitPriceLabel}
                            onChange={(e) => { setFormData({ ...formData, discountUnitPriceLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>




                </div>
                <div className='flex flex-col w-full'>
                    <h1 className='text-start font-bold my-5 text-xl'>Product details to be shown:</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-full'>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showBrand ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showBrand: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Show Brand

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showSku ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showSku: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Show SKU

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showCategoryCode ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showCategoryCode: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Show category code or HSN code

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showSaleDescription ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showSaleDescription: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold">Show Sale Description</h2>
                            <h2 className="text-start text-gray-700 font-semibold">(Product IMEI or Serial Number)</h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showProductDescription ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showProductDescription: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Show Product Description

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.pcustomField1 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, pcustomField1: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 1

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.pcustomField2 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, pcustomField2: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 2

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.pcustomField3 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, pcustomField3: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 3

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.pcustomField4 ? true : false}
                                onChange={(e) => { setFormData({ ...formData, pcustomField4: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold flex ">
                                Custom Fiedl 4

                            </h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showLotNumber ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showLotNumber: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold">Show Lot Number</h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showProductImage ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showProductImage: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold">Show Product Image</h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showWarrantyName ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showWarrantyName: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold">Show Warranty Name</h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showWarrantyExpiryDate ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showWarrantyExpiryDate: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold">Show Warranty Expiry Date</h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showWarrantyDescription ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showWarrantyDescription: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold">Show Warranty Description</h2>

                        </div>
                        <div className='flex'>
                            <input type="checkbox"
                                checked={formData.showBaseUnitDetails ? true : false}
                                onChange={(e) => { setFormData({ ...formData, showBaseUnitDetails: e.target.checked }) }}
                                className=" w-5 h-5 mx-2 " />
                            <h2 className="text-start text-gray-700 font-semibold">Show base Unit detials (If applicable)</h2>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full mt-10 bg-white p-5'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Subtotal Lable:

                        </h2>
                        <input type="text" placeholder='Subtotal Lable'
                            value={formData.subtotalLable || "Subtotal"}
                            onChange={(e) => { setFormData({ ...formData, subtotalLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Discount Lable

                        </h2>
                        <input type="text" placeholder='Discount Lable'
                            value={formData.discountLable || "Quantity"}
                            onChange={(e) => { setFormData({ ...formData, discountLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Tax Label:

                        </h2>
                        <input type="text" placeholder='Tax Label'
                            value={formData.taxLabel || "Tax"}
                            onChange={(e) => { setFormData({ ...formData, taxLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Total Label:

                        </h2>
                        <input type="text" placeholder='Total Label'
                            value={formData.totalLabel || "Total"}
                            onChange={(e) => { setFormData({ ...formData, totalLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Total Items label:

                        </h2>
                        <input type="text" placeholder='Total Items label'
                            value={formData.totalItemsLabel}
                            onChange={(e) => { setFormData({ ...formData, totalItemsLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Round off Label:

                        </h2>
                        <input type="text" placeholder='Round off Label'
                            value={formData.roundOffLabel}
                            onChange={(e) => { setFormData({ ...formData, roundOffLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Total Due label (Current Sale):

                        </h2>
                        <input type="text" placeholder='Total Due label'
                            value={formData.itemDiscountLabelcs}
                            onChange={(e) => { setFormData({ ...formData, itemDiscountLabelcs: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Amount Paid Label:

                        </h2>
                        <input type="text" placeholder='Amount Paid Label'
                            value={formData.amountLabel}
                            onChange={(e) => { setFormData({ ...formData, amountLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Total Due label (All Sale):

                        </h2>
                        <input type="text" placeholder='Total Due label'
                            value={formData.totalDueLabelas}
                            onChange={(e) => { setFormData({ ...formData, totalDueLabelas: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Change Return Label:

                        </h2>
                        <input type="text" placeholder='Change Return Label'
                            value={formData.changeReturnLabel}
                            onChange={(e) => { setFormData({ ...formData, changeReturnLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Word Format:

                        </h2>
                        <input type="text" placeholder='Word Format'
                            value={formData.wordFormat}
                            onChange={(e) => { setFormData({ ...formData, wordFormat: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Tax Summary Label:

                        </h2>
                        <input type="text" placeholder='Tax Summary Label'
                            value={formData.taxSummaryLabel}
                            onChange={(e) => { setFormData({ ...formData, taxSummaryLabel: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>

                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.showPaymentInfo ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showPaymentInfo: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Show Payment Information</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.showBarcode ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showBarcode: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Show Barcode</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.showTotalBalanceDueAs ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showTotalBalanceDueAs: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Show Total Balance Due (All Sale)</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.showTotalInWords ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showTotalInWords: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Show Total in Words</h2>

                    </div>
                </div>
            </div>

            <div className='flex flex-col bg-white mt-10 w-full p-5'>
                <div className='flex flex-col '>
                    <h1 className='text-start font-bold'>Footer Text:</h1>
                    <JoditEditor
                        className='w-full h-[300px] border-[1px] border-gray-500'
                        ref={editor}
                        value={formData.footerText} onChange={(newContent) => { setFormData({ ...formData, footerText: newContent }) }}
                    />
                </div>
                <div className='flex mt-5'>
                    <input type="checkbox"
                        checked={formData.setAsDefault ? true : false}
                        onChange={(e) => { setFormData({ ...formData, setAsDefault: e.target.checked }) }}
                        className=" w-5 h-5 mx-2 " />
                    <h2 className="text-start text-gray-700 font-semibold">Set as Default</h2>

                </div>
            </div>

            <div className='flex flex-col w-full bg-white mt-10 p-5'>
                <h1 className='text-start font-bold text-xl my-5'>QR Code</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.showQrCode ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showQrCode: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Show QR Code</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.showLabels ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showLabels: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Show Labels</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.zatcaFatooraQrCode ? true : false}
                            onChange={(e) => { setFormData({ ...formData, zatcaFatooraQrCode: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">(ZATCA) Fatoora QR Code</h2>

                    </div>
                </div>
                <h1 className='text-start font-bold text-xl my-5'>Fields to be Shown</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.businessName ? true : false}
                            onChange={(e) => { setFormData({ ...formData, businessName: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Business Name</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.businessLocationAddress ? true : false}
                            onChange={(e) => { setFormData({ ...formData, businessLocationAddress: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Business Location Address</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.businessTax1 ? true : false}
                            onChange={(e) => { setFormData({ ...formData, businessTax1: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Business Tax 1</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.businessTax2 ? true : false}
                            onChange={(e) => { setFormData({ ...formData, businessTax2: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Business Tax 2</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.invoiceNo ? true : false}
                            onChange={(e) => { setFormData({ ...formData, invoiceNo: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Invoie No.</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.invoiceDateTime ? true : false}
                            onChange={(e) => { setFormData({ ...formData, invoiceDateTime: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Invoice Datetime</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.subtotal ? true : false}
                            onChange={(e) => { setFormData({ ...formData, subtotal: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Subtotal</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.totalAmountWithTax ? true : false}
                            onChange={(e) => { setFormData({ ...formData, totalAmountWithTax: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Total amount with tax</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.totalTax ? true : false}
                            onChange={(e) => { setFormData({ ...formData, totalTax: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Tota Tax</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.customerName ? true : false}
                            onChange={(e) => { setFormData({ ...formData, customerName: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Customer Name</h2>

                    </div>
                    <div className='flex'>
                        <input type="checkbox"
                            checked={formData.invoiceURL ? true : false}
                            onChange={(e) => { setFormData({ ...formData, invoiceURL: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Invoice URL</h2>

                    </div>

                </div>
            </div>

            <div className='flex flex-col w-full bg-white mt-10 p-5'>
                <h1 className='text-start font-bold text-xl'>Restaurant module settings</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                    <div className='flex  mt-5'>
                        <input type="checkbox"
                            checked={formData.showTable ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showTable: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Show Table</h2>

                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Table Lable:

                        </h2>
                        <input type="text" placeholder='Table Lable'
                            value={formData.tableLable}
                            onChange={(e) => { setFormData({ ...formData, tableLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex  mt-5'>
                        <input type="checkbox"
                            checked={formData.showServiceStaff ? true : false}
                            onChange={(e) => { setFormData({ ...formData, showServiceStaff: e.target.checked }) }}
                            className=" w-5 h-5 mx-2 " />
                        <h2 className="text-start text-gray-700 font-semibold">Show Service Staff</h2>

                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Service Staff Lable:

                        </h2>
                        <input type="text" placeholder='Service Staff Lable'
                            value={formData.serviceStaffLable || "Subtotal"}
                            onChange={(e) => { setFormData({ ...formData, serviceStaffLable: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                </div>
            </div>


            <div className='flex flex-col w-full bg-white mt-10 p-5'>
                <h1 className='text-start font-bold text-xl my-5'>Credit Note / Sell Return Details</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>

                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Heading:

                        </h2>
                        <input type="text" placeholder='Heading'
                            value={formData.heading}
                            onChange={(e) => { setFormData({ ...formData, heading: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>

                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Reference Number:

                        </h2>
                        <input type="text" placeholder='Reference Number'
                            value={formData.referencNumber}
                            onChange={(e) => { setFormData({ ...formData, referencNumber: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                    <div className='flex flex-col '>
                        <h2 className="text-start text-gray-700 font-semibold flex ">
                            Total Amount:

                        </h2>
                        <input type="text" placeholder='Total Amount'
                            value={formData.totalAmount}
                            onChange={(e) => { setFormData({ ...formData, totalAmount: e.target.value }) }}
                            className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-5 pb-10 justify-center  ">
                <button
                    onClick={handleClick}
                    className="bg-green-500 px-2 py-2 items-center justify-center rounded-md flex w-25"
                >
                    {id ? "Update" : "Save"}
                </button>
            </div>

        </div>
    )
}

export default AddorEditInvoiceLayout
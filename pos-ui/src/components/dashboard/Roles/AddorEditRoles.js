import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const AddorEditRoles = () => {
    const [otherPerm, setOtherPerm] = useState([
        { name: "service_Staff", lable: "Service Staff" },
        { name: "view_export_to_buttons", lable: " View export to buttons (csv/excel/print/pdf) on tables" }

    ])
    const [userPerm, setUserPerm] = useState([
        { name: "view_user", lable: " View user" },
        { name: "add_user", lable: "Add user" },
        { name: "edit_user", lable: "Edit user" },
        { name: "delete_user", lable: "Delete user" }
    ])
    const [rolePerm, setRolePerm] = useState([
        { name: "view_role", lable: " View role" },
        { name: "add_role", lable: "Add role" },
        { name: "edit_role", lable: "Edit role" },
        { name: "delete_role", lable: "Delete role" }
    ])
    const [supplierPerm, setSupplierPerm] = useState([
        { name: "view_all_supplier", lable: " View All Supplier", type: "radio" },
        { name: "view_all_supplier", lable: "View Own Supplier", type: "radio" },
        { name: "view_supplier", lable: " View supplier" },
        { name: "add_supplier", lable: "Add supplier" },
        { name: "edit_supplier", lable: "Edit supplier" },
        { name: "delete_supplier", lable: "Delete supplier" }
    ])
    const [customerPerm, setCustomerPerm] = useState([
        { name: "view_all_customer", lable: " View All Customer", type: "radio" },
        { name: "view_all_customer", lable: "View Own Customer", type: "radio" },
        { name: "view_sell_customer", lable: "View customers with no sell from one month only", type: "radio" },
        { name: "view_sell_customer", lable: "View customers with no sell from three months only", type: "radio" },
        { name: "view_sell_customer", lable: "View customers with no sell from six months only", type: "radio" },
        { name: "view_sell_customer", lable: "View customers with no sell from one year only", type: "radio" },
        { name: "view_sell_customer", lable: "View customers with no sell from one year only", type: "radio" },
        { name: "add_customer", lable: "Add Customer" },
        { name: "edit_customer", lable: "Edit Customer" },
        { name: "delete_customer", lable: "Delete Customer" }
    ])
    const [productPerm, setProductPerm] = useState([
        { name: "view_product", lable: " View Product" },
        { name: "add_product", lable: "Add Product" },
        { name: "edit_product", lable: "Edit Product" },
        { name: "delete_product", lable: "Delete Product" },
        { name: "add_operning_stock", lable: "Add Opening Stock" },
        { name: "view_purchase_price", lable: "View Purchase Price" }
    ])
    const [purStkAdjusPerm, setPurStkAdjusPerm] = useState([
        { name: "view_all_psd", lable: " View All Purchase & Stock Adjustment", type: "radio" },
        { name: "view_all_psd", lable: "View Own Purchase & Stock Adjustment", type: "radio" },
        { name: "add_psd", lable: "Add purchase & Stock Adjustment" },
        { name: "edit_psd", lable: "Edit purchase & Stock Adjustment" },
        { name: "delete_psd", lable: "Delete purchase & Stock Adjustment" },
        { name: "add_purch_pmnt", lable: "Add purchase payment" },
        { name: "edit_purch_pmnt", lable: "Edit purchase payment" },
        { name: "delete_purch_pmnt", lable: "Delete purchase payment" },
        { name: "update_status", lable: "Update Status" }

    ])
    const [purOrderPerm, setPurOrderPerm] = useState([
        { name: "view_all_purcOrder", lable: " View All Purchase Order", type: "radio" },
        { name: "view_all_purcOrder", lable: "View Own Purchase Order", type: "radio" },
        { name: "add_purcOrder", lable: "Add Purchase Order" },
        { name: "edit_purcOrder", lable: "Edit Purchase Order" },
        { name: "delete_purcOrder", lable: "Delete Purchase Order" }
    ])
    const [posPerm, setPosPerm] = useState([
        { name: "view_pos", lable: " View Product" },
        { name: "add_pos", lable: "Add Product" },
        { name: "edit_pos", lable: "Edit Product" },
        { name: "delete_pos", lable: "Delete Product" },
        { name: "edit_prdct_price_fromPosScreen", lable: "Edit Product Price From POS Screen" },
        { name: "edit_prdct_discount_fromPosScreen", lable: "Edit Product Discount From POS Screen" },
        { name: "addEdit_pmnt", lable: "Add/Edit Payment" },
        { name: "prnt_Invoice", lable: "Print Invoice" },
    ])
    const [sellPerm, setSellPerm] = useState([
        { name: "view_all_sell", lable: " View All Sell", type: "radio" },
        { name: "view_all_sell", lable: "View Own Sell only", type: "radio" },
        { name: "view_paid_sell_only", lable: "View Paid Sell Only" },
        { name: "view_due_sell_only", lable: "View Due Sell Only" },
        { name: "view_partially_paid_sell_only", lable: "View Partially Paid Sell Only" },
        { name: "view_overdue_sell_only", lable: "View Overdue Sell Only" },
        { name: "add_sell", lable: "Add Sell" },
        { name: "update_sell", lable: "Update Sell"},
        { name: "delete_sell", lable: "Delete Sell"},
        { name: "cmsn_agnt_cn_vw_thr_own_sell", lable: "Commission Agent Can View Their Own Sell" },
        { name: "add_sell_payment", lable: "AdD Sell Payment" },
        { name: "edit_sell_payment", lable: "Edit Sell Payment" },
        { name: "delete_sell_payment", lable: "Delete Sell Payment" },
        { name: "edit_prdct_price_fromSaleScreen", lable: "Edit Product Price From Sale Screen" },
        { name: "edit_prdct_discount_fromSaleScreen", lable: "Edit Product Discount From Sale Screen" },
        { name: "ad_edt_dlt_discount", lable: "ADD/Edit/Delete Discount" },
        { name: "access_typesOfService", lable: "Access Types Of Service" },
        { name: "access_all_sell_return", lable: "Access All Sell Return" },
        { name: "access_own_sell_return", lable: "Access Own Sell Return" },
        { name: "ad_edt_Invoice_number", lable: "Add/Edit Invoice Number" }
    ])

    const handleChange = (e, array, setArray) => {
        const { name, checked } = e.target
        let tempData = array.map(val => val.name === name ? { ...val, isChecked: checked } : val)
        setArray(tempData)
    }

    const handleAllSelect = (e, array, setArray, id) => {
        const { name, checked } = e.target
        if (name === id) {
            let tempData = array.map((val) => {
                return { ...val, isChecked: checked }
            });
            setArray(tempData)
        }

    }




    const parms = useParams()
    const id = parms.id
    return (
        <div className='w-full min-h-screen bg-gray-200 p-2'>
            <h1 className='text-2xl items-start flex mx-6 justify-start  font-semibold'>{id ? "Edit Role" : "Add Role"}</h1>
            <div className='flex flex-col rounded-md border-t-[3px] p-5 border-blue-600 bg-white w-[96%] mx-[2%] min-h-screen'>
                <div className='flex flex-col items-start w-full'>
                    {/* <span className='text-red-500 mx-2 mt-1 text-sm'>{iserror && userData.firstName.length === 0 ? "Required Field" : ""} </span> */}
                    <h1 className='text-lg flex'>First Name: *  </h1>
                    <input type='text' placeholder='First Name' className='focus:outline-none w-full md:w-1/3 border-[1px] border-gray-300 px-2  rounded-sm p-1' />
                    {/* value={""} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} */}
                </div>
                <h1 className='flex text-lg font-semibold'>Permissions:</h1>
                {/* Others */}
                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox'
                                checked={otherPerm.filter((data) => data?.isChecked !== true).length < 1}
                                onChange={(e) => { handleAllSelect(e, otherPerm, setOtherPerm, "othersAll") }}
                                name='othersAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1'>

                        {otherPerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type='checkbox'
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, otherPerm, setOtherPerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>

                            </div>

                        })}


                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                {/* User */}
                <h1 className='flex text-sm mt-3'>User:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' checked={userPerm.filter((data) => data?.isChecked !== true).length < 1} onChange={(e) => { handleAllSelect(e, userPerm, setUserPerm, "userAll") }} name='userAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                        {userPerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type='checkbox'
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, userPerm, setUserPerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>

                            </div>

                        })}
                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                {/* Roles */}
                <h1 className='flex text-sm mt-3'>Roles:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>

                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox'
                                checked={rolePerm.filter((data) => data?.isChecked !== true).length < 1}
                                onChange={(e) => { handleAllSelect(e, rolePerm, setRolePerm, "roleAll") }}
                                name='roleAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                        {rolePerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type='checkbox'
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, rolePerm, setRolePerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>

                            </div>

                        })}
                    </div>


                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                {/* Supplier */}
                <h1 className='flex text-sm mt-3'>Supplier:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox'
                                checked={supplierPerm.filter((data) => data?.isChecked !== true).length < 1}
                                onChange={(e) => { handleAllSelect(e, supplierPerm, setSupplierPerm, "supllierAll") }}
                                name='supllierAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                        {supplierPerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type={data.type || "checkbox"}
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, supplierPerm, setSupplierPerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>
                            </div>

                        })}
                    </div>
                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                {/* Customer */}
                <h1 className='flex text-sm mt-3'>Customer:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox'
                                checked={customerPerm.filter((data) => data?.isChecked !== true).length < 1}
                                onChange={(e) => { handleAllSelect(e, customerPerm, setCustomerPerm, "customerAll") }}
                                name='customerAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                        {customerPerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type={data.type || "checkbox"}
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, customerPerm, setCustomerPerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>
                            </div>

                        })}
                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                {/* Product */}
                <h1 className='flex text-sm mt-3'>Product:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox'
                                checked={productPerm.filter((data) => data?.isChecked !== true).length < 1}
                                onChange={(e) => { handleAllSelect(e, productPerm, setProductPerm, "productAll") }}
                                name='productAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                        {productPerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type={data.type || "checkbox"}
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, productPerm, setProductPerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>
                            </div>

                        })}
                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                {/* Purchase & Stock Adjustment */}
                <h1 className='flex text-sm mt-3'>Purchase & Stock Adjustment:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox'
                                checked={purStkAdjusPerm.filter((data) => data?.isChecked !== true).length < 1}
                                onChange={(e) => { handleAllSelect(e, purStkAdjusPerm, setPurStkAdjusPerm, "prcstkadjAll") }}
                                name='prcstkadjAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                        {purStkAdjusPerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type={data.type || "checkbox"}
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, purStkAdjusPerm, setPurStkAdjusPerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>
                            </div>

                        })}
                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                {/* Purchase Order */}
                <h1 className='flex text-sm mt-3'>Purchase Order:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox'
                                checked={purOrderPerm.filter((data) => data?.isChecked !== true).length < 1}
                                onChange={(e) => { handleAllSelect(e, purOrderPerm, setPurOrderPerm, "prcordrAll") }}
                                name='prcordrAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                        {purOrderPerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type={data.type || "checkbox"}
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, purOrderPerm, setPurOrderPerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>
                            </div>

                        })}
                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                {/* POS */}
                <h1 className='flex text-sm mt-3'>POS:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox'
                                checked={posPerm.filter((data) => data?.isChecked !== true).length < 1}
                                onChange={(e) => { handleAllSelect(e, posPerm, setPosPerm, "posAll") }}
                                name='posAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>


                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                        {posPerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type={data.type || "checkbox"}
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, posPerm, setPosPerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>
                            </div>

                        })}
                    </div>



                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                {/* Sell */}
                <h1 className='flex text-sm mt-3'>Sell:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox'
                                checked={sellPerm.filter((data) => data?.isChecked !== true).length < 1}
                                onChange={(e) => { handleAllSelect(e, sellPerm, setSellPerm, "sellAll") }}
                                name='sellAll' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2'>
                        {sellPerm.map((data, index) => {
                            return <div key={index} className='flex  items-center justify-start'>
                                <input type={data.type || "checkbox"}
                                    checked={data?.isChecked || false}
                                    onChange={(e) => { handleChange(e, sellPerm, setSellPerm) }}
                                    name={data.name}
                                    className='w-5 h-5 mt-2 mx-2'
                                />
                                <h1 className='flex text-sm mt-3'>{data.lable}</h1>
                            </div>

                        })}
                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>
                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>


                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>


                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>


                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>


                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>

                <h1 className='flex text-sm mt-3'>Others:</h1>
                <div className='flex flex-col md:flex-row w-full mt-3'>
                    <div className='w-full md:w-1/4'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Select All</h1>

                        </div>
                    </div>
                    <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3'>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>
                        <div className='flex  items-center justify-start'>
                            <input type='checkbox' className='w-5 h-5 mt-2 mx-2' />
                            <h1 className='flex text-sm mt-3'>Permissions:</h1>

                        </div>

                    </div>

                </div>
                <div className=' w-[94%] mx-[3%] mt-5 h-[2px] bg-black'></div>




            </div>

        </div>
    )
}

export default AddorEditRoles
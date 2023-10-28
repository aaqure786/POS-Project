import React, { useState } from 'react'

const Prefixes = () => {
  const [formData, setFormData] = useState({

  })
  const handleSetting = ()=>{
    console.log("Update Setting", formData)
  }
  return (
    <div className='flex flex-col bg-white p-5 w-full'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Purchase:</h1>
                        <input value={formData.purchase} onChange={(e) => { setFormData({ ...formData, purchase: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Purchase Return:</h1>
                        <input value={formData.purchaseReturn} onChange={(e) => { setFormData({ ...formData, purchaseReturn: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Purchase Requisition:</h1>
                        <input value={formData.purchaseRequisition} onChange={(e) => { setFormData({ ...formData, purchaseRequisition: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Purchase Order:</h1>
                        <input value={formData.purchaseOrder} onChange={(e) => { setFormData({ ...formData, purchaseOrder: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Stock Transfer:</h1>
                        <input value={formData.stockTransfer} onChange={(e) => { setFormData({ ...formData, stockTransfer: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Stock Adjustments:</h1>
                        <input value={formData.stockAdjusments} onChange={(e) => { setFormData({ ...formData, stockAdjusments: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Sell Return:</h1>
                        <input value={formData.sellReturn} onChange={(e) => { setFormData({ ...formData, sellReturn: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Expenses:</h1>
                        <input value={formData.expenses} onChange={(e) => { setFormData({ ...formData, expenses: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Contacts:</h1>
                        <input value={formData.contacts} onChange={(e) => { setFormData({ ...formData, contacts: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Purchase Payment:</h1>
                        <input value={formData.purchasePayments} onChange={(e) => { setFormData({ ...formData, purchasePayments: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Sell Payment:</h1>
                        <input value={formData.sellPayment} onChange={(e) => { setFormData({ ...formData, sellPayment: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Expense Payment:</h1>
                        <input value={formData.expensePayment} onChange={(e) => { setFormData({ ...formData, expensePayment: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Business Location:</h1>
                        <input value={formData.businessLocation} onChange={(e) => { setFormData({ ...formData, businessLocation: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Username:</h1>
                        <input value={formData.username} onChange={(e) => { setFormData({ ...formData, username: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Subscription No.:</h1>
                        <input value={formData.subScriptionNo} onChange={(e) => { setFormData({ ...formData, subScriptionNo: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Draft:</h1>
                        <input value={formData.draft} onChange={(e) => { setFormData({ ...formData, draft: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Sales Order:</h1>
                        <input value={formData.salesOrder} onChange={(e) => { setFormData({ ...formData, salesOrder: e.target.value }) }} type='text'  className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>

                </div>

                <div className='flex items-center justify-center mt-5'>
                  <button onClick={()=>{handleSetting()}} className='bg-red-500 rounded-md text-white px-2 py-2'>Update Settings</button>
                </div>
    </div>
  )
}

export default Prefixes
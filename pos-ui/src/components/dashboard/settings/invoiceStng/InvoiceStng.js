import React, { useState } from 'react'
import InvoiceSchemaTbl from '../../Tables/InvoiceSchemaTbl'
import InvoiceLayout from './InvoiceLayout'

const InvoiceStng = () => {
    const [invoiceSchema, setInvoiceSchema] = useState(true)
    const [invcLout, setInvcLout] = useState(false)
    return (
        <div className='flex flex-col bg-gray-100 p-3 '>
            <div className='flex'>
                <h1 className='text-2xl text-start'>Invoice Settings</h1>
                <h1 className='text-sm text-start mt-3 mx-2'>Manage Your Invoice Settings</h1>

            </div>

            <div className=' flex flex-col bg-white mt-10'>
                <div className='flex'>
                    <div onClick={() => { setInvoiceSchema(true); setInvcLout(false) }} className={`flex mx-2  py-1 ${invoiceSchema ? "border-t-[3px]  border-blue-500" : "border-b-[1px] border-gray-500"} h-[50px] `}>

                        <div className='flex  cursor-pointer items-center justify-center'>
                            <h1 className='text-xl font-bold'>Invoice Schema</h1>
                        </div>

                    </div>
                    <div onClick={() => { setInvoiceSchema(false); setInvcLout(true) }} className={`flex mx-2 py-1  ${invcLout ? "border-t-[3px]  border-blue-500" : "border-b-[1px] border-gray-500"} h-[50px] `}>

                        <div className='flex cursor-pointer  items-center justify-center'>
                            <h1 className='text-lg font-bold'>Invoice Layout</h1>
                        </div>

                    </div>
                    

                </div>
                <div className='flex w-full'>
                    {invoiceSchema && <InvoiceSchemaTbl /> }
                    {invcLout && <InvoiceLayout /> }
                    

                </div>
            </div>
        </div>
    )
}

export default InvoiceStng
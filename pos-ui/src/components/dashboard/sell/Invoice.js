import React, { useRef } from 'react'
import { FaPrint } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';

const Invoice = (props) => {
  const data = [
    {
      name: "Product 1",
      quantity: 4,
      unitPrice: 200,
      discount: 100,
      subtotal: 3000
    },
    {
      name: "Product 1",
      quantity: 4,
      unitPrice: 200,
      discount: 100,
      subtotal: 3000
    },
    {
      name: "Product 1",
      quantity: 4,
      unitPrice: 200,
      discount: 100,
      subtotal: 3000
    },
    {
      name: "Product 1",
      quantity: 4,
      unitPrice: 200,
      discount: 100,
      subtotal: 3000
    },
  ]
  const printRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Invoice",
    copyStyles: true,
    // pageStyle: "@page { size: 8.3in 11.7in }"
  });
  return (
    <div  className='py-5'>
     <div ref={printRef} className='flex flex-col  min-w-[595px] px-2 py-2'>
        <h1 className='text-center text-2xl font-bold'>Business Name</h1>
        <h1 className='text-center text-sm font-bold'>Location</h1>
        <h1 className='text-center text-sm font-bold'>Mobile</h1>
        <h1 className='text-center text-sm font-bold'>Invoice</h1>
        <div className='flex justify-between mt-4'>
          <div className='flex flex-col'>
            <div className='flex'>
              <h1 className='font-bold'>Invoice No:</h1>
              <h1 className=''>{props.number}</h1>
            </div>
            <div className='flex'>
              <h1 className='font-bold'>Customer:</h1>
              <h1 className=''>Customer</h1>
            </div>
            <div className='flex'>
              <h1 className='font-bold'>Mobile:</h1>
              <h1 className=''>Mobile</h1>
            </div>
          </div>
          <div className='flex'>
            <div className='flex'>
              <h1 className='font-bold'>Date:</h1>
              <h1 className=''>Date</h1>
              <h1 className=''>Time</h1>

            </div>
          </div>
        </div>
        <div className='flex overflow-x-scroll  mt-5 ' >
          <table className="table-auto  mb-2 w-full  px-5 ">
            <thead>
              <tr className='h-[50px]'>
                <th className=" py-2 title-font text-start  tracking-wider font-bold  text-sm ">Product</th>
                <th className=" py-2 title-font text-start  tracking-wider font-bold  text-sm ">Quantity</th>
                <th className=" py-2 title-font text-start  tracking-wider font-bold  text-sm ">Unit Price</th>
                <th className=" py-2 title-font text-start  tracking-wider font-bold  text-sm ">Discount </th>
                <th className=" py-2 title-font text-start  tracking-wider font-bold  text-sm ">Subtotal</th>

              </tr>
            </thead>
            <tbody >
              {data.map((value, index) => {
                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""} `}>
                  <td>{value.name}</td>
                  <td>{value.quantity}</td>
                  <td>{value.unitPrice}</td>
                  <td>{value.discount}</td>
                  <td>{value.subtotal}</td>
                </tr>
              })}


            </tbody>
            <tfoot>
              <tr></tr>
            </tfoot>
          </table>
        </div>

        <div className='bg-black h-[1px] w-full'></div>
        <div className='flex flex-col items-end justify-end'>
          <div className='flex'>
            <h1 className='font-bold'>Subtotal:</h1>
            <h1 className=''>subtotal</h1>
          </div>
          <div className='flex'>
            <h1 className='font-bold'>Total:</h1>
            <h1 className=''>Total</h1>
          </div>
        </div>


      </div>
      <div onClick={handlePrint} className='flex w-[100px] justify-center items-center mt-5 cursor-pointer rounded-md text-white bg-green-400'>
        <FaPrint size={15} style={{ color: "white" }} />
        <h1 className='mx-2'>Print</h1>
      </div>
    </div>
  )
}

export default Invoice
import React, { useRef, useState } from 'react'
import { FaCalendar, FaClock, FaEdit, FaInfoCircle, FaMoneyBillAlt, FaPlusCircle } from 'react-icons/fa'
import timeZone from '../../../../timezones'
import currencyData from '../../../../currency'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { BsCalculatorFill, BsFillCalendarFill } from 'react-icons/bs'
const Business = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    defaultPercentage: "",
    stck_ac_mthd: "",
    txsEditDays: "",
    dateFormat: "",
    timeFormat: "",
    currencyPrecision: "",
    quantityPrecision: ""
  })
  const [isserror, setIsserror] = useState(false)

  const handleSetting = () => {
    if (formData.businessName.length === 0 ||
      formData.defaultPercentage.length === 0 ||
      formData.stck_ac_mthd.length === 0 ||
      formData.txsEditDays.length === 0 ||
      formData.dateFormat.length === 0 ||
      formData.timeFormat.length === 0 ||
      formData.currencyPrecision.length === 0 ||
      formData.quantityPrecision.length === 0
    ) {
      setIsserror(true)
    } else {

      console.log("Update Setting", formData)
    }
  }
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  console.log(timeZone)
  const inpuRef = useRef()
  const [info3, setInfo3] = useState(false)
  const [info, setInfo] = useState(false)
  const [info1, setInfo1] = useState(false)
  const [info2, setInfo2] = useState(false)
  const [info4, setInfo4] = useState(false)
  const [info5, setInfo5] = useState(false)
  return (
    <div className='flex flex-col bg-white p-5 '>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='flex flex-col '>
          <h1 className='flex text-start font-bold'>Business Name:*
            <h2 className='text-red-400'>{isserror && formData.businessName.length === 0 ? "Required field" : ""}</h2>
          </h1>
          <div className='flex'>
            <input value={formData.businessName} onChange={(e) => { setFormData({ ...formData, businessName: e.target.value }) }} type='text' placeholder='GST / VAT / Other' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex flex-col '>
          <h1 className='flex text-start font-bold'>Start Date:</h1>
          <div className='flex'>
            <FaCalendar size={15} className='w-8 h-9 border-[1px] px-2 py-1 border-gray-400' />
            <input value={formData.tax1Name} onChange={(e) => { setFormData({ ...formData, tax1Name: e.target.value }) }} type='date' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex flex-col relative'>
          <h1 className='flex text-start font-bold'>Default Profit Percentage:*
            <h2 className='text-red-400'>{isserror && formData.defaultPercentage.length === 0 ? "Required field" : ""}</h2>

            <FaInfoCircle onMouseOver={() => { setInfo3(true) }} onMouseLeave={() => { setInfo3(false) }} size={15} style={{ color: "skyblue" }} className='mx-2  cursor-help' />
            {info3 &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start  text-gray-600'>Default Profit Margin of a product</p>
                <p className='text-start text-xs mt-1 text-gray-600'>Used to calculate selling price based on purchase price entered </p>
                <p className='text-start text-xs mt-1 text-gray-600'>You can modify this value for individuals products while adding.</p>

              </div>
            }
          </h1>
          <div className='flex'>
            <FaPlusCircle size={15} className='w-8 h-9 border-[1px] px-2 py-1 border-gray-400' />
            <input value={formData.defaultPercentage} onChange={(e) => { setFormData({ ...formData, defaultPercentage: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>

        </div>
        <div className='flex flex-col '>
          <h1 className='flex text-start font-bold'>Currency:</h1>

          <div className='flex'>
            < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
            <div className='flex'>
              <select className='w-full border-[1px] p-1 bg-white  border-gray-400 focus:outline-none' value={formData.currency} onChange={(e) => setFormData({ ...formData, currency: e.target.value })}>
                <option value={""}>Select Currency</option>
                {currencyData.map((val, index) => {
                  return <option key={index} value={val}>{val}</option>

                })}
              </select>
            </div>

          </div>

        </div>
        <div className='flex flex-col '>
          <h1 className='flex text-start font-bold'>Currency Symbol Placement</h1>
          <div className='flex'>
            <select value={formData.symbolPlacement} onChange={(e) => { setFormData({ ...formData, symbolPlacement: e.target.value }) }} type='text' placeholder='GST / VAT / Other' className='w-full border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
              <option value={"Befor Amount"} >Befor Amount</option>
              <option value={"After Amount"}>After Amount</option>

            </select>
          </div>
        </div>
        <div className='flex flex-col '>
          <h1 className='flex text-start font-bold'>Time Zone:</h1>

          <div className='flex'>
            < FaClock size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
            <div className='flex'>
              <select className='w-full border-[1px] p-1 bg-white  border-gray-400 focus:outline-none' value={formData.timeZone} onChange={(e) => setFormData({ ...formData, timeZone: e.target.value })}>
                <option value={""}>Select Time Zone</option>
                {timeZone.map((val, index) => {
                  return <option key={index} value={val}>{val}</option>

                })}
              </select>
            </div>

          </div>

        </div>
        <div className=' flex flex-col '>
          <h2 className='text-start font-bold '> Upload Logo:</h2>
          <div className='flex'>
            {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
            <input type='text' className='px-3  border-[1px] border-gray-700  focus:outline-none w-[60%]' />
            <input className='px-3   focus:outline-none w-[60%] hidden' type='file' ref={inpuRef} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
            <div onClick={() => { inpuRef.current?.click(); }} className='flex cursor-pointersu bg-blue-600 text-white  w-[40%] items-center justify-center'>
              <AiTwotoneFolderOpen size={32} />
              Browse
            </div>
          </div>
          <p className='text-start  flex '>Previous logo (if exists) will be replaced</p>

        </div>
        <div className=' flex flex-col relative'>
          <h2 className='flex text-start font-bold'> Financila Year Start Month
            <FaInfoCircle onMouseOver={() => { setInfo1(true) }} onMouseLeave={() => { setInfo1(false) }} size={15} style={{ color: "skyblue" }} className='mx-2  cursor-help' />
            {info1 &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start  text-gray-600'>Starting month of the Financial Year for your business</p>

              </div>
            }
          </h2>
          <div className='flex'>
            <BsFillCalendarFill size={32} className="border-[1px] p-1 bg-white  border-gray-400" />
            <select value={formData.financial_ysm} onChange={(e) => setFormData({ ...formData, financial_ysm: e.target.value })} className='w-full border-[1px] p-1 bg-white  border-gray-400 focus:outline-none'>
              {months.map((val, index) => {
                return <option key={index} value={val}>{val}</option>

              })}
            </select>
          </div>
        </div>
        <div className=' flex flex-col '>
          <h2 className='flex text-start font-bold'> Stock Accounting Method:*
            <h2 className='text-red-400'>{isserror && formData.stck_ac_mthd.length === 0 ? "Required field" : ""}</h2>

            <FaInfoCircle onMouseOver={() => { setInfo2(true) }} onMouseLeave={() => { setInfo2(false) }} size={15} style={{ color: "skyblue" }} className='mx-2  cursor-help' />
            {info2 &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start  text-gray-600'>Accounting Method</p>

              </div>
            }
          </h2>
          <div className='flex'>
            <BsCalculatorFill size={32} className="border-[1px] p-1 h-9 bg-white  border-gray-400" />
            <select value={formData.stck_ac_mthd} onChange={(e) => setFormData({ ...formData, stck_ac_mthd: e.target.value })} className='w-full border-[1px] p-1 bg-white  border-gray-400 focus:outline-none'>
              <option value={""}>Select Method</option>
              <option value={"FIFO"}>FIFO</option>

              <option value={"LIFO"}>LIFO</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col relative'>
          <h1 className='flex text-start font-bold'>Transaction Edit Days:*
            <h2 className='text-red-400'>{isserror && formData.txsEditDays.length === 0 ? "Required field" : ""}</h2>

            <FaInfoCircle onMouseOver={() => { setInfo(true) }} onMouseLeave={() => { setInfo(false) }} size={15} style={{ color: "skyblue" }} className='mx-2  cursor-help' />
            {info &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start  text-gray-600'>Number of days from Transaction Date till which a transaction can be edited</p>

              </div>
            }
          </h1>
          <div className='flex'>
            < FaEdit size={15} className='w-8 h-9 p-2 border-[1px] border-gray-600' />
            <input value={formData.txsEditDays} onChange={(e) => { setFormData({ ...formData, txsEditDays: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className=' flex flex-col '>
          <h2 className='flex text-start font-bold'> Date Format:*
            <h2 className='text-red-400'>{isserror && formData.dateFormat.length === 0 ? "Required field" : ""}</h2>

          </h2>
          <div className='flex'>
            <FaCalendar size={32} className="border-[1px] p-1 bg-white  border-gray-400" />
            <select value={formData.dateFormat} onChange={(e) => setFormData({ ...formData, dateFormat: e.target.value })} className='w-full border-[1px] p-1 bg-white  border-gray-400 focus:outline-none'>
              <option value={"mm/dd/yyyy"} selected={"mm/dd/yyyy"}>mm/dd/yyyy</option>
              <option value={"dd/mm/yyyy"}>dd/mm/yyyy</option>
              <option value={"mm-dd-yyyy"}>mm-dd-yyyy</option>
              <option value={"dd-mm-yyyy"}>dd-mm-yyyy</option>

            </select>
          </div>
        </div>
        <div className=' flex flex-col '>
          <h2 className='flex text-start font-bold'> Time Format:*
            <h2 className='text-red-400'>{isserror && formData.timeFormat.length === 0 ? "Required field" : ""}</h2>

          </h2>
          <div className='flex'>
            <FaClock size={32} className="border-[1px] p-1 bg-white  border-gray-400" />
            <select value={formData.timeFormat} onChange={(e) => setFormData({ ...formData, timeFormat: e.target.value })} className='w-full border-[1px] p-1 bg-white  border-gray-400 focus:outline-none'>
              <option value={"12 Hour"} selected={"12 Hour"}>12 Hour</option>
              <option value={"24 Hour"}>24 Hour</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col relative'>
          <h1 className='flex text-start font-bold'>Currency precision:*
            <h2 className='text-red-400'>{isserror && formData.currencyPrecision.length === 0 ? "Required field" : ""}</h2>

            <FaInfoCircle onMouseOver={() => { setInfo4(true) }} onMouseLeave={() => { setInfo4(false) }} size={15} style={{ color: "skyblue" }} className='mx-2  cursor-help' />
            {info4 &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start  text-gray-600'>Number of digits after decimal point for currency value. Example: 0.00 for value 2, 0.000 for value 3, 0.0000 for value 4</p>

              </div>
            }
          </h1>
          <div className='flex'>
            <select value={formData.currencyPrecision} onChange={(e) => { setFormData({ ...formData, currencyPrecision: e.target.value }) }} type='text' className='w-full border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>

            </select>
          </div>
        </div>
        <div className='flex flex-col relative'>
          <h1 className='flex text-start font-bold'>Quantity precision:*
            <h2 className='text-red-400'>{isserror && formData.quantityPrecision.length === 0 ? "Required field" : ""}</h2>

            <FaInfoCircle onMouseOver={() => { setInfo5(true) }} onMouseLeave={() => { setInfo5(false) }} size={15} style={{ color: "skyblue" }} className='mx-2  cursor-help' />
            {info5 &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start  text-gray-600'>Number of digits after decimal point for quantity value. Example: 0.00 for value 2, 0.000 for value 3, 0.0000 for value 4</p>

              </div>
            }
          </h1>
          <div className='flex'>
            <select value={formData.quantityPrecision} onChange={(e) => { setFormData({ ...formData, quantityPrecision: e.target.value }) }} type='text' className='w-full border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-5'>
        <button onClick={() => { handleSetting() }} className='bg-red-500 rounded-md text-white px-2 py-2'>Update Settings</button>
      </div>
    </div>
  )
}

export default Business
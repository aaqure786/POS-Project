import React, { useState } from 'react'
import { FaFileAlt, FaInfo, FaInfoCircle, FaPrint, FaShareAlt } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const Settings = () => {
  const parms = useParams()
  const id = parms.id
  // console.log(id)
  const [col1, setCol1] = useState(false)
  const [col2, setCol2] = useState(false)
  const [col3, setCol3] = useState(false)
  const [col4, setCol4] = useState(false)
  const [formData, setFormData] = useState({
    printerType: "",
    invoiceLayout: "",
    invoiceScheme: "",
    printer: ""

  })
  const [isserror, setIsserror] = useState(false);
  const [isserror1, setIsserror1] = useState(false);

  const handleClick = () => {
    if (
      formData.printerType.length === 0 ||
      formData.invoiceLayout.length === 0 ||
      formData.invoiceScheme.length === 0
    ) {
      setIsserror(true);
    } else if (formData.printerType === "1" && formData.printer.length === 0) {
      setIsserror1(true)
    } else console.log("Handle Update", formData);

  };
  return (
    <div className='flex flex-col min-h-screen w-full px-5 py-2 bg-gray-100'>
      <h1 className='text-3xl font-semibold mt-3 text-start'>Business Location Settings - Eziline Software House (Pvt.) Ltd</h1>
      <div className='flex flex-col bg-white p-5 '>
        <div className='flex'>
          <h1 className='text-xl font-semibold  text-start'>Reciept Settings</h1>
          <h1 className='text-sm font-semibold mx-2 mt-2 text-gray-500 text-start'>All reciept related settings for this location</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 w-full p-5'>
          <div className='flex flex-col mt-5'>
            <h2 className="text-start text-gray-500 flex relative">
              Auto Print invoice after finalizing:
              <FaInfoCircle onMouseOver={() => { setCol1(true) }} onMouseLeave={() => { setCol1(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
              {col1 &&
                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                  <p className='text-start mt-2 text-gray-800'>Enable or Disable auto printing on finalizing.</p>

                </div>
              }

            </h2>
            <div className='flex'>
              <FaFileAlt size={15} className="p-2 w-8 h-9 border-[1px] border-gray-600" />
              <select type="text" placeholder='Alternate Contact Number'
                value={formData.isAutoPrint}
                onChange={(e) => { setFormData({ ...formData, isAutoPrint: e.target.value }) }}
                className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
                <option value={""}>Please Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>

              </select>
            </div>

          </div>
          <div className='flex flex-col mt-5'>
            <h2 className="text-start text-gray-500 flex relative">
              Reciept Printer Type:*
              <h2 className="text-red-400">
                {isserror && formData.printerType.length === 0
                  ? "Required field"
                  : ""}
              </h2>
              <FaInfoCircle onMouseOver={() => { setCol2(true) }} onMouseLeave={() => { setCol2(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
              {col2 &&
                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                  <p className='text-start mt-2 text-gray-800'>
                    Broser Based Printing: Show Browser Print Dialog Box with invoice Preview
                  </p>
                  <p className='text-start mt-5 text-gray-800'>
                    Used Configured Reciept Printer. Select a Configured Reciept / Thermal Printer for Printing
                  </p>

                </div>
              }
            </h2>
            <div className='flex'>
              <FaPrint size={15} className="p-2 w-8 h-9 border-[1px] border-gray-600" />
            <select type="text"
              value={formData.printerType}
              onChange={(e) => { setFormData({ ...formData, printerType: e.target.value }) }}
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
              <option value={""}>Please Select</option>
              <option value={"0"}>Browser Base Printing</option>
              <option value={"1"}>Used Configured Reciept Printer</option>

            </select>
            </div>
          </div>
          {formData.printerType === "1" &&
            <div className='flex flex-col mt-5'>
              <h2 className="text-start text-gray-500 flex relative">
                Reciept Printer:*
                <h2 className="text-red-400">
                  {isserror1 && formData.printer.length === 0
                    ? "Required field"
                    : ""}
                </h2>

              </h2>
              <div className='flex'>
              <FaShareAlt size={15} className="p-2 w-8 h-9 border-[1px] border-gray-600" />
              <select type="text"
                value={formData.printer}
                onChange={(e) => { setFormData({ ...formData, printer: e.target.value }) }}
                className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
                <option value={""}>Please Select</option>


              </select>
              </div>
            </div>
          }
          <div className='flex flex-col mt-5'>
            <h2 className="text-start text-gray-500 flex relative">
              Invoice Layout:*
              <h2 className="text-red-400">
                {isserror && formData.invoiceLayout.length === 0
                  ? "Required field"
                  : ""}
              </h2>
              <FaInfoCircle onMouseOver={() => { setCol3(true) }} onMouseLeave={() => { setCol3(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
              {col3 &&
                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                  <p className='text-start mt-2 text-gray-800'>
                    Invoice Layout to be used for this business location
                  </p>

                  <p className='text-start text-xs mt-2 text-gray-500'>
                    You can add  new <b>Invoice Layout</b> in <b>Invoice Settings</b>
                  </p>

                </div>
              }
            </h2>
            <div className='flex'>
              <FaInfo size={15} className="p-2 w-8 h-9 border-[1px] border-gray-600" />
            <select type="text"
              value={formData.invoiceLayout}
              onChange={(e) => { setFormData({ ...formData, invoiceLayout: e.target.value }) }}
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
              <option value={""}>Please Select</option>
              <option value={"Default"}>Default</option>
              <option value={"Test Layout"}>Test Layout</option>


            </select>
            </div>
          </div>
          <div className='flex flex-col mt-5'>
            <h2 className="text-start text-gray-500 flex relative">
              Invoice Scheme:*
              <h2 className="text-red-400">
                {isserror && formData.invoiceScheme.length === 0
                  ? "Required field"
                  : ""}
              </h2>
              <FaInfoCircle onMouseOver={() => { setCol4(true) }} onMouseLeave={() => { setCol4(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
              {col4 &&
                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                  <p className='text-start mt-2 text-gray-800'>
                    Invoice Scheme means invoice numbering format. Select the scheme to be used for this business location.
                  </p>

                </div>
              }
            </h2>
            <div className='flex'>
              <FaInfo size={15} className="p-2 w-8 h-9 border-[1px] border-gray-600" />
            <select type="text"
              value={formData.invoiceScheme}
              onChange={(e) => { setFormData({ ...formData, invoiceScheme: e.target.value }) }}
              className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
              <option value={""}>Please Select</option>
              <option value={"Default"}>default</option>


            </select>
            </div>
          </div>
        </div>
        <div className='flex items-end py-5 justify-end'>
          <button
            onClick={() => { handleClick() }}
            className="bg-green-500 w-[100px] px-2 py-2 items-center justify-center flex"
          >
            Update
          </button>
        </div>

      </div>

    </div>
  )
}

export default Settings
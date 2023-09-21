import React, { useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { FaInfoCircle, FaPlusCircle } from 'react-icons/fa';
import JoditEditor from 'jodit-react';
import { AiTwotoneFolderOpen } from 'react-icons/ai';
import { useParams } from 'react-router-dom';


const AddorEditProduct = () => {
  const editor = useRef(null)
  const params = useParams()
  const id = params.id
  

  const dummyData = [
    {
      id: 1,
      Username: "username",
      Name: "User",
      Role: "Admin",
      Email: "username@gmail.com"
    },
    {
      id: 2,
      Username: "username1",
      Name: "User1",
      Role: "Admin",
      Email: "username@gmail.com"
    },
    {
      id: 3,
      Username: "username2",
      Name: "User2",
      Role: "Admin",
      Email: "username2@gmail.com"
    },
    {
      id: 4,
      Username: "username3",
      Name: "User3",
      Role: "Admin",
      Email: "username3@gmail.com"
    },
    {
      id: 5,
      Username: "username4",
      Name: "User4",
      Role: "Admin",
      Email: "username4@gmail.com"
    },
    {
      id: 6,
      Username: "username5",
      Name: "User5",
      Role: "Admin",
      Email: "username5@gmail.com"
    },
    {
      id: 7,
      Username: "username6",
      Name: "User6",
      Role: "Admin",
      Email: "username6@gmail.com"
    }
  ]
  // const [description, setDescription] = useState('')

  const [skuInfor, setSkuInfor] = useState(false)
  const [skuInfor1, setSkuInfor1] = useState(false)
  const [infor, setInfor] = useState(false)
  const [open, setOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [productImei, setProductImei] = useState(false)
  const [isSelling, setIsSelling] = useState(false)
  const inpuRef = useRef()
  const inpuRef1 = useRef()
  const [isWoocommerce, setIsWoocommerce] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [inputValue1, setInputValue1] = useState('')
  const [formData, setFormData] = useState({
    productName: "",
    sku: "",
    barcodeType: "",
    unit: "",
    businessLocation: "",
    manageStock: false,
    alertQuantity: 0,
    productDescription: "",
    productImage: "",
    productBroucher: "",
    imeiSerialNumber: false,
    notforSelling: false,
    weight: 0,
    servieStaffTime: "",
    woocommerceSync: false,
    productType: ""
  })
 
  const [isserror, setIsserror] = useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    if (formData.productName.length === 0 ||
      formData.barcodeType.length === 0 ||
      formData.unit.length === 0 ||
      formData.productType.length === 0
    ) {
      setIsserror(true)
      console.log(isserror)
    } else if (id) {
      console.log("Handle Update", formData)
    } else {
      console.log("Handle save ", formData)
    }
  }
  return (
    <div className='w-full flex flex-col bg-gray-100 p-5 min-h-screen'>
      <h1 className='text-xl  text-start mb-4'>Add new Product</h1>
      <div className='w-full p-5 border-t-[3px] bg-white  border-blue-600 pb-[100px] rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>
              Product Name:*
              <span className='text-red-400'>{isserror && formData.productName.length === 0 ? "Required field" : ""}</span>

            </h1>
            <input type='text' value={formData.productName} onChange={(e) => { setFormData({ ...formData, productName: e.target.value }) }} placeholder='Product Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col relative'>
            <div className='flex '>
              <h1 className='text-start font-bold'>SKU:</h1>
              <FaInfoCircle onMouseOver={() => { setSkuInfor(true) }} onMouseLeave={() => { setSkuInfor(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
              {skuInfor &&
                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                  <p className='text-start'>Unique Product ID or Stock Keepin Unit</p>
                  <p className='text-start mt-2'>Keep it blank to automatically generate sku</p>
                  <p className='text-start mt-2 text-gray-600'>you can modify sku prefix in Business Setting</p>

                </div>
              }
            </div>
            <input type='text' value={formData.sku} onChange={(e) => { setFormData({ ...formData, sku: e.target.value }) }} placeholder='SKU' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col '>

            <h1 className='flex text-start font-bold'>
              Barcode Type:*
              <span className='text-red-400'>{isserror && formData.barcodeType.length === 0 ? "Required field" : ""}</span>

            </h1>
            <div className='flex flex-col relative'>
              <div className='flex '>
                <input
                  onClick={() => { setIsOpen1(!isOpen1); }}
                  className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  border-[1px] border-gray-600'
                  value={formData.barcodeType}
                  onChange={(e) => { setFormData({ ...formData, barcodeType: e.target.value }) }}
                  placeholder='Select Value'
                />
                <BiChevronDown size={20} className={`${isOpen1 && "rotate-180"} absolute top-1 right-3`} />


              </div>
              {isOpen1 &&
                <ul

                  className={`bg-white  w-[245px] mx-[30px] border-[1px] absolute top-6 z-10 right-0 border-gray-600 overflow-y-auto ${isOpen1 ? "max-h-60" : "max-h-0"} `}
                >
                  <div className="flex items-center px-2 sticky top-0 bg-white">
                    <input
                      type="text"
                      value={inputValue1}
                      onChange={(e) => setInputValue1(e.target.value.toLowerCase())}
                      className="placeholder:text-gray-700 p-1 outline-none border-[1px] border-gray-500"
                    />
                  </div>
                  {dummyData?.map((data) => (
                    <li
                      key={data?.Name}
                      className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                        ${data?.Name?.toLowerCase() === formData.barcodeType?.toLowerCase() &&
                        "bg-sky-600 text-white"
                        }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue1)
                          ? "block"
                          : "hidden"
                        }`}
                      onClick={() => {
                        if (data?.Name?.toLowerCase() !== formData.barcodeType.toLowerCase()) {

                          setFormData({ ...formData, barcodeType: data?.Name })
                          setIsOpen1(false);
                          setInputValue("");
                        }
                      }}
                    >
                      {data?.Name}
                    </li>
                  ))}
                </ul>
              }
            </div>

          </div>
          <div className='flex flex-col '>
            <h1 className='flex text-start font-bold'>
              Unit:*
              <span className='text-red-400'>{isserror && formData.unit.length === 0 ? "Required field" : ""}</span>

            </h1>
            <div className='flex flex-col relative'>
              <div className='flex '>
                <input
                  onClick={() => setOpen(!open)}
                  className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  border-[1px] border-gray-600'
                  value={formData.unit}
                  onChange={(e) => { setFormData({ ...formData, unit: e.target.value }) }}
                  placeholder='Select Value'
                />
                <BiChevronDown size={20} className={`${open && "rotate-180"} absolute top-1 right-7`} />

                <FaPlusCircle size={20} style={{ color: "skyblue" }} className='w-8 h-8 p-1  border-[1px] border-gray-600' />

              </div>
              {open &&
                <ul

                  className={`bg-white  w-[250px] mx-[30px] border-[1px] absolute z-10 top-8 right-0 border-gray-600 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
                >
                  <div className="flex items-center px-2 sticky top-0 bg-white">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                      className="placeholder:text-gray-700 p-1 outline-none border-[1px] border-gray-500"
                    />
                  </div>
                  {dummyData?.map((data) => (
                    <li
                      key={data?.Name}
                      className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                        ${data?.Name?.toLowerCase() === formData.unit?.toLowerCase() &&
                        "bg-sky-600 text-white"
                        }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue)
                          ? "block"
                          : "hidden"
                        }`}
                      onClick={() => {
                        if (data?.Name?.toLowerCase() !== formData.unit.toLowerCase()) {
                          setFormData({ ...formData, unit: data?.Name })
                          setOpen(false);
                          setInputValue("");
                        }
                      }}
                    >
                      {data?.Name}
                    </li>
                  ))}
                </ul>
              }
            </div>

          </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>


          <div className='flex flex-col relative mt-7'>
            <div className='flex'>
              <input value={formData.manageStock} onChange={(e) => { setFormData({ ...formData, manageStock: e.target.value }) }} type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
              <div className='flex mx-2'>
                <h1 className='text-start font-bold'>Manage Stock?</h1>
                <FaInfoCircle onMouseOver={() => { setSkuInfor1(true) }} onMouseLeave={() => { setSkuInfor1(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                {skuInfor1 &&
                  <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                    <p className='text-start'>Enable or disable stock management for product</p>
                    <p className='text-start mt-2 text-gray-600'>Stock management should be disable mostly for services. Example Hair Cutting, Repairing etc</p>

                  </div>
                }
              </div>

            </div>
            <h1 className='text-start text-gray-500'>Enable Stock management at product level</h1>

          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Alert Quantity:</h1>
            <input value={formData.alertQuantity} onChange={(e) => { setFormData({ ...formData, alertQuantity: e.target.value }) }} type='text' placeholder='Alert Quantity' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col relative'>
            <div className='flex '>
              <h1 className='text-start font-bold'>Business Location:</h1>
              <FaInfoCircle onMouseOver={() => { setInfor(true) }} onMouseLeave={() => { setInfor(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
              {infor &&
                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                  <p className='text-start'>Location Where Product will be available</p>

                </div>
              }
            </div>
            <input value={formData.businessLocation} onChange={(e) => { setFormData({ ...formData, businessLocation: e.target.value }) }} type='text' placeholder='Business Location' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Weight:</h1>
            <input value={formData.weight} onChange={(e) => { setFormData({ ...formData, weight: e.target.value }) }} type='number' placeholder='Weight' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex w-full mt-3'>

          <div className='flex flex-col w-[67%]'>
            <h1 className='flex text-start font-bold'>Description:</h1>
            <JoditEditor
              className='w-full h-[300px] border-[1px] border-gray-500'
              ref={editor}
              value={formData.productDescription} onChange={(newContent) => { setFormData({ ...formData, productDescription: newContent }) }}
            />
          </div>
          <div className=' flex flex-col w-[30%] mx-[1.5%]'>
            <h2 className='text-start font-bold '> Product Image:</h2>
            <div className='flex'>
              {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
              <input value={formData.productImage}  readOnly type='text' className='px-3  border-[1px] border-gray-700  focus:outline-none w-[60%]' />
              <input value={formData.productImage} onChange={(e) => { setFormData({ ...formData, productImage: e.target.value }) }} className='px-3   focus:outline-none w-[60%] hidden' type='file' ref={inpuRef} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
              <div onClick={() => { inpuRef.current?.click(); }} className='flex cursor-pointersu bg-blue-600 text-white w-[40%] items-center justify-center'>
                <AiTwotoneFolderOpen size={32} />
                Browse
              </div>
            </div>
            <p className='text-start  flex '>Max File size: 5MB:
              <br />
              Aspec Ration should be 1:1
            </p>

          </div>


        </div>

        <div className=' flex flex-col mt-5 w-[30%] mx-[1.5%]'>
          <h2 className='text-start font-bold '> Product Broucher:</h2>
          <div className='flex'>
            {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
            <input value={formData.productBroucher} readOnly type='text' className='px-3  border-[1px] border-gray-700  focus:outline-none w-[60%]' />
            <input value={formData.productBroucher} onChange={(e) => { setFormData({ ...formData, productBroucher: e.target.value }) }} className='px-3   focus:outline-none w-[60%] hidden' type='file' ref={inpuRef1} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
            <div onClick={() => { inpuRef1.current?.click(); }} className='flex cursor-pointersu bg-blue-600 text-white w-[40%] items-center justify-center'>
              <AiTwotoneFolderOpen size={32} />
              Browse
            </div>
          </div>
          <p className='text-start  flex '>Max File size: 5MB:
            <br />
            Allowed File: .pdf, .csv, .zip, .doc, .docx, .jpeg, .jpg, .png
          </p>

        </div>





      </div>
      <div className='w-full p-5 border-t-[3px] bg-white  mt-5 border-blue-600 pb-[100px] rounded-xl'>

        <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-4'>


          <div className='flex flex-col relative mt-7'>
            <div className='flex'>
              <input value={formData.imeiSerialNumber} onChange={(e) => { setFormData({ ...formData, imeiSerialNumber: e.target.value }) }} type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
              <div className='flex mx-2'>
                <h1 className='text-start text-xs font-semibold'>Enable Product description, IMEI or Serial Number</h1>
              </div>

            </div>
            <FaInfoCircle onMouseOver={() => { setProductImei(true) }} onMouseLeave={() => { setProductImei(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
            {productImei &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-12 left-4 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start'>Enable or disable stock management for product</p>
                <p className='text-start mt-2 text-gray-600'>Stock management should be disable mostly for services. Example Hair Cutting, Repairing etc</p>

              </div>
            }

          </div>
          <div className='flex flex-col relative mt-7'>
            <div className='flex'>
              <input value={formData.notforSelling} onChange={(e) => { setFormData({ ...formData, notforSelling: e.target.value }) }} type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
              <div className='flex mx-2'>
                <h1 className='text-start font-bold'>Not for Selling</h1>
                <FaInfoCircle onMouseOver={() => { setIsSelling(true) }} onMouseLeave={() => { setIsSelling(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                {isSelling &&
                  <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                    <p className='text-start mt-2 text-gray-600'>If Checked Product will not be displayed in sales screen for selling purposes.</p>

                  </div>
                }
              </div>

            </div>

          </div>


        </div>
        <div className='flex flex-col mt-5 w-1/3'>
          <div className='flex flex-col mt-2'>
            <h1 className='flex text-start font-bold'>Weight:</h1>
            <input value={formData.weight} onChange={(e) => { setFormData({ ...formData, weight: e.target.value }) }} type='text' placeholder='Weight' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col mt-2'>
            <h1 className='flex text-start font-bold'>Service staff timer/Preparation time (In minutes)::</h1>
            <input value={formData.servieStaffTime} onChange={(e) => { setFormData({ ...formData, servieStaffTime: e.target.value }) }} type='text' placeholder='Service staff timer/Preparation time (In minutes):' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex'>
          <input value={formData.woocommerceSync} onChange={(e) => { setFormData({ ...formData, woocommerceSync: e.target.value }) }} type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          <div className='flex mx-2'>
            <h1 className='text-start font-bold'>Disable Woocommerce Sync</h1>
            <FaInfoCircle onMouseOver={() => { setIsWoocommerce(true) }} onMouseLeave={() => { setIsWoocommerce(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
            {isWoocommerce &&
              <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                <p className='text-start mt-2 text-gray-600'>If Checked Product will not be displayed in sales screen for selling purposes.</p>

              </div>
            }
          </div>

        </div>

      </div>
      <div className='w-full p-5 border-t-[3px] bg-white  mt-5 border-blue-600 pb-[100px] rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>
              Product Type:*
              <span className='text-red-400'>{isserror && formData.productType.length === 0 ? "Required field" : ""}</span>

            </h1>
            <select value={formData.productType} onChange={(e) => { setFormData({ ...formData, productType: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none'>
              <option value={"single"}>Single</option>
              <option value={"variable"}>Variable</option>
              <option value={"combo"}>Combo</option>

            </select>
          </div>


        </div>

      </div>
      <div className='flex items-end justify-end mt-5'>
        <button onClick={handleClick} className='bg-green-500 px-2 py-2 items-center justify-center flex'>Save</button>
      </div>
    </div>
  )
}

export default AddorEditProduct
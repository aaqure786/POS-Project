import React, { useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { FaInfoCircle, FaPlusCircle } from 'react-icons/fa';
import JoditEditor from 'jodit-react';


const AddorEditProduct = () => {
  const editor = useRef(null)

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
  const [description, setDescription] = useState('')

  const [skuInfor, setSkuInfor] = useState(false)
  const [skuInfor1, setSkuInfor1] = useState(false)
  const [infor, setInfor] = useState(false)
  const [appTax, setAppTax] = useState(false)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')
  const [isOpen1, setIsOpen1] = useState(false)
  const [selected1, setSelected1] = useState("")
  const [selected2, setSelected2] = useState("")
  const [productImei, setProductImei] = useState(false)
  const [isSelling, setIsSelling] = useState(false)
  const [isWoocommerce, setIsWoocommerce] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')


  return (
    <div className='w-full flex flex-col bg-white p-5 min-h-screen'>
      <h1 className='text-xl  text-start mb-4'>Add new Product</h1>
      <div className='w-full border-t-[3px]  border-blue-600 pb-[100px] rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Product Name:*</h1>
            <input type='text' placeholder='Product Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col relative'>
            <div className='flex '>
              <h1 className='text-start font-bold'>SKU:*</h1>
              <FaInfoCircle onMouseOver={() => { setSkuInfor(true) }} onMouseLeave={() => { setSkuInfor(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
              {skuInfor &&
                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                  <p className='text-start'>Unique Product ID or Stock Keepin Unit</p>
                  <p className='text-start mt-2'>Keep it blank to automatically generate sku</p>
                  <p className='text-start mt-2 text-gray-600'>you can modify sku prefix in Business Setting</p>

                </div>
              }
            </div>
            <input type='text' placeholder='SKU' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col '>

            <h1 className='flex text-start font-bold'>Barcode Type:*</h1>
            <div className='flex flex-col relative'>
              <div className='flex '>
                <input
                  onClick={() => { setIsOpen1(!isOpen1); }}
                  className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  border-[1px] border-gray-600'
                  value={selected1}
                  placeholder='Select Value'
                />
                <BiChevronDown size={20} className={`${isOpen1 && "rotate-180"} absolute top-1 right-3`} />


              </div>
              {isOpen1 &&
                <ul

                  className={`bg-white  w-[245px] mx-[30px] border-[1px] absolute top-6 right-0 border-gray-600 overflow-y-auto ${isOpen1 ? "max-h-60" : "max-h-0"} `}
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
                                        ${data?.Name?.toLowerCase() === selected1?.toLowerCase() &&
                        "bg-sky-600 text-white"
                        }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue1)
                          ? "block"
                          : "hidden"
                        }`}
                      onClick={() => {
                        if (data?.Name?.toLowerCase() !== selected1.toLowerCase()) {
                          setSelected1(data?.Name);
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
          <div className='flex flex-col '>
            <h1 className='flex text-start font-bold'>Unit:*</h1>
            <div className='flex flex-col relative'>
              <div className='flex '>
                <input
                  onClick={() => setOpen(!open)}
                  className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  border-[1px] border-gray-600'
                  value={selected}
                  placeholder='Select Value'
                />
                <BiChevronDown size={20} className={`${open && "rotate-180"} absolute top-1 right-7`} />

                <FaPlusCircle size={20} style={{ color: "skyblue" }} className='w-8 h-8 p-1 hidden border-[1px] border-gray-600' />

              </div>
              {open &&
                <ul

                  className={`bg-white  w-[250px] mx-[30px] border-[1px] absolute top-8 right-0 border-gray-600 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
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
                                        ${data?.Name?.toLowerCase() === selected?.toLowerCase() &&
                        "bg-sky-600 text-white"
                        }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue)
                          ? "block"
                          : "hidden"
                        }`}
                      onClick={() => {
                        if (data?.Name?.toLowerCase() !== selected.toLowerCase()) {
                          setSelected(data?.Name);
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
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Brand:*</h1>
            <select type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none'>
              <option value={"Please Select"}>Please Select</option>
              <option value={"Test Brand"}>Test Brand</option>

            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Category:</h1>
            <select type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none'>
              <option value={"Please Select"}>Please Select</option>
              <option value={"Test cat 2-2"}>Test cat 2-2</option>
              <option value={"Test Category 1"}>Test Category 1</option>

            </select>
          </div>
          <div className='flex flex-col relative mt-7'>
            <div className='flex'>
              <input type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
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
            <input type='text' placeholder='Alert Quantity' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
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
            <input type='text' placeholder='Product Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Weight:</h1>
            <input type='number' placeholder='Weight' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex  mt-3'>

          <div className='flex flex-col w-[67%]'>
            <h1 className='flex text-start font-bold'>Description:</h1>
            <JoditEditor
              className='w-full border-[1px] border-gray-500'
              ref={editor}
              value={description}
              onChange={newContent => setDescription(newContent)}
            />
          </div>


        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-4'>

          <div className='flex flex-col '>
            <h1 className='flex text-start font-bold'>Applicable Tax:</h1>
            <div className='flex flex-col relative'>
              <div className='flex '>
                <input
                  onClick={() => setAppTax(!appTax)}
                  className='bg-white w-full  flex items-center   focus:outline-none justify-between p-2  border-[1px] border-gray-600'
                  value={selected}
                  placeholder='Select Value'
                />
                <BiChevronDown size={20} className={`${appTax && "rotate-180"} absolute top-1 right-3`} />


              </div>
              {appTax &&
                <ul

                  className={`bg-white  w-[250px] mx-[30px] border-[1px] absolute top-8 z-10 right-0 border-gray-600 overflow-y-auto ${appTax ? "max-h-60" : "max-h-0"} `}
                >
                  <div className="flex items-center px-2 sticky top-0 bg-white">
                    <input
                      type="text"
                      value={inputValue2}
                      onChange={(e) => setInputValue2(e.target.value.toLowerCase())}
                      className="placeholder:text-gray-700 p-1 outline-none border-[1px] border-gray-500"
                    />
                  </div>
                  {dummyData?.map((data) => (
                    <li
                      key={data?.Name}
                      className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                        ${data?.Name?.toLowerCase() === selected2?.toLowerCase() &&
                        "bg-sky-600 text-white"
                        }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue2)
                          ? "block"
                          : "hidden"
                        }`}
                      onClick={() => {
                        if (data?.Name?.toLowerCase() !== selected.toLowerCase()) {
                          setSelected2(data?.Name);
                          setAppTax(false);
                          setInputValue2("");
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
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Selling Price Tax Type:*</h1>
            <select type='text' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none'>
              <option value={"Please Select"}>Please Select</option>
              <option value={"Inclusive"}>Inclusive</option>
              <option value={"Exclusive"}>Exclusive</option>

            </select>
          </div>
          <div className='flex flex-col relative mt-7'>
            <div className='flex'>
              <input type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
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


        </div>
        <div className='flex flex-col relative mt-7'>
          <div className='flex'>
            <input type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
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
        <div className='grid grid-cols-1 md:grid-cols-4 mt-5 gap-4'>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
            <input type='text' placeholder='Custom Field 1' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
            <input type='text' placeholder='Custom Field 2' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
            <input type='text' placeholder='Custom Field 3' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
          <div className='flex flex-col'>
            <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
            <input type='text' placeholder='Custom Field 4' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
          </div>
        </div>
        <div className='flex flex-col relative mt-7'>
          <div className='flex'>
            <input type='checkbox' className='w-6 h-6 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
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
        
      </div>
      <div className='flex items-end justify-end mt-5'>
          <button className='bg-green-500 px-2 py-2 items-center justify-center flex'>Save</button>
        </div>
    </div>
  )
}

export default AddorEditProduct
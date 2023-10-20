import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';

const AddorEditBusinessLocation = ({id}) => {
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
    const [col1, setCol1] = useState(false)
    const [col2, setCol2] = useState(false)
    const [col3, setCol3] = useState(false)

    const [col4, setCol4] = useState(false)
    const [col5, setCol5] = useState(false)
    const [col6, setCol6] = useState(false)

    const handleDelete = (index) => {
        let newArray = [...formData.featureProducts]
        newArray.splice(index, 1)
        setFormData({ ...formData, featureProducts: newArray })
    }
    const [open1, setOpen1] = useState(false)
    const [inputValue1, setInputValue1] = useState('')
    const [seletedValue, setSeletedValue] = useState('')
    
    const [formData, setFormData] = useState({
        name: '',
        city:'',
        zipCode:"",
        state:"",
        country:"",
        featureProducts: [],
        paymentOption:[
            { paymentMethod:"Cash", is_enabled:false, acount:""},
            { paymentMethod:"Card", is_enabled:false, acount:"" },
            { paymentMethod:"Cheque", is_enabled:false, acount:"" },
            { paymentMethod:"Bank Transfer", is_enabled:false, acount:"" },
            { paymentMethod:"Other", is_enabled:false, acount:"" },
            { paymentMethod:"Easy Paisa", is_enabled:false, acount:"" },
            { paymentMethod:"Custom Payment 2", is_enabled:false, acount:"" },
            { paymentMethod:"Custom Payment 3", is_enabled:false, acount:"" },
            { paymentMethod:"Custom Payment 4", is_enabled:false, acount:"" },
            { paymentMethod:"Custom Payment 5", is_enabled:false, acount:"" },
            { paymentMethod:"Custom Payment 6", is_enabled:false, acount:"" },
            { paymentMethod:"Custom Payment 7", is_enabled:false, acount:"" },
            ]


    })
    const handleChange = (e, index) => {
        
        const updatedData = formData.paymentOption.map((item, ind) => {
            if (ind === index) {
                // Create a new copy of the item with the modified subItem
                return {
                    ...item, [e.target.name]: e.target.name === "account" ? e.target.value : e.target.checked
                };
            }
            return item;
        });
        setFormData({ ...formData, paymentOption: updatedData });
    }
    const [isserror, setIsserror] = useState(false);
    const handleClick = (e) => {
        if (
            formData.name.length === 0 ||
            formData.city.length === 0 ||
            formData.zipCode.length === 0 ||
            formData.country.length ===  0 ||
            formData.state.length === 0 
        ) {
            setIsserror(true);
            console.log(isserror);
        } else if (id) {
           
            console.log("Handle Update", formData);
        } else {
            console.log("Handle Save", formData);
        }
    };


    return (
        <div className='flex flex-col w-full bg-white p-3'>
            <h1 className="text-2xl text-start font-semibold ">{id ? "Edit" : "Add a new"} business location</h1>

            <div className='flex flex-col mt-5'>
                <h2 className="text-start text-gray-500 flex ">
                    Name:*
                    <h2 className="text-red-400">
                        {isserror && formData.name.length === 0
                            ? "Required field"
                            : ""}
                    </h2>
                </h2>
                <input type="text" placeholder='Name' value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
            </div>

           
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Location ID:
                    </h2>
                    <input type="text" placeholder='Location ID'
                        value={formData.locationId}
                        onChange={(e) => { setFormData({ ...formData, locationId: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Landmark:
                    </h2>
                    <input type="text" placeholder='Landmark'
                        value={formData.landmark}
                        onChange={(e) => { setFormData({ ...formData, landmark: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        City:*
                        <h2 className="text-red-400">
                            {isserror && formData.city.length === 0
                                ? "Required field"
                                : ""}
                        </h2>
                    </h2>
                    <input type="text" placeholder='City'
                        value={formData.city}
                        onChange={(e) => { setFormData({ ...formData, city: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Zip Code:*
                        <h2 className="text-red-400">
                            {isserror && formData.zipCode.length === 0
                                ? "Required field"
                                : ""}
                        </h2>
                    </h2>
                    <input type="text" placeholder='Zip Code'
                        value={formData.zipCode}
                        onChange={(e) => { setFormData({ ...formData, zipCode: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        State:*
                        <h2 className="text-red-400">
                            {isserror && formData.state.length === 0
                                ? "Required field"
                                : ""}
                        </h2>
                    </h2>
                    <input type="text" placeholder='State'
                        value={formData.state}
                        onChange={(e) => { setFormData({ ...formData, state: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Country:*
                        <h2 className="text-red-400">
                            {isserror && formData.country.length === 0
                                ? "Required field"
                                : ""}
                        </h2>
                    </h2>
                    <input type="text" placeholder='Country'
                        value={formData.country}
                        onChange={(e) => { setFormData({ ...formData, country: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Mobile:
                    </h2>
                    <input type="text" placeholder='Mobile'
                        value={formData.mobile}
                        onChange={(e) => { setFormData({ ...formData, mobile: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Website:
                    </h2>
                    <input type="text" placeholder='Website'
                        value={formData.website}
                        onChange={(e) => { setFormData({ ...formData, website: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Alternate Contact Number:
                    </h2>
                    <input type="text" placeholder='Alternate Contact Number'
                        value={formData.alternateContactNumber}
                        onChange={(e) => { setFormData({ ...formData, alternateContactNumber: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Email:
                    </h2>
                    <input type="email" placeholder='Email'
                        value={formData.email}
                        onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>


                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex relative">
                        Invoice Scheme For POS:
                        <FaInfoCircle onMouseOver={() => { setCol1(true) }} onMouseLeave={() => { setCol1(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                        {col1 &&
                            <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                <p className='text-start mt-2 text-gray-800'>Invoice scheme means invoice numbering formta. Select the scheme to be used for this business location.</p>
                                <p className='text-start mt-2 text-xs text-gray-500'>You can add new Invoice Scheme in Invoice Settings </p>

                            </div>
                        }
                        
                    </h2>
                    <select type="text" placeholder='Alternate Contact Number'
                        value={formData.invoiceSchemeForPOS}
                        onChange={(e) => { setFormData({ ...formData, invoiceSchemeForPOS: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
                        <option value={""}>Please Select</option>
                        <option value={"Default"}>Default</option>

                    </select>
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex relative">
                        Invoice Scheme For Sale:

                        
                        
                    </h2>
                    <select type="text"
                        value={formData.invoiceSchemeForSale}
                        onChange={(e) => { setFormData({ ...formData, invoiceSchemeForSale: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
                        <option value={""}>Please Select</option>
                        <option value={"Default"}>Default</option>

                    </select>
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex relative">
                        Invoice Layout For POS:
                        <FaInfoCircle onMouseOver={() => { setCol2(true) }} onMouseLeave={() => { setCol2(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                        {col2 &&
                            <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                <p className='text-start mt-2 text-gray-800'>Invoice Layout to be used for this location.</p>
                                <p className='text-start mt-2 text-gray-500'>You can add new Invoice Layout in Invoice Settings</p>

                            </div>
                        }
                        
                    </h2>
                    <select type="text" placeholder='Alternate Contact Number'
                        value={formData.invoiceLayoutForPOS}
                        onChange={(e) => { setFormData({ ...formData, invoiceLayoutForPOS: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
                        <option value={""}>Please Select</option>
                        <option value={"Default"}>Default</option>
                        <option value={"Test Layout"}>Test Layout</option>

                    </select>
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex relative">
                        Invoice Layout For Sale:
                        <FaInfoCircle onMouseOver={() => { setCol3(true) }} onMouseLeave={() => { setCol2(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                        {col3 &&
                            <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                <p className='text-start mt-2 text-gray-800'>Invoice Layout for direct sale.</p>

                            </div>
                        }
                        
                    </h2>
                    <select type="text" placeholder='Alternate Contact Number'
                        value={formData.invoiceLayoutForSale}
                        onChange={(e) => { setFormData({ ...formData, invoiceLayoutForSale: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
                        <option value={""}>Please Select</option>
                        <option value={"Default"}>Default</option>
                        <option value={"Test Layout"}>Test Layout</option>

                    </select>
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex relative">
                        Default Selling Price Group:
                        <FaInfoCircle onMouseOver={() => { setCol4(true) }} onMouseLeave={() => { setCol4(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                        {col4 &&
                            <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                <p className='text-start mt-2 text-gray-800'>This price group will be used as the default price group in this location.</p>

                            </div>
                        }
                    </h2>
                    <select type="text" placeholder='Alternate Contact Number'
                        value={formData.dfltSlngPrcGrp}
                        onChange={(e) => { setFormData({ ...formData, dfltSlngPrcGrp: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" >
                        <option value={""}>Please Select</option>
                        <option value={"Default Selling Price"}>Default Selling Price</option>
                        <option value={"retail"}>retail</option>
                        <option value={"Saleman"}>Saleman</option>
                        <option value={"Minimum Price"}>Minimum Price</option>
                        <option value={"Sale Points"}>Sale Points</option>

                    </select>
                </div>



            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-5 gap-5'>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Custom Feild 1:
                    </h2>
                    <input type="text" placeholder='Custom Feild 1'
                        value={formData.customField1}
                        onChange={(e) => { setFormData({ ...formData, customField1: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Custom Feild 2:
                    </h2>
                    <input type="text" placeholder='Custom Feild 2'
                        value={formData.customField2}
                        onChange={(e) => { setFormData({ ...formData, customField2: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Custom Feild 3:
                    </h2>
                    <input type="text" placeholder='Custom Feild 3'
                        value={formData.customField3}
                        onChange={(e) => { setFormData({ ...formData, customField3: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
                <div className='flex flex-col mt-5'>
                    <h2 className="text-start text-gray-500 flex ">
                        Custom Feild 4:
                    </h2>
                    <input type="text" placeholder='Custom Feild 4'
                        value={formData.customField4}
                        onChange={(e) => { setFormData({ ...formData, customField4: e.target.value }) }}
                        className="px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none" />
                </div>
            </div>
            <div className='flex bg-black w-full h-[2px] mt-5'></div>
            <div className='flex flex-col my-10'>
                <div className='flex text-sm text-start font-bold relative'>
                    <h1> POS Screnn featured products:</h1>
                    <FaInfoCircle onMouseOver={() => { setCol5(true) }} onMouseLeave={() => { setCol5(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                    {col5 &&
                        <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                            <p className='text-start mt-2 text-gray-800'>Seleceted product will be shown on the top of the POS screen product suggestion for quick access</p>

                        </div>
                    }
                </div>
                <div className='flex flex-col relative'>
                    <div className='flex'>
                        <input
                            onClick={() => setOpen1(!open1)}
                            className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  py-1 mt-1 border-[1px] border-gray-600'
                            value={seletedValue}
                            onChange={(e) => { setSeletedValue(e.target.value) }}

                            placeholder='Select Value'
                        />


                    </div>
                    {open1 &&
                        <ul

                            className={`bg-white z-10  w-full -right-7 mx-[30px] border-[1px] absolute top-9 border-gray-600  overflow-y-auto ${open1 ? "max-h-60" : "max-h-0"} `}
                        >
                            <div className="flex items-center px-1 sticky top-0 bg-white">
                                <input
                                    type="text"
                                    value={inputValue1}
                                    onChange={(e) => setInputValue1(e.target.value.toLowerCase())}
                                    className="placeholder:text-gray-700 w-full p-1 outline-none border-[1px] border-gray-500"
                                />
                            </div>
                            {dummyData?.map((data) => (
                                <li
                                    key={data?.Name}
                                    className={`p-2 text-sm text-start hover:bg-sky-600 hover:text-white
                                                        ${data?.Name?.toLowerCase() === seletedValue?.toLowerCase() &&
                                        "bg-sky-600 text-white"
                                        }
                                                         ${data?.Name?.toLowerCase().startsWith(inputValue1)
                                            ? "block"
                                            : "hidden"
                                        }`}
                                    onClick={() => {
                                        if (data?.Name?.toLowerCase() !== seletedValue.toLowerCase()) {
                                            let darray = formData.featureProducts
                                            darray = [...darray, data?.Name]
                                            setFormData({ ...formData, featureProducts: darray })
                                            setOpen1(false);
                                            setInputValue1("");
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
            {formData.featureProducts.length > 0 &&

                <div className='w-full border-[1px] border-gray-400 py-1 px-1'>
                    <ul className='flex'>
                        {formData.featureProducts.map((val, index) => {
                            return <>
                                <li key={index} className='flex items-center py-1 rounded-md px-2 bg-blue-500 text-white text-xs mx-2'>
                                    <p onClick={() => { handleDelete(index) }} className='mx-1 mb-1 cursor-pointer'>x</p>
                                    <h1>{val}</h1>
                                </li>
                            </>
                        })}
                    </ul>
                </div>
            }
            <div className='flex bg-black w-full h-[2px] mt-5'></div>

            <div className='flex flex-col justify-center items-center mt-5 mx-5'  >
            <div className='flex text-sm text-start font-bold relative'>
                    <h1> Payment Options:</h1>
                    <FaInfoCircle onMouseOver={() => { setCol6(true) }} onMouseLeave={() => { setCol6(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                    {col6 &&
                        <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                            <p className='text-start mt-2 text-gray-800'>Enable or disable payment methods for the location</p>

                        </div>
                    }
                </div>

                <table id='usertbl' className="table-auto w-full mb-10  whitespace-no-wrap ">
                    <thead>
                        <tr>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Name</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Category Code</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Description</th>
                            

                        </tr>
                    </thead>
                    <tbody >
                        {formData.paymentOption.map((val, index) => {
                            return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""}`}>
                                <td className="px-1 py-1 text-sm">{val.paymentMethod}</td>
                                <td>
                                    <input type='checkbox' name='is_enabled' checked={val.is_enabled ? true : false}
                                    onChange={(e)=>{handleChange(e,index)}}
                                    />
                                </td>
                                <td className="px-1 py-1">
                                        <div className='flex flex-col'>
                                            <select name="acount" value={val.acount} onChange={(e) => { handleChange(e, index) }} className='border-[1px] mt-2 w-full px-1 py-1 border-black focus:outline-none'>
                                                <option value={""}>None</option>
                                                <option value={"Test Account"}>Test Account</option>
                                                <option value={"Askari Bank"}>Askari Bank</option>
                                                <option value={"asd"}>asd</option>

                                            </select>

                                        </div>
                                    </td>
                                
                            </tr>
                        })}


                    </tbody>
                </table>
                
            </div>

            <div className='flex items-end justify-end'>
                <button
                    onClick={handleClick}
                    className="bg-green-500 w-[100px] px-2 py-2 items-center justify-center flex"
                >
                    {id ? "Update" : "Save"}
                </button>
            </div>

        </div>
    )
}

export default AddorEditBusinessLocation
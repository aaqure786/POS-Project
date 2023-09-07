import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DefinedRange } from 'react-date-range';
import {FaEnvelope, FaFilePdf} from "react-icons/fa"
import { format } from 'date-fns';
import { addDays } from 'date-fns';

const LedgerTab = () => {
  const [format1, setFormat1] = useState(true)
  const [format2, setFormat2] = useState(false)
  const [format3, setFormat3] = useState(false)

  const [range, setRange] = useState([
    {
      startDate : new Date(),
      endDate : addDays(new Date(),7),
      key: "selection"
    }
  ])
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full bg-white px-2'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-3'>
        <div className='flex flex-col'>
          <h1 className='text-sm font-semibold text-start mb-2'>Date Range:</h1>
          <input 
          value={`${format(range[0].startDate , "MM/dd/yyyy")} - ${format(range[0].endDate , "MM/dd/yyyy")}`} 
          readOnly 
          className='focus:outline-none border-[1px] bg-gray-200 border-black px-4 py-1'
          onClick={()=>{setOpen(!open)}} />
          {open &&
          <DefinedRange
          onChange={item => setRange([item.selection])}
          ranges={range}
          />
        }
        </div>
        <div className='flex flex-col'>
        <h1 className='text-sm font-semibold text-start mb-2'>Ledger Format:</h1>
          <div className='flex '>
            <button onClick={()=>{setFormat1(!format1); setFormat2(false); setFormat3(false)}} className={`px-1  py-1 border-[1px] border-gray-300  ${ format1 ? "bg-gradient-to-b from-gray-500 to-gray-300":"bg-gray-100"} text-lg `}>Format 1</button>
            <button onClick={()=>{setFormat2(!format2); setFormat1(false); setFormat3(false)}} className={`px-1  py-1 border-[1px] border-gray-300  ${ format2 ? "bg-gradient-to-b from-gray-500 to-gray-300":"bg-gray-100"} text-lg `}>Format 2</button>
            <button onClick={()=>{setFormat3(!format3); setFormat1(false); setFormat2(false)}} className={`px-1  py-1 border-[1px] border-gray-300  ${ format3 ? "bg-gradient-to-b from-gray-500 to-gray-300":"bg-gray-100"} text-lg `}>Format 3</button>
          
          </div>
        </div>
        <div className='flex flex-col'>
        <h1 className='text-sm font-semibold text-start mb-2'>Business Locations:</h1>
          <select className='focus:outline-none border-[1px] bg-gray-100 border-black px-4 py-1' >
             <option value={"All Locations"}>All Locations</option>
             <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>

          </select>
        </div>
        <div className='flex'>
          <div className='flex items-end justify-end'>
            <div className='w-8 h-8 bg-gray-200 flex items-center justify-center mx-2'><FaFilePdf size={15} className='m-2'/> </div>
            <div className='w-8 h-8 bg-gray-200 flex items-center justify-center mx-2'><FaEnvelope size={15} className='m-2'/></div>
            
            
          </div>
        </div>

      </div>
      <div className='flex w-full bg-white'>
        {format1 && 
          <div className='flex flex-col w-full'>
            <div className='flex flex-col w-full justify-end items-end'>
              <h1 className='text-xl font-bold mb-2'>EZI POS DEMO</h1>
              <p> Address</p>
            </div>
            <div className='flex '>
              <div className='w-1/2 flex-col flex'>
                <div className='w-1/2 px-1 py-1 bg-blue-800 text-white'>
                  <h1 className='text-start'>To:</h1>
                </div>
              </div>
              <div className='w-1/2 flex flex-col'>
              <div className='w-full px-1 py-1 bg-blue-800 text-white'>
                  <h1 className='text-end font-semibold text-2xl '>Account Summary</h1>
                </div>
              </div>
            </div>
            <div className='flex'>

            </div>
            
          </div>
        }
        {format2 && 
          <div className='flex'>
            format 2
          </div>
        }
        {format3 && 
          <div className='flex'>
            format 3
          </div>
        }
      </div>
      
    </div>
  )
}

export default LedgerTab
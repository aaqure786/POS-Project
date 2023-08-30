import React, { useRef, useState } from 'react'
import JoditEditor from 'jodit-react';
const AddorEditNotes = () => {
    const editor = useRef(null)
    
    const [iserror, setIserror] = useState(false)
    const [description, setDescription] = useState('')
    const [notesData, setNotesData] = useState({
        heading:"",
        documents:"",
        isPrivate:false
    }) 
    const handleClick = (e)=>{
        e.preventDefault()
        if(notesData.heading.length === 0 ){
            setIserror(true)
        }else{
            console.log("Handle Save")
        }
    }
    
  return (
    <div className='w-full h-full flex flex-col '>
        <div className='flex mt-3 w-full flex-col items-start'>
          <h1 className='text-lg font-bold flex'>Heading:* {iserror && notesData.heading.length ===0 && <p className='text-sm text-red-500 mx-2'>Required Field</p>}</h1> 
          <input className='w-full px-3 py-1 border-[1px] border-gray-500' value={notesData.heading} onChange={(e) => setNotesData({ ...notesData, heading: e.target.value })} type='text' placeholder='Heading' /> 
        </div>
        <div className='flex mt-3 w-full  flex-col items-start'>
          <h1 className='text-lg font-bold '>Description</h1> 
          <JoditEditor 
          className='w-full border-[1px] border-gray-500'
          ref={editor}
          value={description} 
          onChange={newContent => setDescription(newContent)}
          /> 
        </div>
        <div className='flex mt-3 w-full flex-col items-start'>
          <h1 className='text-lg font-bold '>Documents:</h1> 
          <textarea className='w-full border-[1px] border-gray-500' value={notesData.documents} onChange={(e) => setNotesData({ ...notesData, documents: e.target.value })} rows={ 5} type='file' placeholder='Upload Your Documents' /> 
        </div>
        <div className='flex mt-3 w-full items-start'>
          <input className='w-5 h-5 mt-1' value={notesData.isPrivate} onChange={(e) => setNotesData({ ...notesData, isPrivate: e.target.value })} type='checkbox'  /> 
          <h1 className='text-lg font-bold  mx-3'>Is Private</h1> 
        </div>

        <div className='flex items-end justify-end'>
            <button onClick={handleClick} className='w-[100px] text-center px-3 py-1 border-[1px] border-gray-400 bg-green-400 mx-2'>Save</button>

        </div>
        
    </div>
  )
}

export default AddorEditNotes
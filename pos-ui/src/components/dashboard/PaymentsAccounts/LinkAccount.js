import React, { useState } from 'react'

const LinkAccount = (props) => {
    const [account, setAccount] = useState('')
    const handleSaveorEdit = () => {
        if (props.id) {
            console.log("Handle Update", account)
        } else {
            console.log("Handle Save", account)

        }
    }


    return (
        <div className='w-full px-5 bg-white '>
            <h1 className='text-lg text-start '>Link Account - Payment Ref No.: - {props.id}</h1>
            <div className='flex flex-col'>
                <h1 className='text-start font-bold '>Account:</h1>
                <div className='flex'>

                    <select value={account} onChange={(e) => { setAccount(e.target.value) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                        <option value={"Test Account"}>Test Account</option>
                        <option value={"Askari Bank"}>Askari Bank</option>
                        <option value={"asd"}>asd</option>
                    </select>
                </div>
            </div>
            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>Save</h1>

                </button>
            </div>
        </div>
    )
}

export default LinkAccount
import React from 'react'
import ExpenseCategoriesTbl from '../Tables/ExpenseCategoriesTbl';

const ExpenseCategory = () => {
    
    return (
        <div className='flex flex-col p-5 bg-gray-100 min-h-screen'>
            <div className='flex'>
                <h1 className='text-2xl text-start'>Expense Categories</h1>
                <h1 className='text-sm mt-3 mx-3 text-start'>Manage your expense categories</h1>

            </div>

            <div className='flex flex-col mt-10 items-center bg-white border-t-[3px] border-blue-500 rounded-md'>
                
                <div className='flex mt-10'>
                        <ExpenseCategoriesTbl />
                    </div>
            </div>
            
        </div>
    )
}

export default ExpenseCategory
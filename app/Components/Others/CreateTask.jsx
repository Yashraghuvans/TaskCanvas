import React from 'react'

const CreateTask = () => {
    return (
        <>
            <div className='p-3 md:p-5 bg-[#1C1C1C] rounded mt-7'>
                <form className='flex flex-col md:flex-row flex-wrap w-full justify-between items-start gap-6'>
                    <div className='w-full md:w-1/2'>
                        <div className='mb-4'>
                            <h2 className='text-sm text-gray-300 mb-0.5'>Task Title</h2>
                            <input className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400' type='text' placeholder='Enter task title' />
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-sm text-gray-300 mb-0.5'>Date</h2>
                            <input className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400' type='date' />
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-sm text-gray-300 mb-0.5'>Assign To</h2>
                            <input className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400' type='text' placeholder='Employee Name' />
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-sm text-gray-300 mb-0.5'>Employee's Email</h2>
                            <input className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400' type='email' placeholder='Employee Email' />
                        </div>
                        <div className='mb-4'>
                            <h2 className='text-sm text-gray-300 mb-0.5'>Category</h2>
                            <input className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400' type='text' placeholder='Enter task category' />
                        </div>
                    </div>
                    <div className='w-full md:w-2/5 flex flex-col items-start'>
                        <h2 className='text-sm text-gray-300 mb-0.5'>Task Description</h2>
                        <textarea cols='30' rows='6' placeholder='Enter task description (Max 500 words)' className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400' />
                        <button type='submit' className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateTask
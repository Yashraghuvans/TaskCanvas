import React from 'react'

const TaskListNumber = () => {
  return (
    <>
      <div className='
        flex flex-wrap justify-between gap-4 sm:gap-5 py-6 sm:py-10
      '>
        <div className='rounded-xl w-full sm:w-[48%] lg:w-[23%] py-5 sm:py-6 px-6 sm:px-9 bg-red-400 mb-2 sm:mb-0'>
          <h2 className='text-2xl sm:text-3xl font-semibold'>4</h2>
          <h3 className='text-lg sm:text-xl font-medium'>Urgency Task</h3>
        </div>
        <div className='rounded-xl w-full sm:w-[48%] lg:w-[23%] py-5 sm:py-6 px-6 sm:px-9 bg-blue-400 mb-2 sm:mb-0'>
          <h2 className='text-2xl sm:text-3xl font-semibold'>6</h2>
          <h3 className='text-lg sm:text-xl font-medium'>Importance Task</h3>
        </div>
        <div className='rounded-xl w-full sm:w-[48%] lg:w-[23%] py-5 sm:py-6 px-6 sm:px-9 bg-green-400 mb-2 sm:mb-0'>
          <h2 className='text-2xl sm:text-3xl font-semibold'>3</h2>
          <h3 className='text-lg sm:text-xl font-medium'>Time Required Task</h3>
        </div>
        <div className='rounded-xl w-full sm:w-[48%] lg:w-[23%] py-5 sm:py-6 px-6 sm:px-9 bg-yellow-400'>
          <h2 className='text-2xl sm:text-3xl font-semibold'>8</h2>
          <h3 className='text-lg sm:text-xl font-medium'>Community Task</h3>
        </div>
      </div>
    </>
  )
}

export default TaskListNumber
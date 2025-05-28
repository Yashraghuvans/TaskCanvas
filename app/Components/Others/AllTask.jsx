import React from 'react'

const AllTask = () => {
  return (
    <>
      <div className='bg-[#1c1c1c] p-3 sm:p-5 rounded mt-5 h-full overflow-auto'>
        <div className='hidden sm:flex bg-gray-800 mb-2 py-2 px-4 rounded font-semibold text-gray-200'>
          <div className='w-1/4'>Name</div>
          <div className='w-2/4'>Task</div>
          <div className='w-1/4 text-center'>Status</div>
        </div>
        {[
          { color: 'bg-red-400' },
          { color: 'bg-blue-400' },
          { color: 'bg-green-400' },
          { color: 'bg-yellow-400' },
          { color: 'bg-orange-400' },
          { color: 'bg-purple-400' },
          { color: 'bg-cyan-400' }
        ].map((task, idx) => (
          <div
            key={idx}
            className={`
              ${task.color} mb-2 py-2 px-3 sm:px-4 flex flex-col sm:flex-row sm:justify-between rounded
            `}
          >
            <div className='flex flex-col sm:flex-row w-full'>
              <h2 className='text-base sm:w-1/4 font-semibold'>{'Yash'}</h2>
              <h3 className='text-sm sm:w-2/4 mt-1 sm:mt-0'>{'Make some react components'}</h3>
              <h5 className='text-xs sm:w-1/4 sm:text-center mt-2 sm:mt-0 font-medium border-2 border-black '>{'Status'}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AllTask
import React from 'react'

const Header = ({ handleLogout }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-10 py-6 sm:py-8 border-b border-gray-700 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">Welcome back, Yash Raghuvanshi 👋</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <span className="inline-block w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-center text-lg">Y</span>
          <span className="text-gray-200 font-medium text-sm sm:text-base">Yash Raghuvanshi</span>
          <button
            className="ml-0 sm:ml-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 sm:px-5 rounded transition text-sm sm:text-base mt-2 sm:mt-0"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
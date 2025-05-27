import React from 'react'

const Header = ({ handleLogout }) => {
  return (
    <>
        <div className="flex items-center justify-between px-10 py-8 border-b border-gray-700">
                <div>
                    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                    <p className="text-gray-400 mt-1">Welcome back, Yash Raghuvanshi 👋</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="inline-block w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-center">Y</span>
                    <span className="text-gray-200 font-medium">Yash Raghuvanshi</span>
                    <button
                        className="ml-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded transition"
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
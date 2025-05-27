import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = ({ handleLogout }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <Header handleLogout={handleLogout} />
            <main className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-start">
                    <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-800 flex flex-col h-[500px]">
                        <h2 className="text-xl font-semibold text-white mb-4">Create New Task</h2>
                        <div className="flex-1 overflow-auto">
                            <CreateTask />
                        </div>
                    </div>
                    <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-800 flex flex-col h-[500px]">
                        <h2 className="text-xl font-semibold text-white mb-4">All Tasks</h2>
                        <div className="flex-1 overflow-auto">
                            <AllTask />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminDashboard
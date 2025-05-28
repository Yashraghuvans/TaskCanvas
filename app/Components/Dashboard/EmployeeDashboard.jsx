import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ handleLogout }) => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-2 sm:px-0">
                <Header handleLogout={handleLogout} />
                <TaskListNumber />
                <TaskList/>
            </div>
        </>
    )
}

export default EmployeeDashboard
import React from 'react'

const tasks = [
    {
        category: "Urgency Task",
        count: 4,
        color: "bg-red-400",
        labelBg: "bg-red-600",
        label: "Urgent",
        date: "20 April 2025",
        title: "Complete urgent report",
        desc: "Finish the quarterly urgent report for management review."
    },
    {
        category: "Importance Task",
        count: 6,
        color: "bg-blue-400",
        labelBg: "bg-blue-600",
        label: "Important",
        date: "22 April 2025",
        title: "Prepare presentation",
        desc: "Prepare the important project presentation for the client meeting."
    },
    {
        category: "Time Required Task",
        count: 3,
        color: "bg-green-400",
        labelBg: "bg-green-600",
        label: "Time Required",
        date: "25 April 2025",
        title: "Long documentation",
        desc: "Work on the time-consuming documentation for the new feature."
    },
    {
        category: "Community Task",
        count: 8,
        color: "bg-yellow-400",
        labelBg: "bg-yellow-600",
        label: "Community",
        date: "28 April 2025",
        title: "Team building event",
        desc: "Organize and participate in the community team building event."
    },
    {
        category: "Urgency Task",
        count: 2,
        color: "bg-red-400",
        labelBg: "bg-red-600",
        label: "Urgent",
        date: "30 April 2025",
        title: "Fix production bug",
        desc: "Resolve the critical bug affecting users in production."
    },
    {
        category: "Importance Task",
        count: 5,
        color: "bg-blue-400",
        labelBg: "bg-blue-600",
        label: "Important",
        date: "2 May 2025",
        title: "Client feedback review",
        desc: "Review and address the feedback received from the client."
    },
    {
        category: "Time Required Task",
        count: 4,
        color: "bg-green-400",
        labelBg: "bg-green-600",
        label: "Time Required",
        date: "5 May 2025",
        title: "Database migration",
        desc: "Migrate the database to the new server and test thoroughly."
    },
    {
        category: "Community Task",
        count: 7,
        color: "bg-yellow-400",
        labelBg: "bg-yellow-600",
        label: "Community",
        date: "8 May 2025",
        title: "Volunteer workshop",
        desc: "Participate in the community volunteer workshop event."
    },
    {
        category: "Urgency Task",
        count: 1,
        color: "bg-red-400",
        labelBg: "bg-red-600",
        label: "Urgent",
        date: "10 May 2025",
        title: "Server downtime alert",
        desc: "Investigate and resolve the unexpected server downtime."
    }
];

const TaskList = () => {
    return (
        <>
            <div id='tasklist' className='h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 overflow-x-auto'>
                {tasks.map((task, idx) => (
                    <div key={idx} className={`flex-shrink-0 h-full w-[300px] ${task.color} rounded-xl py-5 px-5`}>
                        <div className='flex justify-between items-center'>
                            <h2 className={`${task.labelBg} text-sm px-3 py-1 rounded`}>{task.label}</h2>
                            <h2 className='text-sm'>{task.date}</h2>
                        </div>
                        <h2 className='text-2xl font-semibold mt-5'>{task.title}</h2>
                        <p className='text-sm mt-2'>{task.desc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TaskList
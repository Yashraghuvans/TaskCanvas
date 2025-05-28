"use client"
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12 space-y-16">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400 drop-shadow-lg">
              Welcome to Task Canvas
            </h1>
            <p className="text-lg text-blue-200 mb-10 max-w-xl mx-auto">
              Streamline your workflow, manage team responsibilities, and stay focused with your personalized task management dashboard.
            </p>
            <Link href="/Auth">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg transition-all opacity-80 hover:opacity-90 shadow-md hover:shadow-blue-500/70 inline-block">
                Get Started
              </button>
            </Link>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-8 px-4 mt-12">
            {[
              {
                title: "Task Management",
                desc: "Create, assign, and track tasks effortlessly to keep your projects moving forward with clear deadlines and priorities.",
              },
              {
                title: "Team Collaboration",
                desc: "Communicate and coordinate with your team in real-time to ensure everyone is aligned and working efficiently.",
              },
              {
                title: "Insights & Reporting",
                desc: "Gain actionable insights with detailed reports and analytics to optimize productivity and resource allocation.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="flex-1 bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg transition-transform transform hover:scale-[1.03] hover:shadow-blue-500/80 cursor-pointer"
              >
                <h3 className="text-2xl font-semibold mb-3 text-blue-400 drop-shadow-md">
                  {title}
                </h3>
                <p className="text-blue-200 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page

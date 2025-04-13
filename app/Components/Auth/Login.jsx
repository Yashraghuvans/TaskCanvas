"use client"
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <div className='bg-black'>
                <div className='flex flex-col items-center justify-center h-screen w-screen'>
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e)
                        }}
                        className='text-white flex flex-col gap-4 border-2 border-emerald-500 px-15 py-20 rounded-xl'>
                        <h1 className='text-3xl font-bold text-center mb-3'>
                            Login Portal
                        </h1>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border-2 border-emerald-400 px-8 py-3 outline-none bg-transparent placeholder:text-white ' required type='email' placeholder='Email' />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-2 border-emerald-400 px-8 py-3 outline-none bg-transparent placeholder:text-white ' required type='password' placeholder='Password' />
                        <button className='bg-emerald-500 hover:bg-emerald-600 text-white  px-2 py-2 rounded-xl mt-3' type='submit'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
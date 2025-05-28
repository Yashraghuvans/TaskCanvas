"use client"
import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-black text-white">
            <div className="md:w-1/2 flex flex-col justify-center items-center bg-neutral-900 p-10 text-center">
                <h2 className="text-3xl font-bold mb-4">Welcome To Task Canvas</h2>
                <p className="text-gray-400 max-w-md mb-6">
                    Access your personalized dashboard, manage your tasks, and stay productive with our professional platform.
                </p>

                
                <div className="bg-neutral-800 text-left p-6 rounded-xl shadow-md w-full max-w-md">
                    <h3 className="text-xl font-semibold text-emerald-400 mb-4">🔐 Demo Login Credentials</h3>

                    <div className="mb-4">
                        <h4 className="text-white font-medium mb-1">🛠 Admin Access</h4>
                        <p className="text-sm text-gray-300"><span className="font-semibold text-white">Email:</span> admin@me.com</p>
                        <p className="text-sm text-gray-300"><span className="font-semibold text-white">Password:</span> 123</p>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-white font-medium mb-1">👤 Employee Access</h4>
                        <p className="text-sm text-gray-300"><span className="font-semibold text-white">Email:</span> employee@me.com</p>
                        <p className="text-sm text-gray-300"><span className="font-semibold text-white">Password:</span> 123</p>
                    </div>

                    <p className="text-xs text-gray-500 border-t border-neutral-700 pt-4">
                        ⚠️ For demo use only. Do not use these credentials in a production environment.
                    </p>
                </div>

                <p className="text-sm text-gray-500 mt-6">Need help? Contact yashraghuvans@gmail.com</p>
            </div>

            <div className="md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-neutral-900 shadow-xl rounded-2xl p-8 border border-neutral-800">
                    <h1 className="text-2xl font-semibold text-center mb-6">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg shadow-sm text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-sm text-gray-500 text-center mt-6">
                        © 2025 Yash Raghuvanshi. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;

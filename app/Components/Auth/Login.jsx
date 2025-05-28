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
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="w-full max-w-md bg-neutral-900 shadow-xl rounded-2xl p-8 border border-neutral-800">
                <h1 className="text-2xl font-semibold text-center text-white mb-6">
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
                    © 2025 Your Company. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Login;

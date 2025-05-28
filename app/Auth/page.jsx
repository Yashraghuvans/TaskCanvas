"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import EmployeeDashboard from '../Components/Dashboard/EmployeeDashboard'
import AdminDashboard from '../Components/Dashboard/AdminDashboard'

const Login = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser).role);
        }
    }, []);

    const handleLogin = (email, password) => {
        if (email === 'admin@me.com' && password === '123') {
            setUser('admin');
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
        } else if (email === 'employee@me.com' && password === '123') {
            setUser('employee');
            localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
        } else {
            alert('Invalid credentials!');
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('loggedInUser');
        router.push('/');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    if (user === 'admin') return <AdminDashboard handleLogout={handleLogout} />;
    if (user === 'employee') return <EmployeeDashboard handleLogout={handleLogout} />;

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
            <div className="md:w-1/2 flex flex-col justify-center items-center bg-black/50 p-10 text-center">
                <div className="bg-gray-900/80 text-left p-6 rounded-xl shadow-md w-full max-w-md border border-gray-800">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">🔐 Demo Login Credentials</h3>

                    <div className="mb-4">
                        <h4 className="text-white font-medium mb-1">🛠 Admin Access</h4>
                        <p className="text-sm text-blue-200"><span className="font-semibold text-white">Email:</span> admin@me.com</p>
                        <p className="text-sm text-blue-200"><span className="font-semibold text-white">Password:</span> 123</p>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-white font-medium mb-1">👤 Employee Access</h4>
                        <p className="text-sm text-blue-200"><span className="font-semibold text-white">Email:</span> employee@me.com</p>
                        <p className="text-sm text-blue-200"><span className="font-semibold text-white">Password:</span> 123</p>
                    </div>

                    <p className="text-xs text-blue-500 border-t border-gray-800 pt-4">
                        ⚠️ For demo use only. Do not use these credentials in a production environment.
                    </p>
                </div>

                <p className="text-sm text-blue-500 mt-6">Need help? Contact yashraghuvans@gmail.com</p>
            </div>

            <div className="md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md bg-gray-900/80 shadow-xl rounded-2xl p-8 border border-gray-800">
                    <h1 className="text-2xl font-semibold text-center mb-6 text-blue-400">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-blue-300">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm text-white placeholder-blue-400 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-blue-300">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm text-white placeholder-blue-400 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-sm text-blue-500 text-center mt-6">
                        © 2025 Yash Raghuvanshi. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
"use client"
import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

const page = () => {
  const [user, setUser] = useState(null);

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
    }
    else if(email=="employee@me.com" && password=="123"){
      setUser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
    } 
    else {
      alert('Invalid credentials!');
    }
  };

  return (
    <>
      <div className='text-white'>
        {!user ? <Login handleLogin={handleLogin} /> : ""}
        {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      </div>
    </>
  );
};

export default page;
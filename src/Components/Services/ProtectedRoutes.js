import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../static/Sidebar';

const ProtectedRoutes = () => {
    const auth = localStorage.getItem("loggedIn")
    return auth ? 
        <>
            <div className="flex flex-row">
                <Sidebar />
                <Outlet />
            </div>
        </>
        : <Navigate to="/login"/>
}

export default ProtectedRoutes;

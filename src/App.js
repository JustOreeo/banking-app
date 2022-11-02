import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoutes from './components/Services/ProtectedRoutes';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    {/* Protected Routes */}
                    <Route path="/" element={<ProtectedRoutes />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;

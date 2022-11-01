import React from 'react'
import {Link, Outlet } from "react-router-dom";
import { useAuth } from '../Auth';
export default function DashboardLayout() {
  const auth=useAuth();
  const userData=auth.user;
  console.log("dasshhbooard")
  console.log(userData.isLoggedIn)
  console.log(userData.accountType)
  function handleLogout(){
    auth.logout(userData)
  }
  return (
    <>
    <nav>
        <ul>
            {userData.accountType==="admin"&&<li><Link to="./admin">Admin</Link></li>}  
            {userData.accountType==="user"&&<li><Link to="./account">Account</Link></li>}
            {userData.accountType==="admin"&&<li><Link to="./register">CreateAccount</Link></li>}
            <li><Link to="./deposit">Deposit</Link></li>
            <li><Link to="./withdraw">Withdraw</Link></li>
            <li><Link to="./transfer">Transfer</Link></li>
        </ul>
    </nav>
    <button onClick={handleLogout}>Logout</button>
    <div>DashboardLayout</div>
    <Outlet/>
    </>

  )
}

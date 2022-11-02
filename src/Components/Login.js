import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [ input, setInput ] = useState({
        email: "",
        password: "",
    });
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loginError, setLoginError] = useState('')
    
    // FUNCTION THAT HANDLES LOGIN
    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("users"));
        if( input.email === ""){
            setEmailError("Email is required")
            //emailRef.current.classList.add("error")
        }
        if( input.password === ""){
            setPasswordError("Password is required")
            //passRef.current.classList.add("error")
        }
        if ( input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem("loggedIn", true);
            navigate("/")
        } else {
            setLoginError("Invalid email/password")
        }
    }
    return (
        <div>
        <form onSubmit={handleLogin} className='login-container' noValidate> 
            <input 
                name="email"
                type="email" 
                value={input.email}
                placeholder='Email' 
                className="input" 
                onChange={(e) => {
                    setInput({
                        ...input,
                        [e.target.name]: e.target.value,
                    })
                }}
            />
            <span className="errorMsg">{emailError}</span>
            <input 
                name="password"
                type="password" 
                value={input.password}
                placeholder='Password' 
                className="input" 
                onChange={(e) => {
                    setInput({
                        ...input,
                        [e.target.name]: e.target.value,
                    })
                }}
            />
            {/* <span className="errorMsg">{passError}</span> */}
            <span className="errorMsg">{loginError}</span>
            <button type="submit" className="btn">Login</button>  
        </form>
        </div>
    )
}

export default Login;
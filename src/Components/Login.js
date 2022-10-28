
import '../assets/Login.css';
import React,{useState,useRef} from 'react';


export default function Login({Userlist}) {
    const emailRef=useRef()
    const passRef=useRef()
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')
    const [loginError, setLoginError] = useState('')
    let email;
    let password;
    
    //Functions for Login Validations
    function handleEmail(){
      email=emailRef.current.value  

      if(email===""){
        setEmailError("Email is required")
        emailRef.current.classList.add("error")
      }else{
        setEmailError("")
        emailRef.current.classList.remove("error")
      }
      setLoginError("")
    }
    function handlePass(){
      password=passRef.current.value

      if(password===""){
        setPassError("Password is required")
        passRef.current.classList.add("error")
      }else{
        setPassError("")
        passRef.current.classList.remove("error")
      }
      setLoginError("")
    }
    function handleLogin(e){
      e.preventDefault();
      email=emailRef.current.value
      password=passRef.current.value
      let account;
      if(email===""){
        setEmailError("Email is required")
        emailRef.current.classList.add("error")
      }
      if(password===""){
        setPassError("Password is required")
        passRef.current.classList.add("error")
      }
      if(email!==""&&password!==""){
        account= Userlist.find(users => users.email === "admin@gmail.com")
        if(email===account.email&&password===account.password){
          setLoginError("Success")
        }else{
          setLoginError("Invalid email/password")
          passRef.current.classList.remove("error")
          emailRef.current.classList.remove("error")
        }
      }
    }
  return (
    <div>
      <form onSubmit={handleLogin} className='login-container' noValidate> 
        <input type="email" ref={emailRef} placeholder='Email' className="input" onChange={handleEmail}/>
        <span className="errorMsg">{emailError}</span>
        <input type="password" ref={passRef} placeholder='Password' className="input" onChange={handlePass}/>
        <span className="errorMsg">{passError}</span>
        <span className="errorMsg">{loginError}</span>
        <button type="submit" className="btn">Login</button>  
      </form>
    </div>
  )
}

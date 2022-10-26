import React,{useState,useRef} from 'react';

export default function Login() {
    const emailRef=useRef()//useRef -reference element inside our html
    const passwordRef=useRef()
    const [emailError, setEmailError] = useState('')
      //Fuctions
      function handleLogin(e){
        const email=emailRef.current.value
        if(email===""){
           setEmailError("sdasdas")
        }
        console.log(email)
    }
  return (
    <div>
      <input type="email" ref={emailRef} placeholder='Email'/>
      <p>{emailError}</p>
      <input type="password" ref={passwordRef} placeholder='Password'/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

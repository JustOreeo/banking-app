import './App.css'
import Login from './components/Login';
import React,{useState,useEffect} from 'react';
const LOCAL_STORAGE_USERS="storedUsers";
function App() {
  const [users, setUsers]=useState([])
  const [admin, setadmin]=useState("")
  
  //useEffect
  useEffect(()=>{  
    const storedUsers=JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS))
    if(!storedUsers){
      console.log("Scenario 0")
      setadmin("false")
    }
    if(storedUsers){
      console.log("Scenario 1")
      console.log(storedUsers)
      //if there's a new registered user
      if(storedUsers>1){
        setUsers( prevUsers => [...prevUsers, ...storedUsers] );
      }else{
        setUsers(storedUsers)
      }

    }
    console.log("0 & 1.useEffect test run: If storedUsers is not existing(Scenario 0), if existing (Scenario 1)")
    },[])
  
    useEffect(()=>{  
      if(admin==="false"){
        setUsers(prevUsers=>[...prevUsers,{id:1, name:"Admin Admin",email:"admin@gmail.com",password:"01234567",accountType:"admin",balance:0}])
        console.log("Scenario 2")
      }
      console.log("2.useEffect test run: If admin(false) not existing, setUser(admin)")
    },[admin])

    useEffect(()=>{
      if(users.length===1){
        console.log("Scenario 3 ")
        localStorage.setItem(LOCAL_STORAGE_USERS,JSON.stringify(users))
      }
      console.log("3. useEffect test run: if admin is added to users, setItem(save to local storage)")
    },[users])
 
  return (
    <>
    <div className='container'>
      <Login Userlist={users}/>
    </div>
    
    </>
  )

}

export default App;

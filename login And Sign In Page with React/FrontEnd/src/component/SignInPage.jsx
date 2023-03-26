import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const SignInPage = () => {
  const navigate = useNavigate()
  const [msg,setMsg]= useState('')
  const [user,setUser] = useState({
      email: "",
      password: "",
      user_name: "",
      user_phone: 0  
  })
  const handelSubmit = ()=>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/user/addOne",user).then((result)=>{ navigate('/HomePage');console.log(result);})
          .catch((err)=>{setMsg('User Not Created')})
  }
  return (
    <div>
      <p>
        {msg}
      </p>
      <form onSubmit={handelSubmit}>
        <input type="email" placeholder='Email'  onChange={(e)=>{setUser({...user,email:e.target.value})}} required/><br />
        <input type="password" placeholder='Password'  onChange={(e)=>{setUser({...user,password:e.target.value})}}required/><br />
        <input type="text" placeholder='NickName' onChange={(e)=>{setUser({...user,user_name:e.target.value})}}required/><br />
        <input type="number" placeholder='Phone Number' onChange={(e)=>{setUser({...user,user_phone:e.target.value})}}required/><br />
        <input type="submit" value="Sign IN"/>
        <input type="button" value="Login" onClick={()=>{ navigate('/')}} />
        </form>
    </div>
  )
}

export default SignInPage
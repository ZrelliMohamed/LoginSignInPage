import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const SignInPage = ( {getUser}) => {
  const navigate = useNavigate()
  const [FormValidation,setFormValidation] =useState(false)
  const [msg,setMsg]= useState('')
  const [user,setUser] = useState({
      email: "",
      password: "",
      user_name: "",
      user_phone: 0  
  })
  const handelSubmit = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:8000/api/user/addOne",user)
    .then((result)=>{ navigate('/HomePage');getUser(user);})
    .catch((err)=>{setMsg('User Not Created')})
  }

  const ifVAlidateEmail =(e)=>{
    setUser({ ...user, email: e.target.value })
    setMsg('')
    setFormValidation(true)
   }
   const ifNotVAlidateEmail =()=>{
    setMsg('Email Not Validate')
    setFormValidation(false)
   }
   console.log(FormValidation,user,msg);
  return (
    <div>
      <p>
        {msg}
      </p>
      <form onSubmit={FormValidation ?handelSubmit : (e)=>{
       e.preventDefault()
        setMsg('FORM INVALID')}}>
        <input type="email" placeholder='Email'  onChange={(e) => { 
          /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{1,8}$/i.test(e.target.value)? ifVAlidateEmail(e) : ifNotVAlidateEmail()
          }} required /><br />
        <input type="text" placeholder='Password'  onChange={(e)=>{setUser({...user,password:e.target.value})}}required/><br />
        <input type="text" placeholder='NickName' onChange={(e)=>{setUser({...user,user_name:e.target.value})}}required/><br />
        <input type="number" placeholder='Phone Number' onChange={(e)=>{setUser({...user,user_phone:e.target.value})}}required/><br />
        <input type="submit" value="Sign IN"  />
        <input type="button" value="Login" onClick={()=>{ navigate('/')}} />
        </form>
    </div>
  )
}

export default SignInPage
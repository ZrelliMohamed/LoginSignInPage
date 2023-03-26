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
  return (
    <div>
      <p>
        {msg}
      </p>
        <input type="text" placeholder='Email'  onChange={(e)=>{setUser({...user,email:e.target.value})}}/><br />
        <input type="text" placeholder='Password'  onChange={(e)=>{setUser({...user,password:e.target.value})}}/><br />
        <input type="text" placeholder='NickName' onChange={(e)=>{setUser({...user,user_name:e.target.value})}}/><br />
        <input type="number" placeholder='Phone Number' onChange={(e)=>{setUser({...user,user_phone:e.target.value})}}/><br />
        <input type="button" value="Sign IN" onClick={()=>{
          axios.post("http://localhost:8000/api/user/addOne",user).then((result)=>{ navigate('/HomePage');console.log(result);})
          .catch((err)=>{setMsg('User Not Created');console.log(err);})
         
        }}/>
        <input type="button" value="Login" onClick={()=>{ navigate('/')}} />

    </div>
  )
}

export default SignInPage
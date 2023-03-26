import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
const LoginPage = () => {
    const navigate = useNavigate();
    const [msg,setMsg]= useState('')
    // const [Email,setEmail]= useState('')
    // const [password,setPassword]= useState('')
    const [data,setdata]= useState([])
    const [user,setUser]=useState({email:'',password:''})

    // console.log(data);
  return (
    <div>
        <p>{msg}</p><br />
       <input type="text"  placeholder='Email'  onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
       <input type="text"  placeholder='Password'  onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
       {/* <input type="text"  placeholder='Email'  onChange={(e)=>{setEmail(e.target.value)}}/>
       <input type="text"  placeholder='Password'  onChange={(e)=>{setPassword(e.target.value)}}/> */}
       <input type="button"  
       value='Login' onClick={()=>{
              axios.get(`http://localhost:8000/api/user/${user.email}/${user.password}`).then(({data})=>{
                setdata(data)
                if(data.length) navigate("/HomePage")
                else setMsg('User Not Found')
            }).catch((err)=>{
                setMsg('User Not Found')
              
            })
       }}/>
       <input type="button" value="SignIn"  onClick={()=>{navigate("/SignIn")}}/>

    </div>
  )
}

export default LoginPage
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
const LoginPage = ({ getUser }) => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('')
  // const [Email,setEmail]= useState('')
  // const [password,setPassword]= useState('')
  const [data, setdata] = useState([])
  const [user, setUser] = useState({ email: '', password: '' })
  const handelSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/api/user/${user.email}/${user.password}`).then(({ data }) => {
      setdata(data)
      if (data.length) { navigate("/HomePage"); getUser(user) }
      else setMsg('User Not Found')
    }).catch((err) => {
      setMsg('User Not Found')

    })
  }
   const ifVAlidate =(e)=>{
    setUser({ ...user, email: e.target.value })
    setMsg('')
   }
   console.log(user);
  return (
    <div>
      <form onSubmit={handelSubmit} >
        <p>{msg}</p><br />
        <input type="email" placeholder='Email' onChange={(e) => { 
          /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{1,8}$/i.test(e.target.value)? ifVAlidate(e) : setMsg("Email not Valide")
          }} required />
        <input type="password" placeholder='Password' onChange={(e) => { setUser({ ...user, password: e.target.value }) }} required />
        {/* <input type="text"  placeholder='Email'  onChange={(e)=>{setEmail(e.target.value)}}/>
       <input type="text"  placeholder='Password'  onChange={(e)=>{setPassword(e.target.value)}}/> */}
        <input type="submit" value='Login' />
        <input type="button" value="SignIn" onClick={() => { navigate("/SignIn") }} />
      </form>
    </div>
  )
}

export default LoginPage
import LoginPage from "./component/LoginPage.jsx"
import {Route,Routes,Link} from 'react-router-dom'
import HomePage from "./component/HomePage.jsx"
import SignInPage from "./component/SignInPage.jsx"
import { useState } from "react"
function App() {
    const [user,setUser]=useState({})
    //function that get User 
    const getUser=(option)=>{
      setUser(option)
    }

  return (
   <div>
   

   <Routes>
    <Route  path="/" element={<LoginPage getUser={getUser}/>}/>
    <Route  path="/SignIn" element={<SignInPage getUser={getUser}/>}/>
    <Route  path="/HomePage" element={<HomePage user={user} />}/>
   </Routes>

   </div>
  )
}

export default App

import LoginPage from "./component/LoginPage.jsx"
import {Route,Routes,Link} from 'react-router-dom'
import HomePage from "./component/HomePage.jsx"
import SignInPage from "./component/SignInPage.jsx"
function App() {


  return (
   <div>
   

   <Routes>
    <Route  path="/" element={<LoginPage/>}/>
    <Route  path="/SignIn" element={<SignInPage/>}/>
    <Route  path="/HomePage" element={<HomePage/>}/>
   </Routes>

   </div>
  )
}

export default App

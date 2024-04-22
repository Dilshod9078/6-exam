import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/UnAuthentication/Login/Login'
import SignUp from './Pages/UnAuthentication/SignUp/SignUp'

function UnAuthentication({setToken, setSignUp}) {
  return (
     <Routes>
      <Route  path='/' element={<Login setToken={setToken}/>}/>
      <Route path='/sign-up' element={<SignUp setSignUp={setSignUp}/>} />
     </Routes>
  )
}

export default UnAuthentication
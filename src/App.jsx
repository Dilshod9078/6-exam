import { useState } from 'react'

import Authentication from './Authentication'
import UnAuthentication from './UnAuthentication'
import './App.css'

function App() {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
  const [signUp, setSignUp] = useState(JSON.parse(window.localStorage.getItem("newToken")) || false)

  if(signUp){
    if(token.login == signUp.newLogin && token.password == signUp.newPassword){
      return <Authentication/>
     }
     else{
      return <UnAuthentication setToken={setToken} setSignUp={setSignUp} />
     }
  }
else{
  if(token.login == "dilshod" && token.password == "0007"){
   return <Authentication/>
  }
  else{
   return <UnAuthentication setToken={setToken} setSignUp={setSignUp} />
  }
}
}


export default App

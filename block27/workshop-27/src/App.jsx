import { useState } from 'react'
import './App.css'
import SignupForm from './component/SignupForm'
import Authenticate from './component/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Authenticate tokenProp={token} setTokenProp = {setToken}/>
      <SignupForm tokenProp={token} setTokenProp={setToken}/>
    </>
  )
}

export default App

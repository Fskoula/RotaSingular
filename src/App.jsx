import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Onboarding from './components/onboarding/Onboarding'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Onboarding/>
      </div>
      

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Carregamento from './components/carregamento/carregamento'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ height: '100vh', width: '100%' }}>
        <Carregamento/>
        {/* <Home/> */}
        {/* <span>TESTE</span>
          */}
      </div>
    </>
  )
}

export default App

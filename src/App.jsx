import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Menu from './components/menu/menu'
import InicioRoteiro from './components/criar-roteiro/InicioRoteiro'
import InicioRoteiroPerg from './components/criar-roteiro/InicioRoteiroPerg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <InicioRoteiroPerg/>
        <Menu/>
      </div>
    </>
  )
}

export default App

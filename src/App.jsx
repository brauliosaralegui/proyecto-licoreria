import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navegacion from './components/Navegacion'
import Principal from './components/Principal'
import Footer from './components/Footer'
import ListadoItems from './components/ListadoItems'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Header/>
      <Navegacion/>
      <Principal/>
      <ListadoItems/>
      <Footer/>
    </>
  )
}

export default App

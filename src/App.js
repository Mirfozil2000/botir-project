import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/footer'
import Main from './Components/Main/main'
import Home from './Components/Home/home'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
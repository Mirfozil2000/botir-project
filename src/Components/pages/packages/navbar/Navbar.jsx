import React, { useState } from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiOutlinePhone, AiOutlineCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import logo from '../../Assets/icon.png'

const Navbar = () => {
  const [active, setActive] = useState ('navBar')
  
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  } 
  
  const removeNavbar = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className="logoDiv">
          <a href="#" className="logo">
             <h1>{/*<img src={logo} className="icon" /> */} <SiYourtraveldottv className=" icon"/>  Cheap Trip.</h1> 
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
          <li className="navItem">
              <a href="#" className="navLink">Home</a>
          </li>
          
          <li className="navItem">
              <a href="/packages" className="navLink">Packages</a>
          </li>
          
          <li className="navItem">
              <a href="/shop" className="navLink">Shop</a>
          </li>
          
          <li className="navItem">
              <a href="/about" className="navLink">About</a>
          </li>
          <li className="navItem">
              <a href="/news" className="navLink">News</a>
          </li>

          <li className="navItem">
              <a href="/contacts" className="navLink">Contacts</a>
          </li>

          <button className='btn'>
            BOOK NOW
          </button>
          
          </ul>

          <div onClick={removeNavbar} className='closeNavbar'><AiOutlineCloseCircle className="icon"/></div>
        </div>

        <div onClick={showNav} className="toogleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  )
}

export default Navbar
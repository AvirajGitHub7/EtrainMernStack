import React, { useEffect, useState } from 'react'
import {Link as ScrollLink} from "react-scroll"
import { Link  as RouterLink} from "react-router-dom";
import Login from './login.jsx';


function Navbar() {
  const [sticky,setsticky]=useState(false);

  useEffect(()=>{
   const handlescroll=()=>{
    if(window.scrollY>0){
      setsticky(true);
    }else{
      setsticky(false);
    }
  }
  window.addEventListener("scroll",handlescroll);

   return()=>{
    window.removeEventListener("scroll",handlescroll);
  };
   
   },[]);

  console.log("Sticky State: ", sticky);
  return (
    <>
     <div className="h-16"></div>
     <div className=" max-w-screen-2xl mx-auto px-4 md:px-20  bg-white">

       <div className={`navbar fixed top-0 left-0 w-full bg-white z-50 shadow-md transition-all duration-300 ${sticky ? "py-3" : "py-4"}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            
        <li><ScrollLink to="Home" smooth={true} duration={500} spy={true} >Trains</ScrollLink></li>
      <li>
        <a>RailSwift e-wallet</a>
      </li>
      <li> <ScrollLink to="Hotels" smooth={true} duration={500} spy={true}>Hotels</ScrollLink></li>
      <li><ScrollLink to="Holidays" smooth={true} duration={500} spy={true}>Holidays</ScrollLink></li>
      <li><a>More</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Rail<span className="text-blue-600">Swift</span></a>

  </div>

  {/*Desktop*/}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
      <li><ScrollLink to="Home" smooth={true} duration={500} spy={true} >Trains</ScrollLink></li>
      <li>
        <a>RailSwift e-wallet</a>
      </li>
      <li> <ScrollLink to="Hotels" smooth={true} duration={500} spy={true}>Hotels</ScrollLink></li>
      <li><ScrollLink to="Holidays" smooth={true} duration={500} spy={true}>Holidays</ScrollLink></li>
      <li><a>More</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn"  onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</a>
  </div>
  <Login/>
</div>
     </div>
   
    </>
  )
}

export default Navbar

import React, {useState} from "react";
// import React from "react";
import logo from "../images/afrimaLogo.png"
import {Link} from 'react-router-dom'
import { Fade as Hamburger } from 'hamburger-react'



function Navbar() {
const [navBarOpen, setNavbarOpen] = useState(false);
const handleToggle = () => {
  
  setNavbarOpen(!navBarOpen)
}

console.log(navBarOpen, "___")

  return (
    <div className="navBarContainer">
      <div className="logoWrapper">
        <Link to ='/'>
        <img src = {logo} alt ="" className="logo"/>
        </Link>
        <span className = "hamburger" onClick = {() => handleToggle()}><Hamburger/></span>
        <ul className={navBarOpen ? "showMenu" : "linksWrapper"}>
          <li className="navList"><Link to ='/' className="about">About</Link></li>
          <li className="navList"><Link to = '/events' className="events">Events</Link></li>
          {/* <li><Link to= "/faq" className="faq">FAQ</Link></li>
          <li><Link to ='/sponsors' className="sponsors">Sponsors & Exhibitors</Link></li> */}
        </ul>
      </div>
      <form className="form">
        <input className="formInput"></input>
        <button className="button">My Afrima</button>
      </form>
    </div>
  );
}

export default Navbar;

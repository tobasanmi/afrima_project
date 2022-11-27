import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navBarContainer">
      <div className="logoWrapper">
        <h1 className="logo">Logo</h1>
        <ul className="linksWrapper">
          <li><Link to ='/' className="about">About us</Link></li>
          <li><Link to = '/events' className="events">Events</Link></li>
          <li><Link to= "/faq" className="faq">FAQ</Link></li>
          <li><Link to ='/sponsors' className="sponsors">Sponsors & Exhibitors</Link></li>
        </ul>
      </div>
      <form className="form">
        <input className="formInput"></input>
        <submit className="button">My Afrima</submit>
      </form>
    </div>
  );
}

export default Navbar;

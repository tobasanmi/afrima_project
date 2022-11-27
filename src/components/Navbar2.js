import React from 'react'
import {Link} from 'react-router-dom'


 function Navbar2() {
  return (
    <div className='navBar2Wrapper'>
      <h1>CREATIVE AFRICA NEXUS WKND</h1>
      <div>
      <ul className='navBar2ListContainer'>
            <li><Link to ='/attend'>Attend</Link> </li>
            <li><Link to = '/programme'>Programme</Link></li>
            <li><Link to = 'market&exhibition'>Market & Exhibition</Link></li>
            <li><Link to = 'sponsorship'>Sponsorship Opportunities</Link></li>
        </ul>
      </div>
        
    </div>
  )
}

export default Navbar2;

import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
        <div className='list-items'>
            < img src='https://im1.dineout.co.in/images/uploads/misc/2023/Jun/19/swiggy_dineout_logo.png'alt=""/>
            
    </div>
            <div className='list'>
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li>  <li><Link to="/Book">Book a table </Link></li></li>
                    <li><Link to='/Blog'>Blog</Link></li>
                </ul>
            <button>Login</button>
            </div>

            
        </div>

  )
}

export default Navbar
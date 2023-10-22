import React from 'react'
import './Searchbar.css';

function Searchbar() {
  return (
    <div className='image-search'>
        <img src='https://im1.dineout.co.in/images/uploads/misc/2021/Mar/31/oldherobannerwebfinal_bau.jpg'alt=""/>
        <div className='search-bar'>
        <h1>IT'S  NOW SAFE TO<span> CRAVE!</span></h1>
        <div className="input-container">
           
            <input type="text" placeholder="Search for Resturent,Cuisines,Location..."/>
            <button>Search</button>
        </div>
        </div>
        </div>

  )
}

export default Searchbar
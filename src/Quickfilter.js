import React from 'react';
import './Quickfilter.css';

function Quickfilter() {
  return (
    <div className="p-filterlist">
      <div className='div-box'>
        <div className='filterlist1'>
          <p className='pa'>Quick Filters</p>
          <input type="search" placeholder="Search" className='search-box' />
        
        <div className='checkbox'>
          <label>
            <input type="checkbox" /> Dineout pay
          </label>
          <label>
            <input type="checkbox" /> Pure veg
          </label>
          <label>
            <input type="checkbox" /> 5 star
          </label>
          <label>
            <input type="checkbox" /> Buffet
          </label>
          <p className='show'>Show More</p>
        </div>
        </div>
      
      <div className='Cuisines'>
        <h3>Cuisines</h3>
        <input type="search" placeholder='Search'className='search-box' />
        <ul>
          <li>North Indian</li>
          <li>Chinese</li>
          <li>Fast Food</li>
          <li>Desserts</li>
        </ul>
        <p className='show'>Show More</p>
      </div>
      <div className='block'>
      <div className='Tags'>
        <h3>Tags</h3>
        <input type="search" placeholder="Search"  className='search-box'/>
        <div className='checkbox3'>
          <label>
            <input type="checkbox" /> Casual Dining
          </label>
          <label>
            <input type="checkbox" /> Casual Dining
          </label>
          <label>
            <input type="checkbox" /> Casual Dining
          </label>
          <label>
            <input type="checkbox" /> Casual Dining
          </label>
          <p className='show'>Show More</p>
        </div>
      
      </div>
     
      <p><span>Top 10 Resturent in bangalore</span></p>
      </div>
    </div>
    
    </div>
  )
}
export default Quickfilter;

import React from 'react'
import './Bestoffers.css';

function Bestoffers() {
  return (
    <div className='offers'>
      <h2>Best offers</h2>
      <div className='cards'>
      
        <div className='card-box'>
        <div className='card1'>
            <p className='p'>FLAT</p>
            <p><span>30</span>%off</p>
            <p className='instant'>INSTANT<br></br>DISCOUNT</p>
        </div>

        </div>
        <div className='card-box'>
        <div className='card2'>
            <p className='p'>FLAT</p>
            <p><span>20</span>%off</p>
            <p className='instant'>INSTANT<br></br>DISCOUNT</p>
        </div>
      </div>
      <div className='card-box'>
        <div className='card3'>
            <p className='p'>FLAT</p>
            <p><span>15</span>%off</p>
            <p className='instant'>INSTANT<br></br>DISCOUNT</p>
        </div>
      </div>
      <div className='card-box'>
        <div className='card4'>
            <p className='p'>FLAT</p>
            <p><span>10</span>%off</p>
            <p className='instant'>INSTANT<br></br>DISCOUNT</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Bestoffers

import React from 'react'
import'./Bookimages.css'

import bimages from './Bimages.json'
function Bookimages() {
  return (
    <div className='red'>
        <div className='heading'>
        <h1 className='h1'>Best Resturent Near Me in Bangalore</h1> 
    
        </div>
        
        <div className='images2'>

        {bimages.map((bimage)=>
        <div key={bimage.key} className='border-image'>
          <img src={bimage.url} alt={bimage.discrption} style={{width:"300px",height:"200px"}}/>
          <p>{bimage.discrption}</p>
        </div>
        )}
      </div>

    </div>
  )
}

export default Bookimages

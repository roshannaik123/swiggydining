import React, { useState } from 'react';
import images from './Images.json';
import './Resturentlist.css';

function Restruentlist() {
  const [visibleImages, setVisibleImages] = useState(0);
  const imagesPerPage = 4;
  

  const showImages = () => {
    setVisibleImages((prevIndex) => prevIndex + imagesPerPage);
  };
  const showprevImages=()=>{
    setVisibleImages((prevIndex)=>prevIndex - imagesPerPage);
  };

  return (
    <div className='rest-list'>
      <h1>Restaurants near me</h1>
      {visibleImages > 0 &&(
      <button className='prev-button' onClick={showprevImages}>prev</button>
      )}
      <div className='image-list'>
        {images.slice(visibleImages, visibleImages + imagesPerPage).map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={image.disciption}style={{width:"250px",height:"200px"}} />
            <p>{image.disciption}</p>
          </div>
        ))}
        {visibleImages + imagesPerPage < images.length && (
          <button className= 'next-button' onClick={showImages}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Restruentlist;
import React from 'react'
import './Book.css';
import Quickfilter from './Quickfilter'
import Bookimages from './Bookimages';
import Footer from './Footer';


function Book() {
  return (
    <div >
      <div className='book-my-table'>
      <Quickfilter className='quickfilter'/>
      <Bookimages  className='bookimages' />
      </div>
      <Footer className="footer"/>
    </div>
  )
}

export default Book

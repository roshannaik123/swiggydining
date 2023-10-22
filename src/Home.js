import React from 'react'
import Searchbar from './Searchbar'
import Bestoffers from './Bestoffers'
import Restruentlist from './Restruentlist'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Searchbar/>
   <Bestoffers/>
   <Restruentlist/>
   <Footer/>
    </div>
  )
}

export default Home

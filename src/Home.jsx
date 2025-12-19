import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import SearchBox from './SearchBox.jsx'
import Properties from './Properties'
import './Home.css'


function Home() {
  const[searchTerm,setSearchTerm]=useState('')
  return (
    <>
      <div className="home-container">
        <Navbar />
        <Hero />
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Properties searchTerm={searchTerm} />



      </div>
    </>
  )
}

export default Home

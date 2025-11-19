import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import './Home.css'


function Home() {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <Hero   />
        

        <main className="content">


        </main>

      </div>
    </>
  )
}

export default Home

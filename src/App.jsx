import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import New from './Components/New/New'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <New/>
      </div>
     
      
      
    </div>
  )
}

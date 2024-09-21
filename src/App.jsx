import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import New from './Components/New/New'
import Title from './Components/Title/Title'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <New/>
      </div>
     
      
      
    </div>
  )
}

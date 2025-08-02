import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testtimonial from '../components/Testtimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testtimonial/>
      <Plan/>
      <Footer/>
    </div>
  )
}

export default Home

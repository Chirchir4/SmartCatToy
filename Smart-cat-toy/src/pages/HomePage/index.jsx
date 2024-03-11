import React from 'react'
import NavBar from '../partials/Navbar'
import HeroSection from './HeroSection'
import ProductDescription from './ProductDescription'
import Testimonials from './Testimonials'
import Footer from '../partials/Footer'

const Home = () => {
  return (
    <div className=" overflow-y-hidden overflow-x-hidden">
      <>     

 <HeroSection/>
 <ProductDescription/>
 <Testimonials/>

 </>
    </div>
  )
}

export default Home
import React from 'react'
import Hero from './Hero'
import AboutSection from './AboutSection'
import Services from './Services'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutSection />
        <Services />
        {/* <AboutSection />
        <AboutSection />
        <AboutSection /> */}
    </div>
  )
}

export default Home
import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/homePage/banner'

const HomePage = () => {
  return (
    <div className='bg-gradient-to-b from-[#E5AD2A] via-[#CC8A2E] to-[#B2A72A]'>
      <NavBar topic="Home"/>
      <Banner/>
    </div>
  )
}

export default HomePage

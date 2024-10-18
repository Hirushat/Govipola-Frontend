import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/homePage/banner'
import SelectOption from '../components/homePage/SelectOption'

import MillersBg from '../assets/millersBg.png'
import BuyersBg from '../assets/buyersBg.png'
import MyStockBg from '../assets/myStock.png'


const FarmerHomePage = () => {
  return (
    <div className='bg-gradient-to-b from-[#E5AD2A] via-[#CC8A2E] to-[#B2A72A] h-screen'>
      <NavBar topic="Home"/>
      <Banner/>
      <SelectOption path1="/miller-details" path2="/middleman-details" img1={MillersBg} img2={BuyersBg} img3={MyStockBg} topic1="Mills" topic2="Buyers" topic3="Add Stock"/>
    </div>
  )
}

export default FarmerHomePage

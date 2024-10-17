import React from 'react'
import UserList from '../components/useList/UserList'
import middleManBg from '../assets/middlemanBg.png'

const BuyersList = () => {
  return (
    <div className="flex flex-col w-screen h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${middleManBg})` }}>
      <UserList user = "middlemen"/>
    </div>
  )
}

export default BuyersList
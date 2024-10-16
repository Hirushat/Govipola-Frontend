import React, {useState} from 'react'
import logo from '../assets/Logo.png'
import userImg from '../assets/user.png'

const LoginPage = () => {

    
  return (
    <div className='bg-gradient-to-b from-[#A5C9AF] via-[#749871] to-[#CCE887] h-screen'>
    {/* Header with Logo */}
    <div className='flex items-center px-[1%] h-15 bg-white bg-opacity-30 py-2'>
      <img src={logo} alt="Logo" className='h-[60px] w-[60px]' />
    </div>
  
    {/* Main Content: User Image and Inputs */}
    <div className='flex flex-col items-center mt-[10%]'>
      <img src={userImg} alt="User Icon" className='h-[100px] w-[100px]' />
  
      {/* Username Input */}
      <input 
        type="text" 
        placeholder='username' 
        className='rounded-2xl w-[17%] px-4 h-[40px] mt-5' 
      />
  
      {/* Password Input */}
      <input 
        type="password" 
        placeholder='password' 
        className='rounded-2xl w-[17%] px-4 h-[40px] mt-5' 
      />
  
      {/* Remember Me Checkbox */}
      <div className='flex flex-row mt-[1%]'>
        <input type="checkbox" />
        <p className='ml-2'>Remember me</p>
      </div>
  
      {/* Login Button */}
      <button className='bg-[#30A395] rounded-2xl py-[10px] px-[70px] mt-[2%] font-bold'>
        Login
      </button>
    </div>
  </div>
  
  )
}

export default LoginPage

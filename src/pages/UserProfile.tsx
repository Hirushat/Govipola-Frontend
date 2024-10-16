import React, { useContext } from 'react'
import { UserContext } from '../components/UserContext';

const UserProfile = () => {

    const { logout, user } = useContext(UserContext) || {}; // Access logout function and user from context

    let logedUser = user

    function log(){
        console.log(logedUser)
    }
    
  return (
    <div className='bg-gradient-to-b from-[#A5C9AF] via-[#749871] to-[#CCE887] h-screen'>
        <button onClick={log}>log</button>
      
    </div>
  )
}

export default UserProfile

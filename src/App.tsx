import react from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import FarmerHomePage from './pages/FarmerHomePage'
function App() {

  return (
    <div className='flex flex-col'>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
        <Route path='/farmer/homepage' element={<FarmerHomePage/>}/>
        </Routes>
    </div>
  )
}

export default App

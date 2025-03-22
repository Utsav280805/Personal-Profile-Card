import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import profilePhoto from './assets/profile1.jpg'

function App() {
  
  return (
    <>
      <ProfileCard 
        name="Utsav" 
        photo={profilePhoto} 
        bio="A short bio about Utsav."
        
        
      />
    </>
  )
}

export default App

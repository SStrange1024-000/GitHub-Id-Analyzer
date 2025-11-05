import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  function handleGetStartButton(){
    navigate('/mainApp')
  }
  return (
    <div className='mainHome'>
        <div className="AppIntro">
            <h1 className='title'>GitHub ID Analyser</h1>
            <p className='AppDesc'>
                Enter any GitHub ID and instantly fetch profile details, repositories, and more. Simple, fast, and efficient!
            </p>
        <button className='btn1' onClick={handleGetStartButton}>Get Start</button>
        </div>

    </div>
  )
}

export default Home
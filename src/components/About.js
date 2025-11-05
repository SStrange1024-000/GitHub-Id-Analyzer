import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import negi from '../asset/negi.png';
import'./About.css';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate=useNavigate()
     const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div className='mainAbout'>
        <div className="header">
            <div className="backBtn" onClick={handleBack}><FaRegArrowAltCircleLeft className='backIcon'/></div>
            <h1 className="aboutTitle">About</h1>
        </div>        
        <div className="aboutContents">
            <div className="discription">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, officia!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nostrum 
                    repudiandae odit aut nihil
                </p>
            </div>
            <div className="aboutImages">
                <div className="image1"><img src={negi} alt="negi1" /></div>
                <div className="image2"><img src={negi} alt="negi1" /></div>
            </div>
        </div>
    </div>
  )
}

export default About
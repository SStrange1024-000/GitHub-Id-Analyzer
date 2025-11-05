import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { FaBars,FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);


    // ✅ Detect window resize in real-time
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      if (window.innerWidth > 480) {
        setIsOpen(false); // close mobile menu automatically when back to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const mobileStyle = {
    position: 'absolute',
    top: '50px',
    left: isOpen ? '0' : '-100%',
    width: '100%',
    backgroundColor: '#F39600',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px 0',
    transition: 'left 0.3s ease',
  };


  return (
    <nav>
        <div className="logo">
            <span>SLSTech</span>
        </div>
        
        <div className={`navElements ${isOpen ? 'active' : ''}`} style={window.innerWidth <= 480 ? mobileStyle : {}}>
          <Link to='/home'  className='link'><span>Home</span>
          </Link>
          <Link to='/about' className='link'><span>About</span></Link>
          <Link to='/contact' className='link'><span>Contact Us</span></Link>
        </div>
        {/* Toggle Icon */}
      <div className="nav-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  )
}

export default NavBar
import React from 'react'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { RxDividerVertical } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  
  const [isLogin, setIsLogin] = useState(true);

  const [inputPass, setCheckPass]=useState('');
  const [notis, setNotis]=useState('');

  const LoggDesign={
    color:'Blue'
  }

  const navigate=useNavigate();

  const handleBack=()=>{
    navigate(-1);
  }
// Handling Login Notisfications
  const handleLogin=function(e){
    e.preventDefault()
    inputPass==='Let1234'? setNotis('Successfully LoggedIn'): setNotis('Forget Pass')
    
  }



  return (
    <div className='mainAbout'>
            <div className="header">
                <div className="backBtn" onClick={handleBack}><FaRegArrowAltCircleLeft className='backIcon'/></div>
                <h1 className="aboutTitle">Contact</h1>
            </div> 
            <div className="formContainer">
              <div className="regLogToggleContainer">
                <h4 onClick={() => setIsLogin(false)} className={isLogin ? "active" : ""}>Registration</h4>
                <RxDividerVertical/>
                <h4 onClick={() => setIsLogin(true)} className={!isLogin ? "active" : ""} >Log In</h4>
              </div>
              {isLogin ? (
              <form >
                <input type="text" className='inputQuery1' placeholder='Enter Your Id'/>
                <input type="password" className='inputQuery1'placeholder='Enter Password' onChange={(e)=>setCheckPass(e.target.value)}/>
                <button className='btn2' onClick={handleLogin}>Log In</button>
                
              <div>
                <p className={notis==='Let1234'? LoggDesign : ''}>{notis}</p>
              </div>
              </form>):(
                
              <form >
                <div>
                <label for='Uname'>Name :</label>
                <input type="text" className='inputQuery1' placeholder='Enter Your Name' name='Uname'/>
                </div>

                <div>
                <label for='email'>Email :</label>
                <input type="email" name='email' className='inputQuery1' placeholder='Enter Email'/>
                </div>

                <div>
                <label for='pass'>Set Key :</label>
                <input type="text" name='pass' className='inputQuery1' placeholder='Set Password'/>
                </div>

                <button className='btn2'>Registration</button>
              </form>
            )}
              
            </div>

    </div>
  )
}

export default Contact
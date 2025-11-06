import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountData, fetchReposData, laodAccount } from '../Slices/AccountSlice';


function MainApp() {

  const [userId,setUserId]=useState('');
  const dispatch=useDispatch();
  // const {user,loading, error}= useSelector((state)=>state.github);
  const navigate=useNavigate()

     const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  
    // const handleSearch = (e)=>{
    //   e.preventDefault()
    //   if(!userId) return;
    //   dispatch(fetchAccountData(userId))
    // };
    
  const handleSearch = (e) => {
    e.preventDefault();
    if (!userId.trim()) return;

    // Dispatch thunk to fetch user data
    dispatch(fetchAccountData(userId));
    dispatch(fetchReposData(userId));

    // Navigate to Result page
    navigate('/result');    
  };
  

  return (
    <div className='mainApp mainHome'>
            <div className="header">
                <div className="backBtn" onClick={handleBack}><FaRegArrowAltCircleLeft className='backIcon'/></div>
                {/* <h1 className="aboutTitle">GitHub ID Analyser</h1> */}
            </div>
            <div className="mainAppContents AppIntro">
            <h1 className="title">Github ID Analyser</h1>

            <form onSubmit={handleSearch}>
              <input type="text" value={userId} className='inputQuery' onChange={(e)=>setUserId(e.target.value)}/>
              <input type="submit" className='btn1' value='Search' />
            </form>
            <p>Sign in to get the access of other tools</p>
            </div>
    </div>
  )
}

export default MainApp
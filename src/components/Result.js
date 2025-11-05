import React from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Loading.css'

function Result() {
    const navigate=useNavigate()
  const { account, status, error } = useSelector((state) => state.github);
  const repos = useSelector((state) => state.github.repos);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <FailedFetch/>;
  if (!account) return <p>No account data found. Search first!</p>;

  // Handle GitHub 404
  if (account.message) return <p style={{ color: 'red' }}>{account.message}</p>;

    const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div style={{ marginTop: '20px' }}>
        <h1 className='title2'>Search Result</h1>
                <div className="header">
                    <div className="backBtn" onClick={handleBack}><FaRegArrowAltCircleLeft className='backIcon'/></div>
                    {/* <h1 className="aboutTitle">GitHub ID Analyser</h1> */}
                </div>

                <div className="userIdConatiner">
                    <div className="userID">
                      <div className="imgContainer">
                        <img src={account.avatar_url} alt="userImag" />
                        </div>
                        <h1>{account.name}</h1>
                        <h2>{account.login}</h2>
                    </div>
                    <div className="userBio">
                      <p>{account.bio}</p>
                      <p>
                        Followers : {account.followers} | Following: {account.following}
                      </p>
                      <p>Public Repos : {account.public_repos}</p>
                      <p>Account Created on : {account.created_at}</p>
                      <p>Last Time Updated At : {account.updated_at}</p>
                    </div>
                </div>    

                <div className="userIdConatiner " >
                 <div>
                  <h1 className='title'>Repos</h1>
                  {repos.map((item,index)=>
                 <div className="reposContainer" key={index}>
                  <div>
                    <div className="reposInfo">

                      <div className="reposInfo2">
                      <h2>{item.name}</h2>
                      <h4>{item.description}</h4>
                      </div>

                      <div className="reposButton">
                        <button className='btn1' onClick={() => window.open(item.html_url, '_blank')}>Project</button>
                      </div>
                      
                    </div>
                  </div>

                 </div>
                 )}</div>
                </div>
    </div>
  );
}

export default Result;

function FailedFetch(){
  const navigate=useNavigate()
  const { error } = useSelector((state) => state.github);

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <>
    <div className='failedMainCSS'>
      <div className="header">
                    <div className="backBtn" onClick={handleBack}><FaRegArrowAltCircleLeft className='backIcon'/></div>
                    {/* <h1 className="aboutTitle">GitHub ID Analyser</h1> */}
      <h3 style={{ color: 'red' }}>{error}</h3> <br />
      <h4>click on arrow to go back to search</h4>
                </div>

    </div>
    </>
  )
}

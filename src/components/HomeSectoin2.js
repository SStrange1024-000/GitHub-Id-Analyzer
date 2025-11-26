import React from 'react';
import negi from '../asset/negi.png';
import './HomeSection2.css';
import { Bar } from 'react-chartjs-2';

function HomeSectoin2() {
  return (
    <div className='homeSection2'>
        <h1 className='title2'>Instructions</h1>

        <div className="imageContainer">

            <div className="instructionContainer">
                <img src={negi} alt="instrution" />
                <h1>Step 1</h1>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus at esse hic tempore? Tenetur, vitae!</p>
            </div>

            <div className="instructionContainer">
                <img src={negi} alt="instrution" />
                <h1>Step 2</h1>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus at esse hic tempore? Tenetur, vitae!</p>
            </div>

            <div className="instructionContainer">
                <img src={negi} alt="instrution" />
                <h1>Step 3</h1>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus at esse hic tempore? Tenetur, vitae!</p>
            </div>
            
        </div>

    </div>
  )
}


export default HomeSectoin2
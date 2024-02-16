import '../styles/header.css';
import React, { useState } from 'react';


export default function Navbar(){
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='nav'>
    <input type='checkbox' class='menuBtn' id='menuBtn' hecked={isChecked}
        onChange={handleCheckboxChange}/>
    <div className='visible'>
        <label for='menuBtn' class='menuIcon'>
          <span class='navIcon'></span>
        </label>
        <a href='/'><h1>Agenda 2030</h1></a>
      </div>
        <div className='menu' >
          <div className='list'>
            <ul>
              <li><a href='/' data-text="Home">Home</a></li>
              <li><a href='/obiettivo1' data-text="Obiettivi">Obiettivi</a></li>
              <li><a href='/quiz' data-text="Quiz">Quiz</a></li>
            </ul>
          </div>
          <style jsx>{`
            body {
              ${isChecked ? `overflow: hidden;` : `overflow: auto;`}
            }
            .navIcon{
              ${isChecked ? `background-color: transparent;`: `background-color: black;`}
            }
            .navIcon::before{
              ${isChecked ? `transform: rotate(-45deg); top: 0;`: `transform: rotate(0); top: 5;`}
            }
            .navIcon::after{
              ${isChecked ? `transform: rotate(45deg); bottom: 0;`: `transform: rotate(0); bottom: 5;`}
            }
      `}</style>
      </div>
  </div>
  );
};

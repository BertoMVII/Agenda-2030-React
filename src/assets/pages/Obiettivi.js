// Obiettivi.js
import React from 'react';
import '../styles/obiettivi.css'
import obiettiviData from '../../assets/data/obiettivi.json';

const ObiettiviComponent = ({ obiettivoKey }) => {
 
  const obiettivo = obiettiviData[obiettivoKey];
    //This alert should be pointless cause if the path is wrong it automatically gets redirected to home
    // Edit: it wasn't pointless
  if (!obiettivo) {
    return alert("L'obiettivo non è stato trovato. Se leggi questa schermata scrivi a Sorin :) ");
  }
  const renderList = (list) => (
    <ul>
      {list.split('/').map((item, index) => (
        <li key={index}>
          <a>{item.trim()}</a>
        </li>
      ))}
    </ul>
    );
  return (
    <div className='containerObiettivo'>
    <header style={{ backgroundColor: obiettivo.color,}}>
      <h1 className='title container specific-goal-title'>{obiettivo.title}</h1>
    </header>
    <div className='container' id='json-goal-content'>
      <h2 className='subtitle adjust-goal-container'>{obiettivo.subtitle1}</h2>
      <p className='paragraph adjust-goal-container'>{obiettivo.paragraph1}</p>
      <a className='list adjust-goal-container'>{renderList(obiettivo.list1)}</a>
      <img className='goal-image adjust-goal-container' src={obiettivo.image1}/>
      <h2 className='subtitle adjust-goal-container'>{obiettivo.subtitle2}</h2>
      <p className='paragraph adjust-goal-container'>{obiettivo.paragraph2}</p>
      <a className='list adjust-goal-container'>{renderList(obiettivo.list2)}</a>
      {/* Render other properties as needed */}
    </div>
    </div>
);
};

export default ObiettiviComponent;



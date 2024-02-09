// Obiettivi.js
import React from 'react';
import obiettiviData from '../../assets/data/obiettivi.json';

const ObiettiviComponent = ({ obiettivoKey }) => {
  const obiettivo = obiettiviData[obiettivoKey];
    //This alert should be pointless cause if the path is wrong it automatically gets redirected to home
    // Edit: it wasn't pointless
  if (!obiettivo) {
    return alert("L'obiettivo non è stato trovato. Se leggi questa schermata scrivi a Sorin :) ");
  }

  return (
    <div>
      <h1>{obiettivo.title}</h1>
      <h2>{obiettivo.subtitle}</h2>
      <p>{obiettivo.paragraph}</p>
      {/* Render other properties as needed */}
    </div>
  );
};

export default ObiettiviComponent;

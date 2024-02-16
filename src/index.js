// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './global.css';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import Obiettivi from './assets/pages/Obiettivi';
import Quiz from './assets/pages/Quiz';
import obiettiviData from './assets/data/obiettivi.json';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        {Object.keys(obiettiviData).map((key) => {
          const routePath = `${key}`;
          {/*I apologize to future me who's gonna look into this -Sorin*/}
          return <Route key={key} path={routePath} element={<Obiettivi obiettivoKey={key} />} />;
        })}
        {/* If wrong path redirect to home, !important: add alert (with return statement, DON'T use a hook, after redirection when url failed*/}
        <Route path="*" element={<Navigate to="/" /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);

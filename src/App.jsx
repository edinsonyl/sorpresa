import React, { useState } from 'react';
import './App.css';

import Carga from './assets/carga.mp4';
import Img1 from './assets/img1.jpg';
import Perrito from './assets/perrito.jpg';
function App() {
  const [loading, setLoading] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  document.body.style=`background-color:#f8de7e`;
  const handleButtonClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowBackground(true);
    }, 14000); 
  };
  
  
  return (
    <div className="App">
      {showBackground ? (
        <div className="background">
          <img src={Img1} alt="" />
          <div className="Perritocontainer"><img src={Perrito} alt="" /></div>
          <h2>Toma mi princesita para la mas hermosa de todo el mundo </h2>
          <h3>Te amo mucho <i class="em em-sparkling_heart" aria-role="presentation" aria-label="SPARKLING HEART"></i></h3>
        </div>
      ) : loading ? (
        <div className="loading-screen">
          <div className="video-container">
            <video src={Carga} autoPlay loop></video>
            <p>Entonces ahi voy esperame <i class="em em-heart_eyes" aria-role="presentation" aria-label="SMILING FACE WITH HEART-SHAPED EYES"></i> </p>
           
          </div>
        </div>
      ) : (
        <div className="content">
           
          <h1>¿Estás lista mi amor?</h1>
          <button onClick={handleButtonClick}>Sí</button>
          
        </div>
      )}
    </div>
  );
}

export default App;

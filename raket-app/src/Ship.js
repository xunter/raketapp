import React from 'react';
import shipGraphic from './graphic/ship.svg';
//import './Earth.css';

function Ship() {
  return (
    <div className="st-ship"><img src={shipGraphic} alt="Ship" />
    </div>
  );
}

export default Ship;

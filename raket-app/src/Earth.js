import React from 'react';
import earthGraphic from './graphic/earth.svg';
//import './Earth.css';

function Earth() {
  return (
    <div className="st-earth"><img src={earthGraphic} alt="Earth" />
    </div>
  );
}

export default Earth;

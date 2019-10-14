import React from 'react';
import earthGraphic from './graphic/earth.svg';
//import './Earth.css';

function Earth(props) {
  return (
    <div className="st-earth">
      <div className="pos-rel">
      <img src={earthGraphic} alt="Earth" />
      {props.children}
      </div>
    </div>
  );
}

export default Earth;

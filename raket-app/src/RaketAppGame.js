import React from 'react';
import Earth from './Earth.js';
import Sputnik from './Sputnik.js';
import Moon from './Moon.js';

class RaketAppGame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="st-space">
        <Earth />
        <Moon orbitRadius="500" orbitCoordX="0" orbitCoordY="0" />
        <Sputnik orbitRadius="300" orbitCoordX="40" orbitCoordY="40" />
        <Sputnik orbitRadius="300" orbitCoordX="0" orbitCoordY="0" />
        <Sputnik orbitRadius="300" orbitCoordX="-40" orbitCoordY="-40" />

        <Sputnik orbitRadius="300" orbitCoordX="-40" orbitCoordY="40" />
        <Sputnik orbitRadius="300" orbitCoordX="40" orbitCoordY="-40" />

      </div>
    );
  }
}

export default RaketAppGame;

import React from 'react';
import Earth from './Earth.js';
import Ship from './Ship.js';
import Sputnik from './Sputnik.js';
import Moon from './Moon.js';

class RaketAppGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        sputniks: [
          {key: 1, velocity: 15, orbitRadius: 300, orbitCoordX: 0, orbitCoordY: 0 },
          {key: 2, velocity: 20, orbitRadius: 300, orbitCoordX: 0, orbitCoordY: 40 },
          {key: 3, velocity: 10, orbitRadius: 300, orbitCoordX: -40, orbitCoordY: 0 },
          {key: 4, velocity: 25, orbitRadius: 300, orbitCoordX: 0, orbitCoordY: -40 },
          {key: 5, velocity: 5, orbitRadius: 300, orbitCoordX: -40, orbitCoordY: -40 },
          {key: 6, velocity: 30, orbitRadius: 300, orbitCoordX: 40, orbitCoordY: 0 }
        ]
    };
  }

  render() {
    var sputniks = this.state.sputniks.map((s) => <Sputnik orbitRadius={s.orbitRadius} orbitCoordX={s.orbitCoordX} orbitCoordY={s.orbitCoordY} velocity={s.velocity} />);
    return (
      <div className="st-space">
        <Earth>
          <Ship />
        </Earth>
        <Moon orbitRadius="500" orbitCoordX="0" orbitCoordY="0" velocity="1" />
        {sputniks}


        <div className="btn-run-container">
          <button type="button">Запуск</button>
        </div>
      </div>
    );
  }
}

export default RaketAppGame;

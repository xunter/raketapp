import React from 'react';
import Earth from './Earth.js';
import Ship from './Ship.js';
import Sputnik from './Sputnik.js';
import Moon from './Moon.js';

import SputnikVelocityBar from './SputnikVelocityBar.jsx';

const SPUTNIK_ORBIT_RADIUS = 300;
const MOON_ORBIT_RADIUS = 500;

class RaketAppGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moon: {velocity:2},
        sputniks: [
          /*{key: 1, velocity: 15, orbitRadius: SPUTNIK_ORBIT_RADIUS, orbitCoordX: 0, orbitCoordY: 0 },
          {key: 2, velocity: 20, orbitRadius: SPUTNIK_ORBIT_RADIUS, orbitCoordX: 0, orbitCoordY: 40 },
          {key: 3, velocity: 10, orbitRadius: SPUTNIK_ORBIT_RADIUS, orbitCoordX: -40, orbitCoordY: 0 },
          {key: 4, velocity: 25, orbitRadius: SPUTNIK_ORBIT_RADIUS, orbitCoordX: 0, orbitCoordY: -40 },
          {key: 5, velocity: 5, orbitRadius: SPUTNIK_ORBIT_RADIUS, orbitCoordX: -40, orbitCoordY: -40 },
          {key: 6, velocity: 30, orbitRadius: SPUTNIK_ORBIT_RADIUS, orbitCoordX: 40, orbitCoordY: 0 }
          */
        ]
    };
  }

  handleMoonVelocityChanged = (moon, velocityNextValue) => {
    this.setState({ moon: { velocity: velocityNextValue } });
  };

handleVelocityChanged = (sputnik, velocityNextValue) => {
  let sputnikIndex = this.state.sputniks.indexOf(sputnik);
  let sputnikFromCollection = this.state.sputniks[sputnikIndex];
  let sputnikModified = Object.assign({}, sputnikFromCollection, { velocity: velocityNextValue });
  let sputniksModified = [...this.state.sputniks.slice(0, sputnikIndex), sputnikModified, ...this.state.sputniks.slice(sputnikIndex + 1, this.state.sputniks.length)];
  //let newSputniksArray = [...this.state.sputniks];
  //newSputniksArray.push(newSputnik);

  this.setState({ sputniks: sputniksModified });
};

  handleAddSputnik = () => {
    console.log("handleAddSputnik");
    let newSputnik = {
      key: new Date().getTime(),
      velocity: 1 + Math.floor(Math.random() * 24),
      orbitRadius: SPUTNIK_ORBIT_RADIUS,
      orbitCoordX: -50 + Math.random() * 100,
      orbitCoordY: -50 + Math.random() * 100,
    }
    let newSputniksArray = [...this.state.sputniks];
    newSputniksArray.push(newSputnik);

    this.setState({ sputniks: newSputniksArray });
  };

  handleSubSputnik = () => {

      console.log("handleSubSputnik");
      this.setState({ sputniks: this.state.sputniks.splice(1, this.state.sputniks.length - 1) });
  };

  render() {
    var sputniks = this.state.sputniks.map((s) => <Sputnik key={s.key} orbitRadius={s.orbitRadius} orbitCoordX={s.orbitCoordX} orbitCoordY={s.orbitCoordY} velocity={s.velocity} />);

    let sputnikConfigs = this.state.sputniks.map((s, index) => {
      return (
        <div key={s.key} className="bar-sputnik-config" style={{width:'20%', margin:'2% 0'}}>
          <div>
            <span><strong>Спутник {index + 1}</strong></span>
            <span style={{float:'right', color:'gray'}}>v : {s.velocity}</span>
          </div>

          <div>
            <SputnikVelocityBar sputnik={s} handleVelocityChanged={this.handleVelocityChanged} />
          </div>
        </div>
      );
    });

    return (
      <div className="st-space">

        <div className="game-layer">
          <Earth>
            <Ship />
          </Earth>
          <Moon orbitRadius="500" orbitCoordX="0" orbitCoordY="0" velocity={this.state.moon.velocity} />
          {sputniks}
        </div>

        <div className="config-layer">
          <div className="count-sputniks-config">
            <span style={{fontSize: '2em'}}>Спутники</span>&nbsp;
            <button type="button" style={ {backgroundColor: '#592d99', fontSize: '2em'} } onClick={this.handleSubSputnik}>-</button>&nbsp;
            <button type="button" style={ {fontSize: '2em'} } onClick={this.handleAddSputnik}>+</button>
          </div>


          <div className="bar-sputnik-config">
            {sputnikConfigs}
          </div>


          <div className="bar-moon-config">
            <div className="bar-sputnik-config" style={{width:'20%', margin:'2% 0'}}>
              <div>
                <span><strong>Луна</strong></span>
                <span style={{float:'right', color:'gray'}}>v : {this.state.moon.velocity}</span>
              </div>

              <div>
                <SputnikVelocityBar sputnik={this.state.moon} handleVelocityChanged={this.handleMoonVelocityChanged} />
              </div>
            </div>
          </div>

          <div className="btn-run-container">
            <button type="button">Запуск</button>
          </div>
        </div>
      </div>
    );
  }
}

export default RaketAppGame;

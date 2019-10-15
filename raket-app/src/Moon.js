import React from 'react';
import moonGraphic from './graphic/moon.svg';
import Orbit from './Orbit.js';
import Sputnik from './Sputnik.js';
//import './Earth.css';

class Moon extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {

    return (
      <Sputnik initialArcPos={this.props.initialArcPos} orbitCoordX={this.props.orbitCoordX} orbitCoordY={this.props.orbitCoordY} orbitRadius={this.props.orbitRadius} velocity={this.props.velocity} sputnikGraphic={moonGraphic} />
    );
  }
}

export default Moon;

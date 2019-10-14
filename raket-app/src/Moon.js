import React from 'react';
import moonGraphic from './graphic/moon.svg';
import Orbit from './Orbit.js';
//import './Earth.css';

class Moon extends React.Component {
  constructor(props) {
    super(props);

    let translateDeg = parseInt(Math.round(Math.random() * 360));
    let width = this.props.orbitRadius * 2;
    this.state = {
      coordX: 0,
      coordY: 0,
      translateDeg: translateDeg,
      cssStyle: { position: 'absolute', left:'50%', top:'50%', textAlign:'left', marginLeft: (-1*parseInt(this.props.orbitRadius) + parseInt(this.props.orbitCoordX)) + "px", marginTop: (-1*parseInt(this.props.orbitRadius) + parseInt(this.props.orbitCoordY)) + "px", transform:'rotate('+translateDeg+'deg)', width: width + 'px', height: width + 'px' },
      imgStyle: { marginTop: '-5%', marginLeft: this.props.orbitRadius + 'px', transform: 'rotate(30deg)' }
    };

  }

  componentDidMount() {
    //this.timerID = setInterval(() => this.timerTick, 100);
  }

  componentWillUnmount() {
    //this.timerID = clearInterval(this.timerID);
  }

  timerTick() {
    let prevX = this.state.coordX;
    let prevY = this.state.coordY;

    let actualX = 0;
    let actualY = 0;

    let v = this.props.v;

    let t = 100;

    let s = v * t / 1000;
    let r = this.props.radius;

    let va = v * sina;
    let w = va / r;

    let sina = (w * r) / (v);

    let angle = 180 * (s / (Math.PI * r));

    let distance = s;

    actualX = r * Math.sin(angle);
    actualY = r * Math.cos(angle);

    this.setState({ coordX: actualX, coordY: actualY });
  }

  render() {

    return (
      <div>
        <Orbit coordX={this.props.orbitCoordX} coordY={this.props.orbitCoordY} radius={this.props.orbitRadius} />
        <div className="st-moon" style={this.state.cssStyle}><img style={this.state.imgStyle} src={moonGraphic} alt="Moon" />

        </div>
      </div>
    );
  }
}

export default Moon;

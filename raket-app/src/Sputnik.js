import React from 'react';
import sputnikGraphic from './graphic/sputnik.svg';
import Orbit from './Orbit.js';
//import './Earth.css';

class Sputnik extends React.Component {
  constructor(props) {
    super(props);

    let translateDeg = this.props.initialArcPos;
    let width = this.props.orbitRadius * 2;
    this.state = {
      sputnikGraphic: this.props.sputnikGraphic ? this.props.sputnikGraphic : sputnikGraphic,
      coordX: 0,
      coordY: 0,
      translateDeg: translateDeg,
      cssStyle: { position: 'absolute', left:'50%', top:'50%', textAlign:'left', marginLeft: (-1*parseInt(this.props.orbitRadius) + parseInt(this.props.orbitCoordX)) + "px", marginTop: (-1*parseInt(this.props.orbitRadius) + parseInt(this.props.orbitCoordY)) + "px", transform:'rotate('+translateDeg+'deg)', width: width + 'px', height: width + 'px' },
      imgStyle: { marginTop: '-5%', marginLeft: this.props.orbitRadius + 'px', transform: 'rotate(30deg)' }
    };

  }

  componentDidMount() {
    this.timerID = setInterval(() => this.timerTick(), 50);
  }

  componentWillUnmount() {
    this.timerID = clearInterval(this.timerID);
  }

  timerTick() {
    /*
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

    */
    let newTranslateDeg = parseInt(this.state.translateDeg) + (Math.ceil(this.props.velocity / 8) * 1);
    //console.log(this.props.velocity);
    let newCssStyle = Object.assign({}, this.state.cssStyle, { transform: 'rotate('+newTranslateDeg+'deg)' }) ;
    this.setState({ translateDeg: newTranslateDeg, cssStyle: newCssStyle });

    this.props.shiftingCallback(this.props, this.state);
    //console.log("timer tick " + newTranslateDeg);
    //console.log(newCssStyle);

    //this.setState({ coordX: actualX, coordY: actualY });
  }

  render() {
    return (
      <div>
        <Orbit coordX={this.props.orbitCoordX} coordY={this.props.orbitCoordY} radius={this.props.orbitRadius} />
        <div className="st-sputnik" style={this.state.cssStyle}><img style={this.state.imgStyle} src={this.state.sputnikGraphic} alt="Sputnik" />

        </div>
      </div>
    );
  }
}

export default Sputnik;

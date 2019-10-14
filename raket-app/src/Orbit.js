import React from 'react';
//import earthGraphic from './graphic/earth.svg';
//import './Earth.css';

class Orbit extends React.Component {
  constructor(props) {
    super(props);

    let width = this.props.radius * 2;
    this.state = {
      coordX: 0,
      coordY: 0,
      cssStyle: { position: 'absolute', left:'50%', top:'50%', textAlign:'left', marginLeft: (-1*parseInt(this.props.radius) + parseInt(this.props.coordX)) + "px", marginTop: (-1*parseInt(this.props.radius) + parseInt(this.props.coordY)) + "px", transform:'rotate(0deg)', borderRadius: this.props.radius + 'px', border: '1px dashed #555', width: width + 'px', height: width + 'px' }
    };
  }

  render() {


    return (
      <div className="st-orbit" style={this.state.cssStyle}>
      </div>
    );
  }
}

export default Orbit;

import React from 'react';
import './SputnikVelocityBar.css';

const VELOCITY_MAX_VALUE = 25;
const VELOCITY_MIN_VALUE = 1;

class SputnikVelocityBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        velocityValue: props.sputnik.velocity,
        mouseStartX: -1,
        mouseStartY: -1,
        mouseEndX: -1,
        mouseEndY: -1
    };
  }

  handleBarClick = (event) => {
      let bar = event.target;
      if (bar.nodeName == 'BUTTON') {
        return;
      }
      if (bar.nodeName != 'DIV' && bar.className != "st-sputnik-velocity-bar bar-sputnik-velocity") {
        return;
      }
      console.log("handleBarClick: " + event.nativeEvent.offsetX);

      let barWidth = bar.clientWidth;
      let velocityToWidthKo = Math.ceil(barWidth / VELOCITY_MAX_VALUE);
      let velocityNextVal = Math.ceil( event.nativeEvent.offsetX / velocityToWidthKo ) + 1;

      if (velocityNextVal < 1) {
        velocityNextVal = 1;
      }
      if (velocityNextVal > VELOCITY_MAX_VALUE) {
        velocityNextVal = VELOCITY_MAX_VALUE;
      }

      this.setState({ velocityValue: velocityNextVal });

      this.setState({ mouseEndX: -1, mouseEndY: -1, mouseStartX: -1, mouseStartY: -1 });

      this.props.handleVelocityChanged(this.props.sputnik, velocityNextVal);
  };

  handleSputnikConfigMouseDown = (event) => {
    console.log("handleSputnikConfigMouseDown: " + event.target.nodeName);
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    let btn = event.target;
    let bar = btn.parentNode;
    let barWidth = bar.clientWidth;
    let btnPos = btn.offsetLeft;
    console.log("handleSputnikConfigMouseDown: " + btnPos);
    this.setState({ mouseStartX: btnPos, mouseStartY: event.nativeEvent.offsetY });
  };

  handleSputnikConfigMouseUp = (event) => {
    if (this.state.mouseStartX === -1) {
      return;
    }
    console.log("handleSputnikConfigMouseUp: " + event.nativeEvent.offsetX);
      this.setState({ mouseEndX: event.nativeEvent.offsetX, mouseEndY: event.nativeEvent.offsetY });
      
      let velocityNextVal = this.state.velocityValue;
      //let velocityNextVal = Math.ceil(mouseChange / velocityToWidthKo);
      if (velocityNextVal < 1) {
        velocityNextVal = 1;
      }
      if (velocityNextVal > VELOCITY_MAX_VALUE) {
        velocityNextVal = VELOCITY_MAX_VALUE;
      }

      this.setState({ velocityValue: velocityNextVal });

      this.props.handleVelocityChanged(this.props.sputnik, velocityNextVal);

      this.setState({ mouseEndX: -1, mouseEndY: -1, mouseStartX: -1, mouseStartY: -1 });
  };

  handleSputnikConfigMouseLeave = (event) => {
    console.log("handleSputnikConfigMouseLeave: " + event.target);
    this.setState({ mouseEndX: -1, mouseEndY: -1, mouseStartX: -1, mouseStartY: -1 });

    this.setState({ velocityValue: this.props.sputnik.velocity });
  };

  handleSputnikConfigMouseMove = (event) => {
    if (event.target.nodeName === "BUTTON") {
      return;
    }
    if (this.state.mouseStartX === -1) {
      return;
    }
      this.setState({ mouseEndX: event.nativeEvent.offsetX, mouseEndY: event.nativeEvent.offsetY });
      let btn = event.target;

      console.log("handleSputnikConfigMouseMove: " + event.nativeEvent.offsetX);

      let bar = btn.parentNode;
      let barWidth = bar.clientWidth;
      let velocityToWidthKo = Math.ceil(barWidth / VELOCITY_MAX_VALUE);
      let mouseChange = this.state.mouseEndX - this.state.mouseStartX;

      let velocityNextVal = Math.ceil( (event.nativeEvent.offsetX) / velocityToWidthKo );
      //let velocityNextVal = Math.ceil(mouseChange / velocityToWidthKo);
      if (velocityNextVal < 1) {
        velocityNextVal = 1;
      }
      if (velocityNextVal > VELOCITY_MAX_VALUE) {
        velocityNextVal = VELOCITY_MAX_VALUE;
      }

      this.setState({ velocityValue: velocityNextVal });

      //this.props.handleVelocityChanged(this.props.sputnik, velocityNextVal);
  };

  render() {
    let s = this.props.sputnik;
    return (
      <div className="st-sputnik-velocity-bar bar-sputnik-velocity" onClick={this.handleBarClick} onMouseDown={this.handleSputnikConfigMouseDown} onMouseUp={this.handleSputnikConfigMouseUp} onMouseMove={this.handleSputnikConfigMouseMove} onMouseLeave={this.handleSputnikConfigMouseLeave}>
        <button type="button" style={{left:(this.state.velocityValue - 2) * 4 + '%'}} className={"sputnik-velocity-value-"+s.velocity} onMouseDown={this.handleSputnikConfigMouseDown}>&nbsp;</button>
      </div>
    );
  }
}

export default SputnikVelocityBar;

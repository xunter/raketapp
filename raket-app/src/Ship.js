import React from 'react';
import shipGraphic from './graphic/ship.svg';
import { offset } from './utils.js';
//import './Earth.css';


class Ship extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 13
    };
  }

  componentDidMount() {
    let self = this;
    this.timerID = setInterval(() => {
      if (!self.props.launched) {
        return;
      }

      self.setState({ top: self.state.top - 1  });

      var shipElement = document.getElementById('ship');
      let earthElement = shipElement.parentNode;
      let shipOffset = offset(shipElement);

      self.props.runningCallback(shipElement, shipOffset);

      if (shipOffset.top + shipElement.offsetHeight < 0) {
        clearInterval(self.timerID);

        self.props.spaceLeftCallback();
      }
      //let absTop = earthElement.offsetTop
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="st-ship" id="ship" style={{top: this.state.top + '%'}}><img src={shipGraphic} alt="Ship" />
      </div>
    );
  }
}

export default Ship;

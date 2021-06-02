import React from 'react';

class ButtonCounter extends React.Component {
  constructor () {
    super ()
    this.state = {
      clickNumber: 0
    }
    this.buttonCounter = this.buttonCounter.bind(this);
  }

  buttonCounter = () => {
    this.setState((previousState, _props) => ({
      clickNumber: previousState.clickNumber + 1
    }))
    if (this.state.clickNumber % 2 !== 0) console.log('verde');
  }

  render () {
    return <button onClick = {this.buttonCounter}>{this.state.clickNumber}</button>
  }
}

export default ButtonCounter;
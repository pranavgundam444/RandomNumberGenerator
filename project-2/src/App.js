import {Component} from 'react';
import './App.css';

class numberGenerator extends Component {

  state = {
    randomNumber : 0,
  }

  generateRandomNumber = () => {
    const newNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber : newNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="App-header">
          <div className="card">
            <h1 className="head">Random Number</h1>
            <p className="head">Generate a random number in the range  0 - 100</p>
            <button className="button" type="button" onClick={this.generateRandomNumber}>Generate</button>
            <p className='head'>{randomNumber}</p>
          </div>
      </div>
    )
  }
}

export default numberGenerator;

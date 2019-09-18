import React, { Component } from 'react';
import './App.css';
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        value1: '',
        value2: '',
        value3: ''
      },
      result: ''
    }
  };

  handleChange = (e) => {
    this.setState({
      input: {
      ...this.state.input,
        [e.target.name]:  parseInt(e.target.value,10)? parseInt(e.target.value, 10): ''
      }
    })
  };

  add = () => {
    this.setState({
      result: Object.values(this.state.input).reduce((previous, current) => previous + current)
    })
  };

  format = () => {
    let value = this.state.result;

    if(Number.isNaN(value)) {
      return;
    }
    //Thousands
    if(value >= 1000 && value <= 999999){
        this.setState({result: (value / 1000).toPrecision(3) + 'K'});
    }
    // Millions
    if(value >= 1000000 && value <= 999999999){
        this.setState( {result: (value / 1000000).toPrecision(3) + 'M'});
    }
    // Billions
    if(value >= 1000000000 && value <= 999999999999){
        this.setState({result: (value / 1000000000).toPrecision(3) + 'B'});
    }
  };

  render() {
    return (
        <div>
          <Button calculate={this.add} value="Add" />
          <Button calculate={this.format} value="Format" />
          <div className="flex-container">
            {
              Object.keys(this.state.input)
                  .map((key,index) =>  <input key={key} className="flex-item" name={key} onChange={this.handleChange} value={this.state.input[key]}/>)
            }
            <input className="flex-item" value={this.state.result} readOnly name="result"/>
          </div>
        </div>
    );
  }
}

export default App;

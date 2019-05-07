import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Output from './Output/Output';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    userInput: '',
    description: ''
  }

  setValue = (event) => {
    this.setState({
      userInput: event.target.value
    });
    if (event.target.value.length > 5)
      this.setState({
        description: 'Text long enough'
      });
    else
      this.setState({
        description: 'Text too short'
      });

  }

  deleteChar = (index) => {
    const input = this.state.userInput.split('');
    input.splice(index,1);
    this.setState({
      userInput: input.join('')
    })
  }

  render() {
    let charComponents = null;
    charComponents = (
      <div>
        {
          this.state.userInput.split('').map((char, index) => {
            return <CharComponent character={char} key={index} click={this.deleteChar.bind(this, index)} />
          })
        }
      </div>
    );
    return (
      <body>
        <div className="App">
          <Input changed={this.setValue} input={this.state.userInput} />
          <Output description={this.state.description} length={this.state.userInput.length} />
          {charComponents}
        </div>
      </body>
    );
  }
}

export default App;

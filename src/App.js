import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation';
import Score from './Score';

class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      numQuestions:  0,
      numCorrect : 0
    };
  }
  
  updateScore = (result) => {
    this.setState(prevState => ({
      numQuestions: prevState.numQuestions + 1,
    }))
    if(result === true) {
      this.setState(prevState => ({
        numCorrect: prevState.numCorrect + 1,
      }))
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
    		<h2>Mental Math</h2>
        	<Equation updateScore={this.updateScore} />
        	<Score numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} />
        </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

class Equation extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      X: Math.floor(Math.random() * 100),
      Y: Math.floor(Math.random() * 100),
      Z: Math.floor(Math.random() * 100)
    }
    
  	this.P = Math.floor(Math.random() * 3) + this.state.X + this.state.Y + this.state.Z;
  }
  
  restartGame = function() {
    this.setState(prevState => ({
      X: Math.floor(Math.random() * 100),
      Y: Math.floor(Math.random() * 100),
      Z: Math.floor(Math.random() * 100)
    }))
    this.P = Math.floor(Math.random() * 3) + this.state.X + this.state.Y + this.state.Z;
  }

  verifyAnswer = function(userAnswer) {
    const correctValue = this.state.X + this.state.Y + this.state.Z;
    const correctAnswer = ( correctValue === this.P ) ? true : false;
    this.restartGame();
    (userAnswer === correctAnswer) ? this.props.updateScore(true) : this.props.updateScore(false);
  }
  
  render() {
    return(
       <div className="equation">
         <p className="text">{`${this.state.X} + ${this.state.Y} + ${this.state.Z} = ${this.P}`}</p>
         <button onClick={() => this.verifyAnswer(true)}>True</button>
         <button onClick={() => this.verifyAnswer(false)}>False</button>
        </div>
     )
   }
}

export default Equation;
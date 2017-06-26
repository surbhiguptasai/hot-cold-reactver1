import React from 'react';
import GuessForm from './GuessForm';
import GuessCount from './GuessCount';
import GuessList from './GuessList';
export default class GuessSection extends React.Component{

 constructor(props) {
    super(props);
    this.state = {
      value: 0,
      userFeedback:'Make your guess!',
      secretNumber:Math.floor(Math.random()*100)+1,
      pastGuesses:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

  addEntryToArray(entry){
let pastGuess=this.state.pastGuesses;
pastGuess.push(entry);
this.setState({pastGuesses: pastGuess});
    }

 
    handleChange(event) {
      console.log("handle change");
    this.setState({value: event.target.value});
    console.log("handle change"+this.state.value);
  }

   handleSubmit(event){
    event.preventDefault();
    this.refs.form.input.value = '';
    this.generateFeedback();
    this.addEntryToArray(this.state.value);
 
    
    console.log("handle guess"+this.state.value);
  }

winner(){
  let userFeedback = 'You Won. Click new game to play again';
  alert("Won the Game"+userFeedback);
  this.setState({userFeedback: userFeedback});

}
  generateFeedback(){

  if(this.state.secretNumber == this.state.value){
    this.winner();
  } else if(Math.abs(this.state.secretNumber - this.state.value) < 10){
    this.state.userFeedback = 'hot';
  } else if(Math.abs(this.state.secretNumber - this.state.value) < 20 && Math.abs(this.state.secretNumber - this.state.value) > 9){
    this.state.userFeedback = 'Kinda hot';
  } else if(Math.abs(this.state.secretNumber - this.state.value) < 30 && Math.abs(this.state.secretNumber - this.state.value) > 19){
    this.state.userFeedback = 'less than warm';
  } else {
    this.state.userFeedback = 'cold';
  }


  this.setState({userFeedback: this.state.userFeedback});
}
  render() {

    return (
      <section className="game">
         { /* Guessing Section */ }
        <h2 id="feedback">{this.state.userFeedback}</h2>
        <GuessForm  ref="form" handleChange={this.handleChange} handleSubmit={this.handleSubmit}></GuessForm>
        <GuessCount count={this.state.pastGuesses.length}></GuessCount>
        <GuessList array1={this.state.pastGuesses}></GuessList>
      </section>
      );
  }

};


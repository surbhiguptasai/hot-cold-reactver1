import React from 'react';

const GuessForm = React.createClass({
	
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" ref={input => this.input = input} name="userGuess" id="userGuess" onChange={this.props.handleChange} className="text" maxLength={3} autoComplete="off" placeholder="Enter your Guess" required />
        <input type="submit" id="guessButton" className="button" name="submit" defaultValue="Guess" />
      </form>
      );
  }
});

export default GuessForm;
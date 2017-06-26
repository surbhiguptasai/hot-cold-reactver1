import React from 'react';
import Nav from './Nav';
import WhatAction from './WhatAction';
import Heading from './Heading';

export default class Header extends React.Component{

  constructor(props) {
     console.log("Inside Header Constructor")
    super(props);
    
    this.state = {displayPopUp: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()
  {
      console.log("Inside Handle Click");
      this.setState(prevState => ({
         displayPopUp: !prevState.displayPopUp
       }));
  }
newGame(){
  window.location.reload();
}
  render() {
    return (
      <div>
         
        <Nav handleWhatAction={this.handleClick} handleNewGame={this.newGame}></Nav>
       
        <WhatAction handleCloseWhatAction={this.handleClick}  showWhatAction={this.state.displayPopUp}></WhatAction>
        
        <Heading></Heading>
     </div>
      );
  }
};

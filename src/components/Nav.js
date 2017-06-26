import React from 'react';
export default class Nav extends React.Component{


  handleWhatAction(event) {
        event.preventDefault();
        if (this.props.handleWhatAction) {
            this.props.handleWhatAction();
        }
    }

    handleNewGame(event) {
      console.log("click")
        event.preventDefault();
        if (this.props.handleNewGame) {
            this.props.handleNewGame();
        }
    }



  render() {
    return (
      <nav>
         
        <ul className="clearfix">
          <li onClick={e => this.handleWhatAction(e)} ><a className="what" href="#">What ?</a></li>
          <li onClick={e => this.handleNewGame(e)}><a className="new" href="#">+ New Game</a></li>
        </ul>
      </nav>
      );
  }
};

import React from 'react';
import Header from './Header';
import GuessSection from './GuessSection';


  export default class App extends React.Component{
  render() {
    return (
      <div>
        <Header></Header>
        <GuessSection></GuessSection>
        <div id="root" />
        { /* JavaScript */ }
      </div>
      );
  }
};

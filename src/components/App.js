import React from 'react';
import Header from './Header';
import GuessSection from './GuessSection';

const App = React.createClass({
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
});

export default App;
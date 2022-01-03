import './App.css';
import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  };
};

export default App;

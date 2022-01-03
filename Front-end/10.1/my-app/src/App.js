import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = [
  'Tocar contrabaixo', 
  'fazer exercício', 
  'lavar a louça', 
  'varrer o quintal', 
  'lavar o carro', 
  'passear com o cachorro', 
  'regar as plantas',
  'colocar água pássaros'
]

class App extends React.Component {
  render() {
    return (
      <>
        {
          compromissos.map((compromisso) => Task(compromisso))
        }
      </>
    );
  }
}

export default App;

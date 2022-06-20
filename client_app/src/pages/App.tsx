import React from 'react';
import '../styles/index.css';
import Header from '../components/Header';
import Main from '../components/Main';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;

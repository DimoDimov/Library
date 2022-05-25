import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Library } from './components/library/library.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Library></Library>
      </header>
    </div>
  );
}

export default App;

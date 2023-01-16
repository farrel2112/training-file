import React from 'react';
import First from './components/First';
import Second from './components/Second';
import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Welcome to my React training</h1>
        <Second/>
        <First/>
      </div>
  );
}

export default App;

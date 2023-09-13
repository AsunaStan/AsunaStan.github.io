// src/App.js
import React from 'react';
import './App.css';
import Organization from './hub';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Organization</h1>
      </header>
      <main>
        <Organization />
      </main>
    </div>
  );
}

export default App;


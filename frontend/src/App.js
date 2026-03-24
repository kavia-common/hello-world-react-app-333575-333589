import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /** Single-page app rendering only the centered "Hello World" heading. */
  return (
    <main className="App" aria-label="Hello World page">
      <h1 className="App-title">Hello World</h1>
    </main>
  );
}

export default App;

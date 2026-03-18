import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /** Root single-page app that renders a centered “Hello World” heading. */
  return (
    <main className="page" role="main" aria-label="Hello World page">
      <h1 className="heading">Hello World</h1>
    </main>
  );
}

export default App;

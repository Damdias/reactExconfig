import React from 'react';
import {userName} from  "./env";

function App() {
  return (
    <div className="App">
      <h1>{userName()}</h1>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import DrumKeys from './DrumKeys';

function App() {
  return (
    <div className='container' id='drum-machine'>
      <h1 className='title'>
        Drum Kit
      </h1>
      <h2>by Brandon Truong</h2>
      <div id='display' className='drum-grid'>
        <DrumKeys />
      </div>
    </div>
  );
}

export default App;

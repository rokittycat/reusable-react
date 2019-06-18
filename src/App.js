import React from 'react';
import logo from './logo.svg';
import './App.css';
import MinimalMap from './MinimalMap'

function App() {
  return (
    <div className="App">
        <MinimalMap link="https://openlayers.org/en/latest/examples/data/WMTSCapabilities.xml" layer="layer-7328"/>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
//CSS to be injected into head
import '../node_modules/ol/ol.css';
// import '../node_modules/ol-contextmenu/dist/ol-contextmenu.min.css';
// import '../node_modules/react-responsive-carousel/lib/styles/carousel.css';
import './App.css';
import MinimalMap from "./MinimalMap";

class App extends Component {
  render() {
    const { link, layer, viewOptionsConfig } = this.props.config;

    return (
      <div id="root">
            <MinimalMap link={link} layer={layer} viewOptionsConfig={viewOptionsConfig}/>
      </div>
    );
  }
}

export default App;

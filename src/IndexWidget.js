import React, { Component } from 'react';
//CSS to be injected into head
import '../node_modules/ol/ol.css';
// import '../node_modules/ol-contextmenu/dist/ol-contextmenu.min.css';
// import '../node_modules/react-responsive-carousel/lib/styles/carousel.css';
import './App.css';
import MinimalMap from "./MinimalMap";

class App extends Component {
  render() {
    const { locale, mapUrl } = this.props.config;
    console.log(this.props.config);
    return (
      <div id="root">
            <MinimalMap/>
      </div>
    );
  }
}

export default App;

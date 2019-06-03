import IndexWidget from './IndexWidget';
import React from 'react';
import ReactDOM from 'react-dom';

let NSconfig = null;

export default {
  config: function(config) {
    NSconfig = config;
  },

  widgets: {
    myWidget: {
      new: config => {
        // let uid = uniqueid({prefix: 'widget_ns_'});
        return {
          render() {
            ReactDOM.render(
              <IndexWidget config={config} />,
              document.querySelector(config.selector)
            );
          }
        };
      }
    }
  }
};

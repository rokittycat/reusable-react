import React from 'react';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import WMTS, {optionsFromCapabilities} from 'ol/source/WMTS.js';
import {
    defaults as defaultControls
} from 'ol/control.js';
import {
    defaults as defaultInteractions
} from 'ol/interaction.js';

const viewOptions = {
    center: [19412406.33, -5050500.21],
    zoom: 5
};

export default class MinimalMap extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { parser: new WMTSCapabilities(), map: null };
    }

    componentDidMount() {
        var _this = this;
        var link = this.props.link ? this.props.link : "https://openlayers.org/en/latest/examples/data/WMTSCapabilities.xml";
        var layer = this.props.layer ? this.props.layer : "layer-7328";
        var viewOptionsConfig = this.props.viewOptionsConfig ? this.props.viewOptionsConfig : viewOptions;

        fetch(link).then(function(response) {
            return response.text();
        }).then(function(text) {
            var result = _this.state.parser.read(text);
            var options = optionsFromCapabilities(result, {
                layer: layer,
                matrixSet: 'EPSG:3857',
                requestEncoding: 'REST',
                wrapX: true
            });

            let map = new Map({
                layers: [
                    new TileLayer({
                        source: new OSM(),
                        opacity: 0.7
                    }),
                    new TileLayer({
                        opacity: 1,
                        source: new WMTS(/** @type {!module:ol/source/WMTS~Options} */ (options))
                    })
                ],
                target: 'map',
                view: new View(viewOptionsConfig),
                controls: defaultControls({
                    attribution: false,
                    attributionOptions: {
                        collapsible: false
                    }
                }).extend([
                    // new OverviewMap()
                ]),
                // controls: Olcontrol.defaults({ attribution: false }),
                interactions: defaultInteractions({
                    altShiftDragRotate: false,
                    pinchRotate: false,
                    shiftDragZoom: false
                }).extend([
                    // new app.Drag()
                ])
            });

            _this.setState({map: map});
        });
    }

    render() {
        return <div id="map"></div>;
    }
}
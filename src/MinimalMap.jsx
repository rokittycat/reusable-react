import React from 'react';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import WMTS, {optionsFromCapabilities} from 'ol/source/WMTS.js';
import {
    defaults as defaultControls,
    Zoom as OlControlZoom,
    FullScreen as OlControlFullScreen
} from 'ol/control.js';
import {
    defaults as defaultInteractions,
    Pointer as PointerInteraction,
    Select as OlInteractionSelect
} from 'ol/interaction.js';

const viewOptions = {
    zoom: 16,
    minZoom: 13,
    maxZoom: 17,
    extent: [-8119, -8167, 8119, 8167],
    center: [0, 0]
};

export default class MinimalMap extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { parser: new WMTSCapabilities(), map: null };
    }

    componentDidMount() {
        var _this = this;
        var link = "";
        var layer = "";

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
                    // new TileLayer({
                    //     source: new OSM(),
                    //     opacity: 0.7
                    // }),
                    new TileLayer({
                        opacity: 1,
                        source: new WMTS(/** @type {!module:ol/source/WMTS~Options} */ (options))
                    })
                ],
                target: 'map',
                view: new View(viewOptions),
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
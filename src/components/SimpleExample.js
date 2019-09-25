import React, { Component } from 'react'
import { Map, TileLayer, Tooltip,CircleMarker } from 'react-leaflet'


export default class SimpleExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            positions: [
                { "lat": 52.23811608273536, "lon": 20.93452342785895 },
                { "lat": 51.54785571154207, "lon": 17.826584726572037 },
                { "lat": 54.21365652233362, "lon": 19.22552310861647 },
                { "lat": 51.78522186353803, "lon": 16.541235130280256 },
                { "lat": 49.98816106002778, "lon": 20.170932468026876 },
                { "lat": 50.25127633474767, "lon": 18.922785026952624 },
                { "lat": 52.42808978073299, "lon": 17.34847493469715 },
                { "lat": 51.51726147159934, "lon": 19.305152697488666 },
                { "lat": 53.027809294871986, "lon": 23.157434072345495 },
                { "lat": 51.45517114084214, "lon": 20.356052415445447 },
                { "lat": 52.711106040515006, "lon": 18.99309209547937 },
                { "lat": 54.59999998100102, "lon": 18.233299981802702 },
                { "lat": 51.21465808711946, "lon": 15.28321229852736 },
                { "lat": 50.290524302981794, "lon": 22.0692986715585 },
                { "lat": 52.33703641220927, "lon": 15.439835954457521 },
                { "lat": 53.439499964006245, "lon": 14.593899920582771 },
                { "lat": 50.298199988901615, "lon": 16.65299993008375 },
                { "lat": 51.489134528674185, "lon": 22.798304054886103 },
                { "lat": 52.79594083316624, "lon": 21.92301107570529 },
                { "lat": 51.33334977552295, "lon": 22.309959456324577 },
                { "lat": 52.73953733034432, "lon": 16.485387096181512 },
                { "lat": 50.07764990441501, "lon": 23.00144978798926 },
                { "lat": 54.12049988284707, "lon": 20.716399736702442 },
                { "lat": 54.273299924097955, "lon": 16.3300197198987 },
                { "lat": 50.04999997559935, "lon": 17.799999928101897 },
                { "lat": 54.09929999615997, "lon": 22.9330999776721 }
            ],
            lat: 52.23811608273536,
            lng: 20.93452342785895,
            zoom: 7,
        }
    }

    render() {
        const center = [51.759188, 19.455355]

        const { positions } = this.state

        const setMarker = positions.map((position, index) =>
            <CircleMarker key={index} center={position} radius={15} >
                <Tooltip>{`${position.lat} , ${position.lon}`}</Tooltip>
            </CircleMarker>
        );

        return (
            <Map center={center} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {setMarker}
            </Map>
        )
    }
}

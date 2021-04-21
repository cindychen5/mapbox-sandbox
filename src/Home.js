import React, {useState} from "react"
import ReactMapGL, {Marker} from 'react-map-gl';
import Geocoder from "react-mapbox-gl-geocoder";
import * as stateCapitalData from './stateCapitals.json';
import {Pin} from "./Pin";

export default function Home() {
    const [viewport, setViewport] = useState({
        // latitude: 35.107871,
        // longitude: -106.690982,
        latitude: 40,
        longitude: -100,
        zoom: 3,
        width: "80vw",
        height: "80vh",
        // zoom: 12
    })

    const statesInfo = stateCapitalData.states;


    return (
        <>
                <h1>MAP!</h1>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    onViewportChange={viewport => {
                        setViewport(viewport);
                    }}
                    >
                    {statesInfo.map((capital, index) => (
                        <Pin key={index} lng={Number(capital.long)} lat={Number(capital.lat)}>
                        </Pin>
                        ))}


                </ReactMapGL>


        </>
    )
}
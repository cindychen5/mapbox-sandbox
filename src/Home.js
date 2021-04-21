import React, {useState} from "react"
import ReactMapGL from 'react-map-gl';
import {Container} from "reactstrap";
import {Pin} from "./Pin";
import Geocoder from "react-mapbox-gl-geocoder";

export default function Home() {
    const [viewport, setViewport] = useState({
        latitude: 35.107871,
        longitude: -106.690982,
        width: "80vw",
        height: "80vh",
        zoom: 12
    })

    return (
        <>

                <h1>MAP!</h1>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                    onViewportChange={viewport => {
                        setViewport(viewport);
                    }}
                    >

                </ReactMapGL>


        </>
    )
}
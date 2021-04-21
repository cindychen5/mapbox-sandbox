import React from "react"
import ReactMapGL, {Marker} from 'react-map-gl';
import {Container} from "reactstrap";
import {Pin} from "./Pin";

export function Home() {
    const [points, setPoints] = React.useState([
        {lat: 35.332, lng: -106.652},
        {lat: 35.339, lng: -106.656},
        {lat: 35.40, lng: -106.666},
        {lat: 35.23, lng: -106.4444}
    ]);
    // center={[-106.65, 35.33]}

    const [viewport, setViewport] = React.useState({
        latitude: 35.33,
        longitude: -106.65,
        zoom: 12
    });

    return (
        <>
            <Container>
                <h1>Here is the map</h1>
                <ReactMapGL
                    {...viewport}
                    width="80vw"
                    height="100vh"
                    onViewportChange={(viewport) => setViewport(viewport)}
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    mapboxApiAccessToken={"pk.eyJ1IjoiY2ljaGVuNTgiLCJhIjoiY2ttM25wOWdsMTQxNzJxcXRlZDYxcm5saSJ9.wdnJVaMM3kOfsCuMeoB-vA"}
                >
                {points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}
                </ReactMapGL>
                </Container>

        </>
    )
}
import React, {useState} from "react"
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import * as stateCapitalData from './stateCapitals.json';
// import {Pin} from "./Pin";

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
    const [selectedCapital, setSelectedCapital] = useState(null);


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

                    {/*Adding pins*/}
                    {statesInfo.map((capital, index) => (
                    <Marker
                        key={index}
                        longitude={Number(capital.long)}
                        latitude={Number(capital.lat)}
                        >
                        <div>states</div>
                    </Marker>
                    ))}

                    {/*{statesInfo.map((capital, index) => (*/}
                    {/*    <Pin*/}
                    {/*        key={index}*/}
                    {/*        lng={Number(capital.long)}*/}
                    {/*        lat={Number(capital.lat)}*/}
                    {/*        onClick={setSelectedCapital}*/}
                    {/*    />*/}
                    {/*    ))*/}
                    {/*}*/}

                    {/*{selectedCapital ? (*/}
                    {/*    <Popup*/}
                    {/*        longitude={Number(selectedCapital.long)}*/}
                    {/*        latitude={Number(selectedCapital.lat)}*/}
                    {/*    >*/}
                    {/*    <div>capital</div>*/}
                    {/*    </Popup>*/}
                    {/*) : null}*/}

                </ReactMapGL>


        </>
    )
}
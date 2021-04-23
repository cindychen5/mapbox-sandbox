import React, {useState, useEffect} from "react"
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import * as stateCapitalData from './stateCapitals.json';
import './index.css';
import starIcon from './star-shape-in-a-circle.svg';

export default function Home() {
    const [viewport, setViewport] = useState({
        latitude: 40,
        longitude: -100,
        zoom: 3,
        width: "80vw",
        height: "80vh",
    })

    const statesInfo = stateCapitalData.states;
    const [selectedCapital, setSelectedCapital] = useState(null);

    //first time it renders it'll call the effect
    //if esc button is pressed, it'll set it to disappear
    useEffect(() => {
        const listener = (e) => {
            if(e.key === "Escape") {
                setSelectedCapital(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        }
    }, [])


    return (
        <>
                <h1>Map of US States & Capitals</h1>
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
                        <button
                            className="marker-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedCapital(capital);
                            }}
                            >
                            <img src={starIcon} alt="Capitals Icon"/>
                        </button>
                    </Marker>
                    ))}

                    {selectedCapital ? (
                        <Popup
                            latitude={Number(selectedCapital.lat)}
                            longitude={Number(selectedCapital.long)}
                            onClose={() => {
                                setSelectedCapital(null);
                            }}
                        >
                            <div>
                                <h6>{selectedCapital.capital}, {selectedCapital.abbr}</h6>
                            </div>
                        </Popup>
                    ) : null}

                </ReactMapGL>


        </>
    )
}
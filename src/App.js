import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import "./App.css"
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {Home} from "./Home";


export function App() {
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    )

}
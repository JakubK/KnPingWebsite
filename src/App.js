import React from "react";
import {
    BrowserRouter as Router,
    useLocation
} from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/navbar';
import AnimatedRouter from "./components/animatedRouter/animatedRouter";

function App() {
    function GetPath() {
        const location = useLocation();
        return location.pathname;
    }

    return (
        <Router>
            <div className="app">
                <Navbar path={GetPath} />
                <AnimatedRouter path={GetPath} />
            </div>
        </Router>
    );
}

export default App;

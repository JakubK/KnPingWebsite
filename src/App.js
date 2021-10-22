import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Main from "./views/main";
import Management from "./views/management/management";
import Gallery from "./views/gallery/gallery";
import Contact from "./views/contact/contact";
import Content from "./components/content/content"

function App() {
    function GetPath() {
        const location = useLocation();
        return location.pathname;
    }

    return (
        <Router>
            <div className="app">
                <Navbar path={GetPath} />
                <Content path={GetPath} />
                <Switch>

                </Switch>
            </div>
        </Router>
    );
}

export default App;

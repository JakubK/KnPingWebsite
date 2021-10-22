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

function App() {
    function GetPath() {
        const location = useLocation();
        return location.pathname;
    }

    return (
        <Router>
            <div className="app">
                <Navbar path={GetPath} />
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/management">
                        <Management/>
                        <Footer/>
                    </Route>
                    <Route path="/gallery">
                        <Gallery/>
                        <Footer/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                        <Footer/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

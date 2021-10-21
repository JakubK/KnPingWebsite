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



function App() {
    function GetPath() {
        const location = useLocation();
        return location.pathname;
    }

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/">
                        <Navbar path={GetPath} />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

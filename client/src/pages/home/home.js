import React, { Component } from 'react';
import logo from "./images/logo.png";
import "./home.css";
import Toolbar from "../../components/toolbar/toolbar"



class Home extends Component {

    render() {
        return (
            <div className="Home">
                <div className="Home-header">

                    <Toolbar></Toolbar>

                </div>

                <img src={logo} className="Home-logo" alt="logo" />

            </div>
        );
    }
}

export default Home;

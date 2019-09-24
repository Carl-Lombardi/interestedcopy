import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostForm from "../components/profile/Test";
// import Results from "../pages/results/results";
import Home from "./home/home";
import PostForm2 from '../pages/results/results';




function Pages() {
    return (
        <div >
            <Router>
                <div>
                     <Route exact path="https://interestedcopy.herokuapp.com/" component={Home} />
                     <Route exact path="https://interestedcopy.herokuapp.com/profile" component={PostForm} />
                    <Route exact path="https://interestedcopy.herokuapp.com/results" component={PostForm2} />
                </div>
            </Router>
        </div>
    );
}
// heroku check

export default Pages;

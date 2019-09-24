import React, {Component} from "react";
import fire from '../../config/Fire';
import Pages from "../../pages/pages";
import Login from "../firebase/Login";


class Firebase1 extends Component {
    constructor() {
        super();
        this.state = ({
            user: null,
        });
        this.authListener = this.authListener.bind(this);
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
            //get user info
            // var user = fire.auth().currentUser;
            if (user != null) {
                user.providerData.forEach(function (profile) {
                    // dont need this code but leaving it as a safety measure   console.log("Sign-in provider: " + profile.providerId);
                    console.log("  Provider-specific UID: " + profile.uid);
                    console.log("  Name: " + profile.displayName);
                    console.log("  Email: " + profile.email);
                    console.log("  Photo URL: " + profile.photoURL);
                    //need to define the following
                    console.log("  Age: " + profile.age);
                    console.log("  Gender: " + profile.gender);
                    console.log("  Hobbies: " + profile.hobbies);
                    console.log("  State: " + profile.state);
                });
            }
        });
    }

render() {
    return (
        <div className="Firebase">
            {this.state.user ? (
                <Pages />
            ) :
                (
                    <Login />   
               )
            }
                        
        </div>
    );
                }           
}
export default Firebase1;
import React from "react";
import fire from '../../config/Fire';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const logout = () => {
    fire.auth().signOut();
};

function LogoutBtn() {


    return (

        <button onClick={logout}>Logout</button>
    )
};
export default LogoutBtn;

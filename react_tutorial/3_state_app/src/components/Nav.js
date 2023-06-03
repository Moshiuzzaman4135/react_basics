import React from "react";

const Nav = (props) => {
    // State can be added here
    return <nav>{props.toggle ? <h1>Nav</h1> : ""}</nav>;
};

export default Nav;
import React from "react";


// Creating a nav function
const Tweet = (props) => (
    <div>
        {/* <h1>{props.me}</h1>
        <h1>{props.age}</h1> */}
        <h1>{props.name} {props.tweet}</h1>
        
    </div>
);
export default Tweet;
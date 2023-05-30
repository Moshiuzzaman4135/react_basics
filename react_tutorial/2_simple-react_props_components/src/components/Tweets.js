import React from "react";
import Tweet from "./Tweet";

// Creating a nav function
const Tweets = (props) => { 
    const tweets = [
        {name:'a',tweet:"1"},
        {name:'b',tweet:"2"},
        {name:'c',tweet:"3"},
        {name:'d',tweet:"4"},
    ];


    return (
    // <section>
    //     <h1>{props.me}</h1>
    //     <h1>{props.age}</h1>
    //     <Tweet me={props.me} age={props.age}></Tweet>
    // </section>
    <section>
        <h1>I have tweets {tweets.length} tweets</h1>
        {tweets.map((tweet) => (
            <Tweet name={tweet.name} tweet={tweet.tweet}></Tweet>
            
        ))}
    </section>
);
};
export default Tweets;
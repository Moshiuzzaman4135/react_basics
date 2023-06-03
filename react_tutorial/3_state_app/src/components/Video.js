import React from "react";

const Video = (props) => {
    // State can be added here
    // const [toggle , setToggle] = useState(false);


    return(
    <section>
        <h1>Video {props.nr}</h1>
        <button onClick={props.setToggle}>Toggle</button>
    </section>
    );
};

export default Video;
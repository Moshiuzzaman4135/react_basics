// Import modules
import React from "react";
import 'App.css';
import thumb from "./thumb.png";
import Nav from "./Nav";
// Writing the app function

// With return 

// const App = () => {
//     return(
//         <div>
//         <h1>Hello React</h1>
//     </div>
//     );
// }

// Simplify return
const App = () => (
    <div>
        <Nav/>
        <h1 className="wow">Hello React!!!</h1>
        <img src={thumb} alt="No Image found" />
    </div>
);


// Make a component and send it to another place 
export default App;
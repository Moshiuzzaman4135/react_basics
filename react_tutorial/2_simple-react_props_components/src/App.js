import './App.css';
import React from "react";
//Import comonents
import Nav from './components/Nav';
import Tweets from './components/Tweets';

function App() {
  //Write JavaScript Codes Here
  const name = "Moshiuzzaman Shatil"
  const age = 27;
  



  //Add Components Here
  return (
    <div className="App">
      <h1>Hello React</h1>
        <div className='home'>
          <Nav></Nav>                  
          {/* <Tweets me={name} age={age}></Tweets> */}
          <Tweets></Tweets>
          
      </div>
    </div>
  );
}

export default App;

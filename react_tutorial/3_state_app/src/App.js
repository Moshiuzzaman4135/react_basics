import './App.css';
import React,{useState} from "react";
import Nav from './components/Nav';
import Video from './components/Video';

function App() {

  // let counter = 0;
  const [counter, setCounter] = useState(0);
  // As it is in parent state we are up a level and pass it down to any childer even the actions
  const [toggle , setToggle] = useState(false);

  const increamenter = () =>{
    // counter =+1 ;
    // setCounter(prev => prev + 1 );
    setCounter(counter + 1 );
    
    
  }
  const resetCounter = () =>{
    
    // setCounter(prev => 0 );
    setCounter(counter == 0);
    
  }
  const toggler = () => {
    console.log('Here');
    setToggle((prev) => !prev);
  }

  return (
    <div className="App">
      {/* <h1 className={toggle ? 'active' : ""}>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={increamenter} >Increase </button>
      <button onClick={resetCounter} >Reset </button>
      <button onClick={toggler} >Toggle </button> */}


      {/* Can pass down states using props to children but same cannot be done in reverse order */}




      {/* Sending the state value from here */}
      <Nav toggle={toggle}></Nav>



      {/* Changing the state from here by passing the function */}
      <Video nr={counter} setToggle={toggler}></Video>
    </div>
  );
}

export default App;

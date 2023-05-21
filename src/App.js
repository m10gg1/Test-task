
import './App.css';

import { useState } from 'react';
function App() {
  const[name, setName]=useState('Martha');

  const handleClick=()=>{
    setName("stacy","Laura");
  }
  const Num=6;
 

  return (
    <div className="Todo">
 <h1>Hi</h1>
      <p>{Num} and{name} </p>
      <button onClick={handleClick}> Click here!</button>
  </div>


  );

}

export default App;

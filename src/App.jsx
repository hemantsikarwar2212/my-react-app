import React, { useState } from 'react';

import './App.css'

function App() {
  return (
    <div>
      <Togglemsg/>
    </div>
  )
  
  }

  function Togglemsg(){
    let [isVisible, setisVisible] = useState(true);
    function toggle(){
      setisVisible(!isVisible);
    }
  
    return (
      <div>
        <button onClick={toggle}>toggle msg</button>
        {isVisible && <p>this msg is rendered!</p>}
      </div>
    )
  }




export default App

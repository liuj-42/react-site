import './App.css'
import Projects from './component/Projects'
import Checkboxes from './component/Checkboxes'
import React, { useState } from 'react';

function App() {

  const [selected, setSelected] = useState(["Web", "Other"]);


  return (
    <div className="App">
      <div>
        <h1>Past Projects</h1>
        <div className="card">

        </div>
        <p className="gray">
          This is a list of my past projects
        </p>
      </div>
      <div id="projects">
        <Checkboxes setSelected={setSelected}/>

        <Projects selected={selected}/>
      </div>

    </div>
    
  )
}

export default App

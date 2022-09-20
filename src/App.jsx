import './App.css'
import Projects from './component/Projects'
import Dropdown from './component/Dropdown'

function App() {

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
      <Dropdown/>

      <Projects/>
    </div>
    
  )
}

export default App

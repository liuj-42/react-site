import projectInfo from './data/projectInfo.json'
import './Projects.css'

function Projects() {
    let projects = []
    console.log(projectInfo)
    const images = {
        "Vue": <li><img className="icon" src="./vue.png"></img></li>,
        "React": <li><img className="icon" src="./react.png"></img></li>,
        "JavaScript": <li><img className="icon" src="./js.png"></img></li>,
        "HTML": <li><img className="icon" src="./html.png"></img></li>,
        "CSS": <li><img className="icon" src="./css.png"></img></li>,
        "Git": <li><img className="icon" src="./git.png"></img></li>,
        "Angular": <li><img className="icon" src="./angular.png"></img></li>,
        "TypeScript": <li><img className="icon" src="./ts.png"></img></li>,
        "Python": <li><img className="icon" src="./python.png"></img></li>,
    }
    let res = projectInfo.data.map( (project) => {
        projects.push(
            <div key={project.id} className="project">
                <div className="header">
                    <h2>{project.name}</h2>
                    <h4>{project.sub}</h4>
                </div>
                {/* <img src="./angular.png"></img> */}
                <ul className="horizontal">
                    {project.filters.map( (icon, index) => {
                        return images[icon]
                    })}
                </ul>
            </div>
        )
    })
    // return <div> {projects} </div>

    return <div className="projectsList">{projects}</div>
}

export default Projects;
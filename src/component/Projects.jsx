import projectInfo from './data/projectInfo.json'
import './Projects.css'

function Projects() {
    let projects = []
    console.log(projectInfo)
    let res = projectInfo.data.map( (project) => {
        projects.push(
            <div key={project.id} className="project">
                <div className="header">
                    <h2>{project.name}</h2>
                    <h4>{project.sub}</h4>
                </div>
                <ul className="horizontal">
                    {project.filters.map( (icon, index) => {
                        return <li className="iconText" key={index}>{icon}</li>
                    })}
                </ul>
            </div>
        )
    })
    // return <div> {projects} </div>

    return <div className="projectsList">{projects}</div>
}

export default Projects;
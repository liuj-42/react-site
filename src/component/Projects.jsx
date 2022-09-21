import projectInfo from './data/projectInfo.json'
import classnames from "classnames";
import React, { useState } from 'react';

import './Projects.css'

function Projects({ selected }) {
    let projects = []
    const images = {
        "Vue": <img className="icon" src="./vue.png"></img>,
        "React": <img className="icon" src="./react.png"></img>,
        "JavaScript": <img className="icon" src="./js.png"></img>,
        "HTML": <img className="icon" src="./html.png"></img>,
        "CSS": <img className="icon" src="./css.png"></img>,
        "Git": <img className="icon" src="./git.png"></img>,
        "Angular": <img className="icon" src="./angular.png"></img>,
        "TypeScript": <img className="icon" src="./ts.png"></img>,
        "Python": <img className="icon" src="./python.png"></img>,
    }

    const checkFilter = function (filters) {
        let res = false;
        filters.forEach(filter => {
            if (selected.includes(filter)) {
                res = true;
            }
        })
        return res;

    }

    const [fadingOut, setFadeOut] = useState(true);
    const updateTimer = React.useRef(null);

    function setFade() {
        let toShow = document.getElementsByClassName("show")
        for ( let i = 0; i < toShow.length; i++ ) {
            toShow[i].style.display = "block";
        }

        updateTimer.current = setTimeout(() => {
          setFadeOut(!fadingOut);
          let toHide = document.getElementsByClassName("hide")
          for ( let i = 0; i < toHide.length; i++ ) {
            toHide[i].style.display = "none"
          }

        }, 125);
        setFadeOut(!fadingOut);
        
    }

    React.useEffect(() => { setFade(); }, [selected]);


    projectInfo.data.map((project) => {
        projects.push(
            <div key={project.id} className={classnames(
                "project",
                checkFilter(project.tags) ? "show" : "hide")}
            >
                <div className="header">
                    <h2>{project.name}</h2>
                    <h4>{project.sub}</h4>
                </div>
                <ul className="horizontal">
                    {project.icons.map((icon, index) => {
                        return <li key={index}>{images[icon]}</li>
                    })}
                </ul>
            </div>
        )
    })

    return <div className="projectsList">{projects}</div>
}

export default Projects;
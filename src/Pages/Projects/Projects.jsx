import project1 from '../../img/project1.jpg'
import project2 from '../../img/project2.jpg'
import './Projects.css'

function Projects() {
    return(
        <main id="projects">
            <div className="projects-container">
                <h1>Projects</h1>
                <div className="project">
                    <h2>Knowledge Base Tool</h2>
                    <p>The Knowledge Base (KB) project is a web application designed to provide employees of Elinnov Technologies with a centralized, user-friendly platform for accessing company information and resources. </p>
                    <ul>
                        <li>React.js</li>
                        <li>ASP.Net</li>
                        <li>MongoDB</li>
                    </ul>
                    <img src={project1} alt="kb tool" />
                </div>
                <div className="project">
                    <h2>Movie Browser</h2>
                    <p>The Movie Browser is a React app that lets users search for movies using the TMDb API. It features a navbar with a search bar, dynamic search results, and pages for home, about, search, and movie details. React Router handles navigation, and Bootstrap enhances the design.</p>
                    <ul>
                        <li>React.JS</li>
                    </ul>
                    <img src={project2} alt="moviebrowser" />
                </div>
            </div>
        </main>
    )
}

export default Projects;
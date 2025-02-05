import './About.css'
import photo from '../../img/c939ce36-582b-4933-8471-823cedcd5437.jpeg'

function About() {
    return(
        <main id="about">
            <div className="about-container">
                <h2>Koln Roward Laviste</h2>
                <p>Koln is an aspiring Junior Web Developer with a focus on front-end development. He is skilled in React, JavaScript, HTML, CSS, and is currently learning new frameworks like Svelte and Angular. Koln has some experience working with .NET for full-stack development, and he is also gaining expertise in RESTful APIs. He enjoys building projects that challenge his creativity and improve his technical skills. Koln is passionate about creating well-designed, responsive websites and applications, and is constantly exploring ways to improve his coding abilities and stay up-to-date with industry trends.</p>
                <img src={photo} alt="Koln's photo" />
            </div>
        </main>
    );
}

export default About;

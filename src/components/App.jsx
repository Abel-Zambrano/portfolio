import React from 'react';
import Heading from './Heading';
import Bio from './Bio';
import skills from '../skills';
import createSkill from '../createSkill';
import projects from '../projects';
import createProject from '../createProject';
import Contact from './Contact';
import Footer from './Footer';


function App() {
    return(
        <div>
            <Heading />
            <div id='home' className='container'>
                <Bio />
                    <h2 id='skill' className='title'>SKILLS</h2>
                    <div  className='logo-container'>
                        {skills.map(createSkill)}                
                    </div>
                    <h2 id='projects' className='title'>PROJECTS</h2>
                    <div className='project-container'>
                        {projects.map(createProject)}
                    </div>
                    <h2 id='contact' className='title'>CONTACT</h2>
                    <div>
                        <Contact />
                    </div>
                    <Footer />
            </div>
        </div>
    );
}

export default App;
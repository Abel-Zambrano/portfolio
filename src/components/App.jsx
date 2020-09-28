import React from 'react';
import Heading from './Heading';
import Bio from './Bio';
import skills from '../skills';
import createSkill from '../createSkill';
import projects from '../projects';
import createProject from '../createProject';


function App() {
    return(
        <div>
            <Heading />
            <div className='container'>
                <Bio />
                    <h2 className='title'>SKILLS</h2>
                    <div  className='logo-container'>
                        {skills.map(createSkill)}                
                    </div>
                    <h2 className='title'>PROJECTS</h2>
                    <div className='project-container'>
                        {projects.map(createProject)}
                    </div>
                    <h2 className='title'>CONTACT ME</h2>
                    <div>

                    </div>
            </div>
        </div>
    );
}

export default App;
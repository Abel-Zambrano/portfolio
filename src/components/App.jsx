import React from 'react';
import Heading from './Heading';
import Bio from './Bio';
import skills from '../skills';
import createSkill from '../createSkill';


function App() {
    return(
        <div>
            <Heading />
            <div className='container'>
                <Bio />
                    <h2 className='skills-title'>MY SKILLS</h2>
                    <div  className='logo-container'>
                        {skills.map(createSkill)}                
                    </div>
            </div>
        </div>
    );
}

export default App;
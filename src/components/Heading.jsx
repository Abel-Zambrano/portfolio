import React from 'react';

function Heading() {
    return(
        <header>
            <div>
                <ul className='nav-links'>
                    <li>HOME</li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li>PROJECTS</li>
                    <li>CONTACT ME</li>
                </ul>
            </div>
        </header>
    );
}

export default Heading;
import React from 'react';

function Heading() {
    return(
        <header>
            <div className='links-container'>
                <ul className='nav-links'>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#skill">SKILLS</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Heading;
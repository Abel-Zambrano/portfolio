import React from 'react';
import Project from './components/Project';

function createProject(pro) {
    return <Project
    key={pro.id}
    image={pro.img}
    name={pro.name}
    url={pro.url}
    techUsed={pro.tech}
    gitURL={pro.git}
    />
}

export default createProject;
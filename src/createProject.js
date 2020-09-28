import React from 'react';
import Project from './components/Project';

function createProject(pro) {
    return <Project
    key={pro.id}
    image={pro.img}
    name={pro.name}
    />
}

export default createProject;
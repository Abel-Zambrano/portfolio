import React from 'react';

function Project(props) {
    return <img className="project-preview" src={props.image} alt={props.name}/>
}

export default Project;
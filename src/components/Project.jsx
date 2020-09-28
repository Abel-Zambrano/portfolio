import React from 'react';

function Project(props) {
    return (
        <div>
            <a href={props.url} target='_blank'>
                <img className="project-preview" src={props.image} alt={props.name}/>
            </a>
        </div>
    )
}

export default Project;
import React from 'react';

const code = '<GitHub Code />'

function Project(props) {
    return (
        <div className='project-div'>
            <h4>{props.name}</h4>
            <a href={props.url} target='_blank'>
                <img className="project-preview" src={props.image} alt={props.name}/>
            </a>
            <div className='tech-div'>
                <h4>Tech Used</h4>
                <p>{props.techUsed}</p>
                <a className='gitcode' href={props.gitURL} target='_blank'>{code}</a>
            </div>
        </div>
    )
}

export default Project;
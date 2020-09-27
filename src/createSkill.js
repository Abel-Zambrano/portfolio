import React from 'react';
import Skill from './components/Skill';

function createSkill(skill) {
    return <Skill
    key={skill.id}
    image={skill.img}
    name={skill.name}
    />
}

export default createSkill;
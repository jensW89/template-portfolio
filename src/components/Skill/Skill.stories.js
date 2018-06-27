import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Skill from './Skill';

const stories = storiesOf('Skill', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories
  .add('Skill component to describe a develop disciplin (FRONTEND)', () => (
    <Skill 
        disciplin={text("disciplin", "FRONTEND")}
        description={text("description", "HTML5, ES6, SASS, React, Flux/Redux, Bootstrap")}
    />
))

stories
  .add('Skill component to describe a develop disciplin (BACKEND)', () => (
    <Skill 
        disciplin={text("disciplin", "BACKEND")}
        description={text("description", "Node.js, Java Spring, MongoDB")}
    />
))

stories
  .add('Skill component to describe a develop disciplin (METHODOLOGIES)', () => (
    <Skill 
        disciplin={text("disciplin", "METHODOLOGIES")}
        description={text("description", "Agile, Lean, DevOps, Continuous Delivery, Test-Driven Development")}
    />
))
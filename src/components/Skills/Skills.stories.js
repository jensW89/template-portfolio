import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Skills from './Skills';

const stories = storiesOf('Skills', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories
  .add('Set of skill components', () => (
    <Skills 
        skillSet={[
            {
                disciplin:"FRONTEND",
                description: "HTML5, ES6, SASS, React, Flux/Redux, Bootstrap"
            },
            {
                disciplin:"BACKEND",
                description: "Node.js, Java Spring, MongoDB"
            },
            {
                disciplin:"METHODOLOGIES",
                description: "Agile, Lean, DevOps, Continuous Delivery, Test-Driven Development"
            },
        ]}
    />
))
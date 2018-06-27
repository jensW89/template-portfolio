import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Project from './Project';
import Background from './test_image.svg' 

const stories = storiesOf('Project', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

stories
  .add('Project component to describe a software project)', () => (
    <Project 
        name={text("name", "Awesome WebApp")}
        image={Background}
        link={text("link", 'http://agilemanifesto.org/')}
    />
))

stories
  .add('Example - Description of OpenIndy Project)', () => (
    <Project 
        name={text("name", "OpenIndy")}
        image={Background}
        link={text("link", 'https://openindy.github.io/posts/about/')}
    />
))
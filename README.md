[![Build Status](https://travis-ci.org/martiL/portfolio-code.svg?branch=master)](https://travis-ci.org/martiL/portfolio-code)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Install and run](#install-and-run)
- [Edit content](#edit-content)
- [Storybook](#storybook)
- [Test](#test)
- [Deploy](#deploy)


## Install and run

Use the common npm commands:

* `npm install`
* `npm start`

## Edit content

Most content is summarized in one component (`src/App.js`). Edit the properties of the react component. The set of skills is collected in three Groups (Disciplin): `FRONTEND, BACKEND and METHODOLOGIES`. Edit the `description` of a disciplin. 
If you don't want to describe a skill set of a discipline, delete the whole object.

```js
{
<Portfolio 
          name="Martin Lux"
          favouriteSkill="Full stack developer"
          education="Engineer (M.Sc.)"
          socialSkill="Agile team player"
          skillSet={[
            {
                disciplin:"FRONTEND", // Don't edit value of disciplin. To not display this disciplin, delete the whole object.
                description: "HTML5, ES6, SASS, React, Redux, Storybook, Jest"
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
}
```

### Change profile image

The profile image is managed in the banner component (`src/components/Banner`). Replace the `me.jpg` image to change the profile image, without changing the name of the image file.

### Change or add Projects

All projects are managed in the projects component (`src/components/Projects`). Add or delete any number of `Project` components. All images should be placed in the `images` folder.

```js
{
    <div className="projects-container">
        <h1 className="projects-headline">Projects</h1>
        <div className="projects-overview-container">
            <Project
                name={'OpenIndy'}
                link={'https://openindy.github.io/'}
                image={OpenIndy}
            />
            <Project
                name={'Photography'}
                link={'https://500px.com/martinlulu'}
                image={Photography}
            />
        </div>
    </div>
}
```

## Storybook

You can use `Storybook stories` to focus your development on components and responsive design. You can find the guide [here](https://storybook.js.org/basics/writing-stories/). 

Use the script command: `npm run storybook` to run storybook.

## Test

Use the common npm command:

* `npm test`

Jest creates a snapshot test (`src/__snapshots__/storyshots.test.js.snap`) from all `stories`. To update the snapshot test use `npm test -u`

## Deploy

Set the url to your Github repository in the `package.json`

```js
{
  "name": "portfolio-code",
  "version": "0.1.0",
  "homepage": "https://martiL.github.io/portfolio-code",
  ...
```

You can use two different ways to deploy your portfolio:

1. Use the script command: `npm run deploy`
2. Use [travis](https://travis-ci.org/) -> you can find the config in the travis.yml. You have to create a `github_token: $GITHUB_TOKEN` to grant access to your repository. If everything is set up, every push to the master branch will start a deploy.

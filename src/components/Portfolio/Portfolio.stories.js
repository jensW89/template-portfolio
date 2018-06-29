import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Portfolio from "./Portfolio";

const stories = storiesOf("Portfolio", module);
stories.addDecorator((story, context) =>
  withInfo("common info")(story)(context)
);
stories.addDecorator(withKnobs);

stories.add("The whole portfolio website", () => (
  <Portfolio
    name={text("name", "Martin Lux")}
    favouriteSkill={text("favouriteSkills", "Full stack developer")}
    education={text("education", "Engineer (M.Sc.)")}
    socialSkill={text("socialSkill", "Agile team player")}
    githubUrl={text("githubUrl", "https://github.com/")}
    linkedInUrl={text("linkedInUrl", "https://linkedin.com")}
    twitterUrl={text("twitterUrl", "https://twitter.com/")}
    mail={text("mail", "mailto:martiluax@gmail.com")}
    skillSet={[
      {
        disciplin: "FRONTEND",
        description: "HTML5, ES6, SASS, React, Flux/Redux, Bootstrap"
      },
      {
        disciplin: "BACKEND",
        description: "Node.js, Java Spring, MongoDB"
      },
      {
        disciplin: "METHODOLOGIES",
        description:
          "Agile, Lean, DevOps, Continuous Delivery, Test-Driven Development"
      }
    ]}
  />
));

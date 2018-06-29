import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Banner from "./Banner";

const stories = storiesOf("Banner", module);
stories.addDecorator((story, context) =>
  withInfo("common info")(story)(context)
);
stories.addDecorator(withKnobs);

stories.add("Banner with background image and description", () => (
  <Banner
    name={text("name", "Martin Lux")}
    favouriteSkill={text("favouriteSkill", "Full stack developer")}
    education={text("education", "Engineer (M.Sc.)")}
    socialSkill={text("socialSkill", "Agile team player")}
  />
));

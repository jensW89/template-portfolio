import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Projects from "./Projects";

const stories = storiesOf("Projects", module);
stories.addDecorator((story, context) =>
  withInfo("common info")(story)(context)
);
stories.addDecorator(withKnobs);

stories.add("Overview of my projects", () => <Projects />);

import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Contact from "./Contact";

const stories = storiesOf("Contact", module);
stories.addDecorator((story, context) =>
  withInfo("common info")(story)(context)
);
stories.addDecorator(withKnobs);

stories.add("Contact component with icons", () => (
  <Contact
    linkedInUrl={text("linkedInUrl", "https://linkedin.com")}
    twitterUrl={text("twitterUrl", "https://twitter.com/")}
    mail={text("mail", "mailto:martiluax@gmail.com")}
  />
));

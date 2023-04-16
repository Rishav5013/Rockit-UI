import React from "react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,

  argTypes: {
    type: {
      options: ["tertiary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const primary = Template.bind({});

primary.args = {
  children: "Let's Talk",
  type: "secondary",
  size: "sm",
  link: "https://www.youtube.com/",
};

import React from "react";
import Link from "@/elements/ListItems";

export default {
  title: "elements/Link",
  component: Link,
  argTypes: {
    text: {},
    href: {
      options: ["https://www.youtube.com/", "https://www.google.com"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Link {...args} />;
export const Link1 = Template.bind({});
Link1.args = {
  text: "Hello",
  href: "https://www.youtube.com/",
};

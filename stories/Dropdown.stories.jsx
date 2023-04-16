import React from "react";
import Dropdown from "@/components/Dropdown";
import { data1, data2, data3, data4, data5 } from "../sections/Header/data";

export default {
  title: "component/Dropdown",
  component: Dropdown,
  argTypes: {
    name: {
      options: ["Dropdown1", "Dropdown2"],
      control: { type: "select" },
    },
    data: {
      options: [data1, data2, data3, data4, data5],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Dropdown1 = Template.bind({});
Dropdown1.args = {
  menuItem: "What we do",
  data: data1,
  isIcon: true,
};

export const Dropdown2 = Template.bind({});
Dropdown2.args = {
  menuItem: "Our Work",
  href: "https://www.google.com",
};

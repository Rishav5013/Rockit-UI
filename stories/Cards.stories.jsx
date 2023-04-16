import Card from "@/components/Card";

export default {
  title: "component/Card",
  component: Card,
  //   argTypes: {
  //     txtSize: {
  //       options: ["sm", "md", "lg"],
  //       control: { type: "radio" },
  //     },
  //     fontWeight: {
  //       options: ["font-normal", "font-medium", "font-semibold"],
  //       control: { type: "select" },
  //     },
  //     gradient: {
  //       options: ["blue", "pink", "yellow", "purple"],
  //       control: { type: "select" },
  //     },
  //     row: {
  //       options: [true, false],
  //       control: { type: "radio" },
  //     },
  //   },
};
const Template = (args) => <Card {...args} />;

export const Cards = Template.bind({});

Cards.args = {
  logoPath: "/images/icon1.svg",
  gradient: "test5",
  num: "4",
  hireSection: true,
  color: "text-pink",
  bgColor: "bg-pink-100",
  text: "You require a tech partner which can handle all the risks and work-related obligations be it software practices or procedures.",
};

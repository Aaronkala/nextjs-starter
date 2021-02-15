import { Story } from "@storybook/react";
import { ComponentProps } from "react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = { children: "Button" };

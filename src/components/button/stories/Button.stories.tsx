import { Meta, Story } from "@storybook/react";
import React from "react";

import { Icon } from "~/components/icon";
import { genArgTypesWithCommonArgs } from "~/utils/_/genArgTypes";

import LibraryButton from "../Button";
import type { ButtonProps } from "../Button.types";

export default {
  title: "Button",
  component: LibraryButton,
  subcomponents: { Icon },
  argTypes: genArgTypesWithCommonArgs([]),
} as Meta<typeof LibraryButton>;

const Template: Story<ButtonProps> = (args) => (
  <LibraryButton {...args}>Add to Cart</LibraryButton>
);

export const Button = Template.bind({});

Button.args = {
  iconName: "cart",
};

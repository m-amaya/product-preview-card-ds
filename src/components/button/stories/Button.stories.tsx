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
  <LibraryButton {...args}>Free Consultation</LibraryButton>
);

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  kind: "primary",
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  kind: "secondary",
};

const IconTemplate: Story<ButtonProps> = (args) => (
  <LibraryButton {...args}>
    <Icon name='arrow-left' color='$white' />
  </LibraryButton>
);

export const IconButton = IconTemplate.bind({});

IconButton.args = {
  kind: "icon",
};

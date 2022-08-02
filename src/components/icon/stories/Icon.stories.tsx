import { Meta, Story } from "@storybook/react";
import React from "react";

import { genArgTypesWithCommonArgs } from "~/utils/_/genArgTypes";

import LibraryIcon from "../Icon";
import type { IconProps } from "../Icon.types";

export default {
  title: "Icon",
  component: LibraryIcon,
  argTypes: genArgTypesWithCommonArgs([]),
} as Meta<typeof LibraryIcon>;

const Template: Story<IconProps> = (args) => <LibraryIcon {...args} />;

export const Icon = Template.bind({});

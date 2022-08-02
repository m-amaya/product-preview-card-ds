import React, { FC } from "react";
import { styled } from "~/stitches";
import ICONS from "~/tokens/icons";

import type { IconProps } from "./Icon.types";

const Icon: FC<IconProps> = ({
  // props
  name,
  color = "currentColor",
  size = 16,
  // handlers
  // common
  className,
  css,
  testId,
  ...attrs
}) => {
  const IconSvg = ICONS[name];

  const IconStyled = styled(IconSvg, {
    color,
  });

  return (
    <IconStyled
      {...attrs}
      height={size}
      width={size}
      viewBox='0 0 16 16'
      css={css}
      className={className}
      data-testid={testId}
    />
  );
};

export default Icon;

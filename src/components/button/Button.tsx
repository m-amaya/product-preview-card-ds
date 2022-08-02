import React, { FC } from "react";
import { styled } from "~/stitches";

import { Icon } from "~/components/icon";
import type { ButtonProps } from "./Button.types";

const ButtonStyled = styled("button", {
  width: "100%",
});

const Button: FC<ButtonProps> = ({
  // props
  iconName,
  // handlers
  // common
  className,
  css,
  testId,
  children,
  ...attrs
}) => {
  return (
    <ButtonStyled
      {...attrs}
      className={className}
      css={css}
      data-testid={testId}
    >
      {iconName && <Icon name={iconName} />}
      <span>{children}</span>
    </ButtonStyled>
  );
};

export default Button;

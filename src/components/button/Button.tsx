import React, { FC } from "react";
import { styled } from "~/stitches";

import { Icon } from "~/components/icon";
import type { ButtonProps } from "./Button.types";

const ButtonStyled = styled("button", {
  backgroundColor: "$deepAquamarine",
  border: "none",
  borderRadius: 8,
  color: "$pureWhite",
  cursor: "pointer",
  height: 48,
  width: "100%",
  smoothTransition: ["background-color"],
  "&:hover": {
    backgroundColor: "$deepAquamarineHover",
  },
});

const Inner = styled("div", {
  alignItems: "center",
  display: "inline-grid",
  gap: 12,
  gridAutoFlow: "column",
});

const ButtonText = styled("span", {
  fontFamily: "$montserrat",
  fontSize: "$body",
  fontWeight: "$bold",
  lineHeight: "$body",
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
      <Inner>
        {iconName && <Icon name={iconName} size={16} />}
        <ButtonText>{children}</ButtonText>
      </Inner>
    </ButtonStyled>
  );
};

export default Button;

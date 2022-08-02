import React, { FC } from "react";
import { styled } from "~/stitches";

import type { ButtonProps } from "./Button.types";

const ButtonStyled = styled("button", {
  alignItems: "center",
  backgroundColor: "$black",
  border: "none",
  borderRadius: 28,
  color: "$lightCream",
  cursor: "pointer",
  display: "inline-flex",
  height: 56,
  fontFamily: "$jakarta",
  fontSize: "$default",
  fontWeight: "$bold",
  justifyContent: "center",
  lineHeight: "28px",
  smoothTransition: ["background-color"],
  "&:hover": {
    backgroundColor: "$galacticBlue",
  },

  variants: {
    kind: {
      primary: {
        paddingLeft: 45,
        paddingRight: 45,
      },
      secondary: {
        backgroundColor: "$lightRed",
        paddingLeft: 45,
        paddingRight: 45,
        "&:hover": {
          backgroundColor: "$summerYellow",
        },
      },
      icon: {
        borderRadius: "50%",
        height: 64,
        width: 64,
      },
    },
  },
});

const Button: FC<ButtonProps> = ({
  // props
  kind = "primary",
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
      kind={kind}
      className={className}
      css={css}
      data-testid={testId}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

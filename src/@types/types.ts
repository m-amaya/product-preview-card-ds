import type { CSS } from "@stitches/react";
import type { ReactNode } from "react";
import { config } from "~/stitches";
import { fontSizes } from "~/tokens/tokens.json";

export type { IconNames } from "~/tokens/icons";
export type ReactChildren = ReactNode | ReactNode[];
export type StitchesCSS = CSS<typeof config>;
export type FontStyleType = keyof typeof fontSizes;

export interface PropsWithChild {
  children?: ReactNode;
}

export interface PropsWithChildren {
  children?: ReactChildren;
}

export interface CommonProps {
  css?: StitchesCSS;
  className?: string;
  testId?: string;
}

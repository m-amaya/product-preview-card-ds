import type { HTMLAttributes } from "react";
import type { CommonProps, IconNames } from "../../@types/types";
export interface ButtonProps extends CommonProps, HTMLAttributes<HTMLButtonElement> {
    iconName?: IconNames;
}

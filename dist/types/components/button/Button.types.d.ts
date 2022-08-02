import type { HTMLAttributes } from "react";
import type { CommonProps } from "../../@types/types";
export interface ButtonProps extends CommonProps, HTMLAttributes<HTMLButtonElement> {
    kind?: "primary" | "secondary" | "icon";
}

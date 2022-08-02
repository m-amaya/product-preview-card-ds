import type { SVGAttributes } from "react";
import type { CommonProps, IconNames, StitchesCSS } from "../../@types/types";
export interface IconProps extends CommonProps, Omit<SVGAttributes<SVGElement>, "color"> {
    name: IconNames;
    color?: StitchesCSS["color"];
    size?: number | string;
}

/// <reference types="react" />
declare const ICONS: {
    "arrow-left": import("react").FC<import("react").SVGAttributes<SVGElement>>;
    "arrow-right": import("react").FC<import("react").SVGAttributes<SVGElement>>;
};
export default ICONS;
export declare type IconNames = keyof typeof ICONS;

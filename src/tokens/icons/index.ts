import { ReactComponent as ArrowLeftSvg } from "./svg/arrow-left.svg";
import { ReactComponent as ArrowRightSvg } from "./svg/arrow-right.svg";

const ICONS = {
  "arrow-left": ArrowLeftSvg,
  "arrow-right": ArrowRightSvg,
};

export default ICONS;

export type IconNames = keyof typeof ICONS;

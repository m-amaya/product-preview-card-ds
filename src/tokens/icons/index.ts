import { ReactComponent as IronCartSvg } from "./svg/iron-cart.svg";

const ICONS = {
  "iron-cart": IronCartSvg,
};

export default ICONS;

export type IconNames = keyof typeof ICONS;

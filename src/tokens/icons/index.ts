import { ReactComponent as CartSvg } from "./svg/icon-cart.svg";

const ICONS = {
  cart: CartSvg,
};

export default ICONS;

export type IconNames = keyof typeof ICONS;

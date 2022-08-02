import { breakpoints } from "~/tokens/tokens.json";
import useWindowSize from "~/utils/useWindowSize";

function useMediaQuery() {
  const { windowWidth } = useWindowSize();

  const isGteDesktop = windowWidth && windowWidth >= breakpoints.desktop;
  const isMobile = !isGteDesktop;

  return {
    isMobile,
    isGteDesktop,
  };
}

export default useMediaQuery;

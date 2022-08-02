import { globalCss } from "~/stitches";

const globalStyles = globalCss({
  "@import": [
    "url('https://unpkg.com/modern-css-reset/dist/reset.min.css')",
    "url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap')",
  ],
  body: {
    backgroundColor: "$cream",
  },
  "*": {
    boxSizing: "border-box",
    noSpace: true,
  },
});

export default globalStyles;

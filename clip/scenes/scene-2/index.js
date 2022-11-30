import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";

const clip = new HTMLClip({
  html,
  css,
  selector: "#scene2",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    dishes: "@initParams.dishes",
    name: "@initParams.name",
  },
});

export default clip;

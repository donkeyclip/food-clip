import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { opacity } from "../../library/opacity";
import { loadPlugin } from "@donkeyclip/motorcortex";
import BackgroundsDefinition from "@donkeyclip/motorcortex-backgrounds";
const Plugin = loadPlugin(BackgroundsDefinition);


const clip = new HTMLClip({
  html,
  css,
  selector: "#scene1",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    name: "@initParams.name",
  },
});

const Ripples = new Plugin.Ripples(
  {
    width: 800,
    height: 450,
    backgroundColor: "#2b2a29",
    circleSize: 700,
    circleColor: "#fae350",
  },
  {
    selector: ".container",
    duration: 3000,
  }
);
clip.addIncident(Ripples,0);
clip.addIncident(opacity(1,".letter",300,"@stagger(0,500)"),200)

export default clip;

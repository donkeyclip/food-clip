import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { loadPlugin } from "@donkeyclip/motorcortex";
import TitlesPlugin from "@donkeyclip/motorcortex-animetitles";
const Titles = loadPlugin(TitlesPlugin);


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

const rotateReveal = 
  new Titles.RotatedTextReveal({
    text: "@initParams.name",
    width: 600,
    color: "black",
    fontFamily: "Righteous",
    fontSize: 40,
    stagger: "0, 300",
    exitTime: 1000,
  },
  { duration: 2000, 
    selector: ".p", 
  }
  );


clip.addIncident(rotateReveal,1000);

export default clip;

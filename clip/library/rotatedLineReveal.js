import { loadPlugin } from "@donkeyclip/motorcortex";
import TitlesPlugin from "@donkeyclip/motorcortex-animetitles";
const Titles = loadPlugin(TitlesPlugin);
export const rotatedLineReveal = (title,subtitle,selector) => new Titles.RotatedLineReveal(
  {
    width: 400,
    size: "S",
    lineColor: "rgb(250, 227, 80)",
    textColor: "#fff",
    title,
    subtitle,
    leftEnd: 100,
    stopOnLast: false,
    delayEnd:1900,
    fontFamily: "IBM Plex Sans Arabic, sans-serif",
  },
  { selector }
);

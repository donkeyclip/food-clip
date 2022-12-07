import { loadPlugin } from "@donkeyclip/motorcortex";
import TitlesPlugin from "@donkeyclip/motorcortex-animetitles";
const Titles = loadPlugin(TitlesPlugin);
export const textReveal = (ff,text,selector,duration) => new Titles.TextReveal(
  {
    text,
    width: 500,
    color: "rgb(250, 227, 80)",
    fontFamily:  ff,
    fontSize: 35,
    stagger: "0, 300",
    wordSplit: false,
    exitTime: 1000,
  },
  { duration, selector }
);

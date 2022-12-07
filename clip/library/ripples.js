import { loadPlugin } from "@donkeyclip/motorcortex";
import BackgroundsDefinition from "@donkeyclip/motorcortex-backgrounds";
const Backgrounds = loadPlugin(BackgroundsDefinition);
export const ripples = (selector, duration) => new Backgrounds.Ripples(
    {
      width: 800,
      height: 450,
      backgroundColor: "rgba(0, 67, 79,0)",
      circleSize: 950,
      circleColor: "#fae350",
    },
    {
      selector,
      duration,
    }
  );
import { loadPlugin } from "@donkeyclip/motorcortex";
import BackgroundsDefinition from "@donkeyclip/motorcortex-backgrounds";
const Backgrounds = loadPlugin(BackgroundsDefinition);
export const hexagonCircle = (width,height,size,selector) => new Backgrounds.HexagonCircle(
    {
      width,
      height,
      colors: ["rgba(255, 0, 0,1)", "rgba(255, 30, 2,1)", "rgba(255, 2, 30,1)"],
      size,
    },
    {
      selector,
    }
  );

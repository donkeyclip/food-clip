import { loadPlugin } from "@donkeyclip/motorcortex";
import SVGDDef from "@donkeyclip/motorcortex-svgdraw";
const SVGD = loadPlugin(SVGDDef);
export const svgDraw = (cover,selector,duration,delay) => new SVGD.Draw({
    animatedAttrs: {
        cover
    }
  }, {
    selector,
    duration,
    delay
  });
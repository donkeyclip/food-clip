import { CSSEffect, Combo} from "@donkeyclip/motorcortex";
import { loadPlugin } from "@donkeyclip/motorcortex";
import BackgroundsDefinition from "@donkeyclip/motorcortex-backgrounds";
const Backgrounds = loadPlugin(BackgroundsDefinition);
export const dishCombo = (selector) => new Combo(
    {
     incidents: [
      {
       incidentClass: new Backgrounds.HexagonCircle,
       attrs: {
        
            width: 800,
            height: 450,
            colors: ["rgba(255, 0, 0,1)", "rgba(255, 30, 2,1)", "rgba(255, 2, 30,1)"],
            size: 50,
        
       },
       props: {
        selector: ".test",
       },
       position: 0
      },
     ]
    },
    {
     selector
    }
  );
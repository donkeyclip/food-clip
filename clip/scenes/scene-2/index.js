import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { leftMove } from "../../library/leftMove";
import { topMove } from "../../library/topMove";
import { scale } from "../../library/scale";
import { opacity } from "../../library/opacity";
import { heightMove } from "../../library/heightMove";

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


const startTime = 800;
const startTime2 = 800+600+400+200+1500+500;
const startTime3 = 800+600+400+200+1500+500+600+400+200+1500+500;
clip.addIncident(heightMove("100%",".side-bar",800,0,"easeOutSine"),startTime);
clip.addIncident(scale(1,".dish0 .image",1000,0,"easeOutSine"),startTime);
clip.addIncident(leftMove("10%",".dish0 .name",600,0,"easeOutSine"),startTime);
clip.addIncident(leftMove("0%",".dish0 .name",400,0,"easeOutSine"),startTime+600);
clip.addIncident(topMove("0%",".dish0 .description",400,0,"easeOutSine"),startTime+600);
clip.addIncident(opacity(1,".dish0 .price",100),startTime+600+400);
clip.addIncident(opacity(1,".dish0 .offer",100),startTime+600+400+200);


clip.addIncident(scale(0.5,".dish0 .image",600),startTime+600+400+200+1500);
clip.addIncident(leftMove("76%",".dish0 .image",600),startTime+600+400+200+1500);
clip.addIncident(topMove("20%",".dish0 .image",600),startTime+600+400+200+1500);
clip.addIncident(opacity(0,".dish0 .info",600),startTime+600+400+200+1500);
///////////
clip.addIncident(scale(1,".dish1 .image",1000,0,"easeOutSine"),startTime2);
clip.addIncident(leftMove("10%",".dish1 .name",600,0,"easeOutSine"),startTime2);
clip.addIncident(leftMove("0%",".dish1 .name",400,0,"easeOutSine"),startTime2+600);
clip.addIncident(topMove("0%",".dish1 .description",400,0,"easeOutSine"),startTime2+600);
clip.addIncident(opacity(1,".dish1 .price",100),startTime2+600+400);
clip.addIncident(opacity(1,".dish1 .offer",100),startTime2+600+400+200);


clip.addIncident(scale(0.5,".dish1 .image",600),startTime2+600+400+200+1500);
clip.addIncident(leftMove("76%",".dish1 .image",600),startTime2+600+400+200+1500);
clip.addIncident(opacity(0,".dish1 .info",600),startTime2+600+400+200+1500);
//////
clip.addIncident(scale(1,".dish2 .image",1000,0,"easeOutSine"),startTime3);
clip.addIncident(leftMove("10%",".dish2 .name",600,0,"easeOutSine"),startTime3);
clip.addIncident(leftMove("0%",".dish2 .name",400,0,"easeOutSine"),startTime3+600);
clip.addIncident(topMove("0%",".dish2 .description",400,0,"easeOutSine"),startTime3+600);
clip.addIncident(opacity(1,".dish2 .price",100),startTime3+600+400);
clip.addIncident(opacity(1,".dish2 .offer",100),startTime3+600+400+200);


clip.addIncident(scale(0.5,".dish2 .image",600),startTime3+600+400+200+1500);
clip.addIncident(leftMove("76%",".dish2 .image",600),startTime3+600+400+200+1500);
clip.addIncident(topMove("80%",".dish2 .image",600),startTime3+600+400+200+1500);
clip.addIncident(opacity(0,".dish2 .info",600),startTime3+600+400+200+1500);

export default clip;

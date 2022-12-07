import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { topMove } from "./library/topMove";
import { leftMove } from "./library/leftMove";
import { opacity } from "./library/opacity";
import { scale } from "./library/scale";
import { rotate } from "./library/rotate";
import { textReveal } from "./library/textReveal";
import { rotatedLineReveal } from "./library/rotatedLineReveal";
import { svgDraw } from "./library/svgDraw";
import { hexagonCircle } from "./library/hexagonCircle";
import { ripples } from "./library/ripples";
import { line } from "./library/line";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Nerko+One&family=Rye&family=Shojumaru&family=IBM+Plex+Sans+Arabic&family=Lobster&display=swap'`,
    },
  ],
});

clip.addIncident(hexagonCircle(800,450,50,".container1"),0);

clip.addIncident(textReveal('Palatino, serif',"For you that love",".quote1a",1500),500);
clip.addIncident(textReveal('Palatino, serif',"@initParams.category",".quote1b",1500),500);
clip.addIncident(textReveal('Palatino, serif',"we have the best deals",".quote2",1500),500);
clip.addIncident(textReveal('Palatino, serif',"near you",".quote3",1500),500);

clip.addIncident(opacity(1,".l",300,"@stagger(0,500)"),200);
clip.addIncident(topMove("100%",".container1",500),4000);
clip.addIncident(svgDraw(0,".dish path",1),0);
clip.addIncident(opacity(1,".dish:nth-child(1)",1),0);


const startTime = 4000;
const startTime2 = startTime+7000+400;
const startTime3 = startTime+startTime2+3500;
clip.addIncident(scale(2,".dish:nth-child(1) .image",50,0,"easeOutSine"),startTime);
clip.addIncident(hexagonCircle(800,450,50,".dish:nth-child(1) .background1"),startTime);
clip.addIncident(ripples(".dish:nth-child(1) .background2", 7000),startTime);
clip.addIncident(leftMove("40%",".dish:nth-child(1) .info",800,0,"easeOutBounce"),200+startTime);
clip.addIncident(leftMove("0%",".dish:nth-child(1) .description",500,0,"easeOutSine"),1000+startTime);
clip.addIncident(rotatedLineReveal("@initParams.dishes[0].brand","@initParams.city",".restaurant"),startTime+1000);
clip.addIncident(topMove("0%",".stars",400),startTime+3200);
clip.addIncident(topMove("-100%",".stars",400),startTime+6000);
clip.addIncident(svgDraw(1,".circles-svg path",2000,"@stagger(0,300)"),3000+startTime);
clip.addIncident(scale(1,".dish:nth-child(1) .price-wrapper",800),3500+startTime);
clip.addIncident(line(".dish:nth-child(1) .price",200),5200+startTime);
clip.addIncident(opacity(0,".dish:nth-child(1) .offer",200),5500+startTime);
clip.addIncident(opacity(1,".dish:nth-child(1) .offer",200),5700+startTime);
clip.addIncident(rotate("8deg",".dish:nth-child(1) .image",3500),50+startTime);
clip.addIncident(rotate("0deg",".dish:nth-child(1) .image",3500),3550+startTime);

//circle
clip.addIncident(scale(3,".top-circle",500),7000+startTime);
clip.addIncident(opacity(0,".dish:nth-child(1)",1),7000+startTime+490);
clip.addIncident(svgDraw(0,".circles-svg path",1),7000+startTime+490);
clip.addIncident(opacity(1,".dish:nth-child(2)",1),7000+startTime+490);
clip.addIncident(opacity(0,".top-circle",500),7000+startTime+500);
clip.addIncident(scale(0,".top-circle",1),7000+startTime+1000);
clip.addIncident(opacity(1,".top-circle",1),7000+startTime+1000);
////////////////////////////////////////////////////////////////////////////////
clip.addIncident(scale(2,".dish:nth-child(2) .image",50,0,"easeOutSine"),startTime2);
clip.addIncident(hexagonCircle(800,450,50,".dish:nth-child(2) .background1"),startTime2);
clip.addIncident(ripples(".dish:nth-child(2) .background2", 7000),startTime2);
clip.addIncident(leftMove("40%",".dish:nth-child(2) .info",800,0,"easeOutBounce"),200+startTime2);
clip.addIncident(leftMove("0%",".dish:nth-child(2) .description",500,0,"easeOutSine"),1000+startTime2);
clip.addIncident(rotatedLineReveal("@initParams.dishes[1].brand","@initParams.city",".restaurant"),startTime2+1000);
clip.addIncident(topMove("0%",".stars",400),startTime2+3200);
clip.addIncident(topMove("-100%",".stars",400),startTime2+6000);
clip.addIncident(svgDraw(1,".circles-svg path",2000,"@stagger(0,300)"),3000+startTime2);
clip.addIncident(scale(1,".dish:nth-child(2) .price-wrapper",800),3500+startTime2);
clip.addIncident(line(".dish:nth-child(2) .price",200),5200+startTime2);
clip.addIncident(opacity(0,".dish:nth-child(2) .offer",200),5500+startTime2);
clip.addIncident(opacity(1,".dish:nth-child(2) .offer",200),5700+startTime2);
clip.addIncident(rotate("8deg",".dish:nth-child(2) .image",3500),50+startTime2);
clip.addIncident(rotate("0deg",".dish:nth-child(2) .image",3500),3550+startTime2);

//circle
clip.addIncident(scale(3,".top-circle",500),7000+startTime2);
clip.addIncident(opacity(0,".dish:nth-child(2)",1),7000+startTime2+490);
clip.addIncident(svgDraw(0,".circles-svg path",1),7000+startTime2+490);
clip.addIncident(opacity(1,".dish:nth-child(3)",1),7000+startTime2+490);
clip.addIncident(opacity(0,".top-circle",500),7000+startTime2+500);
clip.addIncident(scale(0,".top-circle",1),7000+startTime2+1000);
clip.addIncident(opacity(1,".top-circle",1),7000+startTime2+1000);
//////////////////////////////////////////////////////////////////////////////
clip.addIncident(scale(2,".dish:nth-child(3) .image",50,0,"easeOutSine"),startTime3);
clip.addIncident(hexagonCircle(800,450,50,".dish:nth-child(3) .background1"),startTime3);
clip.addIncident(ripples(".dish:nth-child(3) .background2", 7000),startTime3);
clip.addIncident(leftMove("40%",".dish:nth-child(3) .info",800,0,"easeOutBounce"),200+startTime3);
clip.addIncident(leftMove("0%",".dish:nth-child(3) .description",500,0,"easeOutSine"),1000+startTime3);
clip.addIncident(rotatedLineReveal("@initParams.dishes[2].brand","@initParams.city",".restaurant"),startTime3+1000);
clip.addIncident(topMove("0%",".stars",400),startTime3+3200);
clip.addIncident(topMove("-100%",".stars",400),startTime3+6000);
clip.addIncident(svgDraw(1,".circles-svg path",2000,"@stagger(0,300)"),3000+startTime3);
clip.addIncident(scale(1,".dish:nth-child(3) .price-wrapper",800),3500+startTime3);
clip.addIncident(line(".dish:nth-child(3) .price",200),5200+startTime3);
clip.addIncident(opacity(0,".dish:nth-child(3) .offer",200),5500+startTime3);
clip.addIncident(opacity(1,".dish:nth-child(3) .offer",200),5700+startTime3);
clip.addIncident(rotate("8deg",".dish:nth-child(3) .image",3500),50+startTime3);
clip.addIncident(rotate("0deg",".dish:nth-child(3) .image",3500),3550+startTime3);

//circle
clip.addIncident(scale(3,".top-circle",500),7000+startTime3);
clip.addIncident(opacity(0,".dish:nth-child(3)",1),7000+startTime3+490);
clip.addIncident(opacity(0,".circles-svg",1),7000+startTime3+490);
clip.addIncident(opacity(0,".top-circle",500),7000+startTime3+500);
clip.addIncident(opacity(0,".container2",500),7000+startTime3+500);
clip.addIncident(topMove("100%",".container2",1),7000+startTime3+500+500);
clip.addIncident(scale(0,".top-circle",1),7000+startTime3+1000);
clip.addIncident(opacity(1,".top-circle",1),7000+startTime3+1000);
///////////////////////////////////////////
clip.addIncident(topMove("0%",".plate",500,"@stagger(0,300)","easeOutSine"),7000+startTime3+500);
clip.addIncident(hexagonCircle(267,450,50,".plate .background"),500+startTime+500);
import { CSSEffect } from "@donkeyclip/motorcortex";
export const leftMove = (left,selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        left
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );

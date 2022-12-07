import { CSSEffect } from "@donkeyclip/motorcortex";
export const line = (selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        textDecoration:"line-through"
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );

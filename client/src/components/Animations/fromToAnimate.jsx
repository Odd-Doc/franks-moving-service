import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { forwardRef, useRef } from "react";

export const FromTo = forwardRef(({ children, ...props }, ref) => {
  const el = useRef();
  const animation = useRef();
  const screenSizes = {
    small: 400,
    medium: 800,
    large: 1024,
  };

  useGSAP(() => {
    let mm = gsap.matchMedia();
    // let from = {
    //   x: props.from.x,
    //   y: props.from.y,
    // };
    // let to = {
    //   x: props.to.x,
    //   y: props.to.y,
    // };
    mm.add(
      {
        // set up any number of conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: ${screenSizes.large + 1}px)`,
        isTablet: `(min-width: ${screenSizes.small + 1}px)`,
        isMobile: `(max-width: ${screenSizes.small}px)`,
      },
      (context) => {
        animation.current = gsap.fromTo(
          el.current.children,
          props.from,
          props.to
        );

        // if (context.conditions.isDesktop) {
        //   console.clear();
        //   console.log("desktop");
        // } else if (context.conditions.isTablet) {
        //   console.clear();
        //   console.log("tablet");
        // } else if (context.conditions.isMobile) {
        //   console.clear();
        //   console.log("mobile");
        // }
      }
    );
    return () => mm.revert();
  });

  useGSAP(() => {
    // forward the animation instance
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return (
    <div style={{ display: "flex" }} ref={el}>
      {children}
    </div>
  );
});

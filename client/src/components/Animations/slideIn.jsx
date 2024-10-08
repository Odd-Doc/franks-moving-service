import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { forwardRef, useRef } from "react";

export const SlideIn = forwardRef(({ children, ...props }, ref) => {
  const el = useRef();
  const animation = useRef();

  useGSAP(() => {
    animation.current = gsap.fromTo(
      el.current.children,
      { x: props.from },
      { x: props.to, duration: props.dur }
    );
  }, []);

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

//   const el = useRef();
//   const animation = useRef();

//   useGSAP(() => {
//     animation.current = gsap.fromTo(el.current.children, { from }, { to, dur });
//     // "from" tween - animate from provided values
//     // "fromTo" tween (define both start and end values)
//     // gsap.fromTo(header.current, { x: "-1000px" }, { x: "110px", duration: 2 });
//     // special properties (duration, ease, etc.) go in toVars
//   }, []);

//   return <span ref={el}>{children}</span>;

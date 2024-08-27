import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { forwardRef, useRef } from "react";

export const FadeIn = forwardRef(({ children, ...props }, ref) => {
  const el = useRef();
  const animation = useRef();

  useGSAP(() => {
    animation.current = gsap.fromTo(el.current.children, props.from, props.to);
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

import { Container, Header, Title } from "./style";
import heroBg from ".././../assets/images/franks-landing.jpg";
import { Tween, PlayState, Controls } from "react-gsap";
import { useRef, useState } from "react";
import gsap from "gsap";

import { TransitionLtoR } from "../animations/leftx";
// import { useGSAP } from "@gsap/react";
export const Hero = () => {
  const [isHidden, setHidden] = useState(true);
  const header = useRef();
  const container = useRef();
  // useGSAP(() => {
  //   // "from" tween - animate from provided values
  //   // "fromTo" tween (define both start and end values)
  //   gsap.fromTo(header.current, { x: "-1000px" }, { x: "110px", duration: 2 });
  //   // special properties (duration, ease, etc.) go in toVars
  // }, []);
  // useGSAP(() => {
  //   isHidden
  //     ? gsap.to(header.current, { x: "-1200px" })
  //     : gsap.to(header.current, { x: "1200px" });
  //   console.log(isHidden);
  // }, [isHidden]);
  // const { contextSafe } = useGSAP({ scope: container });
  // const onClickGood = contextSafe(() => {
  //   // gsap.to(header.current, { x: "-1200px" });
  //   setHidden((isHidden) => !isHidden);
  // });

  return (
    <Container ref={container} className="container">
      <TransitionLtoR from={"-1000px"} to={"0px"} dur={2} ref={header}>
        <Header className="header">
          <Title className="company-title ubuntu-bold-italic">
            Frank's Relocation
          </Title>
        </Header>
      </TransitionLtoR>
    </Container>
  );
};

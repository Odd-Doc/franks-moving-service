import { Container, Title, TitleWrapper } from "./style";
import React, { useRef } from "react";
import { SlideIn } from "../Animations/slideIn";
import { Header } from "semantic-ui-react";

import { FromTo } from "../Animations/fromToAnimate";

export const Hero = () => {
  const header = useRef();
  const quote = useRef();
  const container = useRef();

  return (
    <>
      {" "}
      <Container id="home" ref={container} className="container">
        <FromTo from={{ x: "-1000px" }} to={{ x: "0", duration: "1.5" }}>
          <Header as="h1" content="Franks Relocation" />
        </FromTo>
        <FromTo from={{ x: "1000px" }} to={{ x: "0", duration: "1.5" }}>
          <Header as="h2">
            Moving made <span className="header-span">easy</span>, so you can
            focus on what matters most.
          </Header>
        </FromTo>
      </Container>
    </>
  );
};

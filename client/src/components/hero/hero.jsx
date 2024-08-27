import { Container, Title, TitleWrapper } from "./style";
import React, { useRef } from "react";
import { SlideIn } from "../Animations/slideIn";
import { Header } from "semantic-ui-react";
import { media } from "../media-query";
import { FromTo } from "../Animations/fromToAnimate";

export const Hero = () => {
  const header = useRef();
  const quote = useRef();
  const container = useRef();

  return (
    <>
      {" "}
      <Container ref={container} className="container">
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
// "At Frank Relocation, our mission is to provide reliable, efficient,
//           and stress-free moving services to our community. We are committed to
//           treating every customer with respect and care, ensuring that their
//           belongings are handled with the utmost professionalism. Our goal is to
//           make every move a positive experience by delivering exceptional
//           service, fostering trust, and supporting our clients through every
//           step of their journey."
////////////////////////////////////////////////////////////////////////////////
// Moving made easy, so you can focus on what matters most
////////////////////////////////////////////////////////////////////////////////
// "Moving made easy—your local experts for a smooth and stress-free transition.";
////////////////////////////////////////////////////////////////////////////////
// "Relocating made easy—because your move should be as smooth as your new beginning.";
////////////////////////////////////////////////////////////////////////////////
// "Moving made simple—because your move is our mission."

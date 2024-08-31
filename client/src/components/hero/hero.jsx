import { Container, Title, TitleWrapper } from "./style";
import React, { useContext, useRef } from "react";
import { SlideIn } from "../Animations/slideIn";
import { Header } from "semantic-ui-react";
import { QuoteModalContext } from "../../context/QuoteModalContext";
import { FromTo } from "../Animations/fromToAnimate";

export const Hero = () => {
  const { firstModalOpen } = useContext(QuoteModalContext);
  const header = useRef();
  const quote = useRef();
  const container = useRef();

  return (
    <>
      {" "}
      <Container id="home" ref={container} className="container">
        {firstModalOpen ? (
          <>
            <Header as="h1" content="Frank's Relocation" />

            <Header as="h2">
              Moving made <span className="header-span">easy</span>, so you can
              focus on what matters most.
            </Header>
          </>
        ) : (
          <>
            <FromTo from={{ x: "-1000px" }} to={{ x: "0", duration: "1.5" }}>
              <Header as="h1" content="Frank's Relocation" />
            </FromTo>
            <FromTo from={{ x: "1000px" }} to={{ x: "0", duration: "1.5" }}>
              <Header as="h2">
                Moving made <span className="header-span">easy</span>, so you
                can focus on what matters most.
              </Header>
            </FromTo>
          </>
        )}
      </Container>
    </>
  );
};

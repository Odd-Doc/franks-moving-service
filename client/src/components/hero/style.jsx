import styled from "styled-components";
import heroBg from "../../assets/images/franks-landing.jpg";
import heroBgDark from "../../assets/images/franks-landing-dark.jpg";
import heroBgSm from "../../assets/images/franks-landing-small.jpg";
import heroBgSmDark from "../../assets/images/franks-landing-small-dark.jpg";

import { media } from "../media-query";

export const Container = styled.div`
  height: 100vh;
  background-image: url(${heroBgDark});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .ui.header {
    font-family: "Montserrat", sans-serif;
  }
  h1.ui.header {
    font-size: 4rem;
    font-weight: "normal";
    padding: 1rem;
    margin: 0;
    color: white;

    ${media.sm`
      font-size:3rem;
    `}
  }
  h2.ui.header {
    font-size: 2rem;
    font-weight: "normal";
    margin: 0;
    color: white;
    padding-top: 20px;
    padding: 1rem;
    .header-span {
      font-size: 3rem;
      color: ${(props) => props.theme.colors.burntsienna};
      ${media.sm`
      font-size:2rem;
      `}
    }
    ${media.sm`
      font-size:1.4rem;
    `}
  }
  ${media.sm`
  background-image: url(${heroBgSmDark});
  background-position: 150%;
  `}
`;

export const TitleWrapper = styled.div`
  color: white;
  top: 60px;
  position: absolute;
  ${media.sm`
    

  `}
`;
export const Title = styled.h1`
  border-radius: 0px 12px 12px 0px;
  margin: 0;
  display: inline-block;
  font-size: 5em;
`;

export const StyledInput = styled.input``;

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

  h1.ui.header {
    font-size: 4rem;
    font-weight: "normal";
    padding: 1rem;
    margin: 0;
    color: ${(props) => props.theme.colors.honeydew};

    ${media.sm`
      font-size:3rem;
    `}
  }
  h2.ui.header {
    font-size: 2rem;
    font-weight: "normal";
    margin: 0;
    color: ${(props) => props.theme.colors.honeydew};
    padding-top: 20px;

    padding: 1rem;
    .header-span {
      font-size: 1.9rem;
      color: ${(props) => props.theme.colors.redpantone};
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
//  font-size: `${media.sm}` ? "2rem" : "3rem"; */
//             font-weight: "normal";
//             margin-bottom: 0;
//              margin-top: `${media.sm}` ? "1.5em" : "3em";
export const TitleWrapper = styled.div`
  color: white;
  top: 60px;
  position: absolute;
  ${media.sm`
    

  `}
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.honeydew};
  border-radius: 0px 12px 12px 0px;
  margin: 0;
  padding: rem;
  display: inline-block;
  font-size: 5em;
`;

export const StyledInput = styled.input``;

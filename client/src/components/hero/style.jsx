import styled from "styled-components";
import heroBg from "../../assets/images/franks-landing.jpg";
import heroBgSm from "../../assets/images/franks-landing-small.jpg";
import { Button } from "semantic-ui-react";
import { media } from "../media-query";
export const Container = styled.div`
  height: 100vh;
  background-image: url(${heroBg});
  background-size: cover;
  flex: 1;
  ${media.sm`
  background-image: url(${heroBgSm});
    
  `}
`;
export const Header = styled.div`
  position: absolute;
  font-size: 3em;
  color: white;
  /* left: -1200px; */
  top: 450px;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.honeydew};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  margin: 0;
  padding: 1rem;
`;

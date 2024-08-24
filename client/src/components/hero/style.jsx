import styled from "styled-components";
import heroBg from "../../assets/images/franks-landing.jpg";
import heroBgSm from "../../assets/images/franks-landing-small.jpg";
import { media } from "../media-query";
import Button from "../SharedComponents/Button";
export const Container = styled.div`
  height: 100vh;
  background-image: url(${heroBg});
  background-size: cover;
  display: flex;
  justify-content: center;
  ${media.sm`
  background-image: url(${heroBgSm});
  `}
`;
export const Header = styled.div`
  font-size: 3em;
  color: white;
  top: 60px;
  position: absolute;
  ${media.sm`
    font-size: 1em;

  `}
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.honeydew};
  backdrop-filter: blur(10px);
  border-radius: 0px 12px 12px 0px;
  margin: 0;
  padding: 1rem;
  display: inline-block;
`;

export const StyledInput = styled.input``;
export const FormButton = styled(Button)``;

export const GetAQuote = styled.form`
  display: flex;
  background-color: ${(props) => props.theme.colors.nonphotoblue};
  align-self: center;
`;

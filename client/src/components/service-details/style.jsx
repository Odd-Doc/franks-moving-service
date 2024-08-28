import par1 from "../../assets/images/parallax-bg-1.png";
import styled from "styled-components";

export const Service = styled.div`
  font-size: 1.2rem;
  display: flex;
  text-align: center;
  line-height: 1.5em;
  padding: 2rem;
  display: block;
`;

export const Title = styled.h3`
  font-size: 2rem;
`;
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.offwhite};
  flex-direction: column;
  ${Title} {
    font-size: 2em;
  }
  hr {
  }
`;

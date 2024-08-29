import styled from "styled-components";
import aboutMe from "../../assets/images/Logistics.png";
import { mediaQuery } from "../media-query";
export const Title = styled.h2`
  margin: 0;
  padding-bottom: 1rem;
  font-size: 2em;
  ${mediaQuery.md`
    text-align: center;

    
  `}
`;
export const Container = styled.div`
  color: black;
  /* background-color: ${(props) => props.theme.colors.persiangreen}; */
  background-color: white;
  padding: 2rem;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  ${mediaQuery.md`
    flex-direction:column;
    align-items: center;
    
  `}
`;
export const AboutImage = styled.div`
  height: 400px;
  width: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${aboutMe});
  /* ${mediaQuery.md`
    
    
  `} */
`;
export const AboutMe = styled.div`
  padding: 2rem;
  p {
    font-size: 1.5em;
    margin-top: 1rem;
  }
  ${mediaQuery.md`
    padding-left:1rem;
    padding-right:1rem;
    text-align:center;
    
  `}
`;

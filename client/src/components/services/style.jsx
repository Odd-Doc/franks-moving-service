import par1 from "../../assets/images/parallax-bg-1.png";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { mediaQuery } from "../media-query";
export const Service = styled.div`
  font-size: 1.2rem;
  display: flex;
  text-align: center;
  line-height: 3rem;
  padding: 2rem;
  display: block;
  color: white;
`;
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.charcoal};
  padding: 2rem;
  flex-direction: column;
  z-index: 1;

  hr {
  }
`;
export const Title = styled.h3`
  font-size: 4rem;
  color: white;
`;
export const Content = styled.div`
  .service-summary {
    font-size: 1.5rem;
    color: white;
  }
`;
export const StyledLink = styled(HashLink)`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  i {
    font-size: 5rem;
    ${mediaQuery.sm`
      
    `}
  }
  p {
    font-size: 1.5rem;
    color: white;
    ${mediaQuery.sm`
      
    `};
  }
  .fa-house {
    /* color: ${(props) => props.theme.colors.burntsienna}; */
  }
  .fa-building {
    color: ${(props) => props.theme.colors.persiangreen};
  }
  .fa-dolly {
    color: ${(props) => props.theme.colors.saffron};
  }
  .fa-boxes-packing {
    color: ${(props) => props.theme.colors.sandybrown};
  }
  .fa-people-carry-box {
    color: ${(props) => props.theme.colors.burntsienna};
  }
`;
export const ServiceLinksWrapper = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  ${mediaQuery.sm`
      
    `}
`;

import par1 from "../../assets/images/parallax-bg-1.png";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
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
  font-size: 2rem;
  color: white;
`;
export const Content = styled.div``;
export const StyledLink = styled(HashLink)`
  display: flex;
  flex-direction: column;
  color: white;
  i {
    color: ${(props) => props.theme.colors.nonphotoblue};
  }
  .fa-building {
  }
`;
export const ServiceLinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

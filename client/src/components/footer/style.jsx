import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { mediaQuery } from "../media-query";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.charcoal};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;
  font-size: 1.1em;
  justify-content: flex-start;
  padding: 5rem;

  font-size: 1.25em;
  ${mediaQuery.sm`
    padding:3rem;
    align-items:flex-start;
    margin:0;

  `}

  .footer-nav {
    text-decoration: none;
    color: white;
  }
  .cr {
    font-size: 0.7em;
    padding-top: 2rem;
  }
  p {
    margin: 0;
  }
`;
export const IconGroup = styled.div`
  /* padding-top: 1rem; */
  display: flex;
  gap: 2rem;
  img {
    height: 16px;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.platinum};
  }
`;
export const NavLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;
`;

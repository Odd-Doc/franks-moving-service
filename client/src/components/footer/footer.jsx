import { Container, Content, NavLink } from "./style";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
export const scrollTo = (el) => {
  const yOffset = -20; // Adjust the offset to your liking
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
export const Footer = () => {
  return (
    <>
      <Container>
        <Content>
          <NavLink to="#home" scroll={scrollTo}>
            <div>Home</div>
          </NavLink>
          <NavLink to="#services" scroll={scrollTo}>
            Services
          </NavLink>
          <NavLink to="#about" scroll={scrollTo}>
            About
          </NavLink>
          {/* <NavLink to="#contact" scroll={scrollTo}>
            Contact
          </NavLink> */}
          <div className="cr">
            <p>Franks Relocation © Copyright 2024</p>
            <p>Site by Greg Phillips © Copyright 2024</p>
          </div>
        </Content>
      </Container>
    </>
  );
};

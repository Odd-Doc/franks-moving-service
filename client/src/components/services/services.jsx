import { Container, Content, Service, StyledLink, Title } from "./style";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Services = () => {
  return (
    <Container className="container">
      <Title>Full Service Movers</Title>
      <Content>
        <StyledLink>
          <div>
            <i className="fa-solid fa-house"></i>
            Residental Moving
          </div>
        </StyledLink>

        <StyledLink>
          <div>
            <i className="fa-solid fa-building"></i>
            Apartments
          </div>
        </StyledLink>

        <StyledLink>
          <div>
            <i className="fa-solid fa-dolly"></i>
            Commercial Offices
          </div>
        </StyledLink>

        <StyledLink>
          <div>
            <i className="fa-solid fa-boxes-packing"></i>
            Packing
          </div>
        </StyledLink>

        <StyledLink>
          <div>
            <i className="fa-solid fa-people-carry-box"></i>
            Pickup and Delivery
          </div>
        </StyledLink>
      </Content>
    </Container>
  );
};

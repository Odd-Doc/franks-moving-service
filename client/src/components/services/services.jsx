import {
  Container,
  Content,
  Service,
  ServiceLinksWrapper,
  StyledLink,
  Title,
} from "./style";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Services = () => {
  return (
    <Container className="container">
      <Title>Full Service Movers</Title>
      <Content>
        <p className="service-summary">
          Our moving company offers a wide range of services to meet all your
          relocation needs. Whether you're moving from your home, office, or
          apartment. Our experienced team is here to help every step of the way.
          From packing and unpacking to transportation, we ensure a smooth and
          stress-free moving experience. Let us take the heavy lifting off your
          hands!
        </p>
        <ServiceLinksWrapper>
          <StyledLink>
            <i className="fa-solid fa-house"></i>
            Residental Moving
          </StyledLink>

          <StyledLink>
            <i className="fa-solid fa-building"></i>
            Apartments
          </StyledLink>

          <StyledLink>
            <i className="fa-solid fa-dolly"></i>
            Commercial Offices
          </StyledLink>

          <StyledLink>
            <i className="fa-solid fa-boxes-packing"></i>
            Packing
          </StyledLink>

          <StyledLink>
            <i className="fa-solid fa-people-carry-box"></i>
            Pickup and Delivery
          </StyledLink>
        </ServiceLinksWrapper>
      </Content>
    </Container>
  );
};

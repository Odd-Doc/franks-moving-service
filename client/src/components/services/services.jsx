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
      <Title className="ubuntu-bold ">Full Service Movers</Title>
      <Content>
        <p className="service-summary">
          Our moving company offers a wide range of services to meet all your
          relocation needs, whether you're moving from your home, office, or
          apartment. With 10 years of experience, our team is here to help every
          step of the way. We ensure a smooth and stress-free moving experience,
          with no hidden fees and no stairway charges. From packing to
          transportation, we've got you covered. We provide moving blankets and
          shrink wrap at no additional cost. Let us take the heavy lifting off
          your hands!
        </p>
        <ServiceLinksWrapper>
          <StyledLink smooth to={"#residential-service"}>
            <i className="fa-solid fa-house"></i>
            <p>Residental Moving</p>
          </StyledLink>
          <StyledLink smooth to={"#apartment-service"}>
            <i className="fa-solid fa-building"></i>
            <p>Apartments</p>
          </StyledLink>

          <StyledLink smooth to={"#office-service"}>
            <i className="fa-solid fa-dolly"></i>
            <p>Commercial Offices</p>
          </StyledLink>

          <StyledLink smooth to={"#packing-service"}>
            <i className="fa-solid fa-boxes-packing"></i>
            <p>Packing</p>
          </StyledLink>

          {/* <StyledLink smooth to={"#apartment-service"}>
            <i className="fa-solid fa-people-carry-box"></i>
            <p>Pickup and Delivery</p>
          </StyledLink> */}
        </ServiceLinksWrapper>
      </Content>
    </Container>
  );
};

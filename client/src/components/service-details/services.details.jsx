import { Container, Service, Title } from "./style";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const ServiceDetails = () => {
  return (
    <Container className="container">
      <Service>
        <Title className="service-title">
          Residential Moving
          {/* <hr /> */}
        </Title>
        From packing your belongings to transporting them safely to your new
        home, we handle every aspect of your residential move with care and
        precision.
      </Service>
      <Service>
        <Title className="service-title">
          Commercial Office Moving
          {/* <hr /> */}
        </Title>
        We specialize in minimizing downtime for businesses. Our team
        efficiently manages office relocations, including packing, moving, and
        setting up your workspace.
      </Service>
      <Service>
        <Title className="service-title">
          Packing and Unpacking
          {/* <hr /> */}
        </Title>
        We offer full-service packing to protect your items during transit, as
        well as unpacking services to help you settle into your new space
        quickly.
      </Service>

      <Service>
        <Title className="service-title">
          Loading and Unloading
          {/* <hr /> */}
        </Title>
        Our trained movers handle the heavy lifting, ensuring your items are
        loaded and unloaded with the utmost care.
      </Service>
    </Container>
  );
};

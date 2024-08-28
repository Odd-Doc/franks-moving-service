import { Container, Service, Title } from "./style";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const ServiceDetails = () => {
  return (
    <Container className="container">
      <Service>
        <Title className="service-title ubuntu-bold">
          Residential Moving
          {/* <hr /> */}
        </Title>
        Moving to a new home can be both exciting and stressful. Our Residential
        Moving Services are designed to make your move as smooth and hassle-free
        as possible. We handle every aspect of your relocation with care and
        professionalism, ensuring that your belongings arrive safely at your new
        home.
      </Service>
      <Service>
        <Title className="service-title ubuntu-bold">
          Office Moving
          {/* <hr /> */}
        </Title>
        Our professional office moving service is designed to ensure a seamless
        and stress-free relocation for businesses of all sizes. We understand
        that minimizing downtime and disruption is critical, so we offer
        comprehensive solutions tailored to meet your specific needs.
      </Service>
      <Service>
        <Title className="service-title ubuntu-bold">
          Packing Services
          {/* <hr /> */}
        </Title>
        packing service ensures your belongings are carefully and efficiently
        packed for a stress-free move. Whether you need full-service packing,
        where we handle everything from your fragile items to everyday
        essentials, or just assistance with specific items, our experienced team
        is equipped to protect your possessions.
      </Service>

      <Service>
        <Title className="service-title ubuntu-bold">
          Loading and Unloading
          {/* <hr /> */}
        </Title>
        Our Loading and Unloading Service ensures a smooth and efficient moving
        experience by handling the heavy lifting for you. Whether you're
        relocating locally or long-distance, our skilled team is trained to
        safely load and unload your belongings, minimizing the risk of damage
        during transit.
      </Service>
    </Container>
  );
};

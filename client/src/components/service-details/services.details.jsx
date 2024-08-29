import {
  Container,
  Service,
  ServiceDescription,
  ServicesImage,
  Title,
  Content,
} from "./style";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const ServiceDetails = () => {
  return (
    <Container className="container">
      <Service>
        <ServiceDescription>
          <div className="service-img-container">
            <ServicesImage id="service-img1" />
          </div>
          <Content>
            <Title className="service-title ubuntu-bold">
              Residential Homes
            </Title>
            Moving to a new home can be both exciting and stressful. Our
            Residential Moving Services are designed to make your move as smooth
            and hassle-free as possible. We handle every aspect of your
            relocation with care and professionalism, ensuring that your
            belongings arrive safely at your new home.
          </Content>
        </ServiceDescription>
      </Service>
      <Service>
        <ServiceDescription>
          <Content>
            <Title className="service-title ubuntu-bold">Apartments</Title>
            Dont worry, there are{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "#ebebeb",
                textDecoration: "underline",
              }}
            >
              no stairway charges!
            </span>{" "}
            Our apartment moving service is designed to make your relocation
            experience seamless and stress-free. Whether you're moving within
            the same building, across town, or to a new city, our professional
            team is here to handle every aspect of your move with care and
            efficiency.
          </Content>{" "}
          <div className="service-img-container">
            <ServicesImage id="service-img2" />
          </div>
        </ServiceDescription>
      </Service>
      {/* <Service>
        <Title className="service-title ubuntu-bold">Office Moving</Title>
        <ServiceDescription>
          Our professional office moving service is designed to ensure a
          seamless and stress-free relocation for businesses of all sizes. We
          understand that minimizing downtime and disruption is critical, so we
          offer comprehensive solutions tailored to meet your specific needs.
        </ServiceDescription>
      </Service>
      <Service>
        <Title className="service-title ubuntu-bold">Packing Services</Title>
        <ServiceDescription>
          packing service ensures your belongings are carefully and efficiently
          packed for a stress-free move. Whether you need full-service packing,
          where we handle everything from your fragile items to everyday
          essentials, or just assistance with specific items, our experienced
          team is equipped to protect your possessions.
        </ServiceDescription>
      </Service>
      <Service>
        <Title className="service-title ubuntu-bold">
          Loading and Unloading
        </Title>
        <ServiceDescription>
          Our Loading and Unloading Service ensures a smooth and efficient
          moving experience by handling the heavy lifting for you. Whether
          you're relocating locally or long-distance, our skilled team is
          trained to safely load and unload your belongings, minimizing the risk
          of damage during transit.
        </ServiceDescription>
      </Service> */}
    </Container>
  );
};

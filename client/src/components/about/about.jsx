import { useInView } from "react-intersection-observer";
import { Container } from "./style";

export const About = () => {
  return (
    <Container className="container">
      Hi, I'm Frank, the proud owner of our local moving company. With over 10
      years of experience in the moving industry, I've built this business on
      the principles of hard work, integrity, and exceptional customer service.
      My team and I are dedicated to making your move as smooth and stress-free
      as possible. We handle every aspect of your relocation with care, from
      packing to transportation, so you can focus on settling into your new
      space. No job is too big or small for us—we treat every move as if it were
      our own. I'm committed to providing transparent pricing with no hidden
      fees and ensuring that every customer feels confident and satisfied with
      our services. When you choose us, you're not just getting movers; you're
      getting a team that cares about making your transition a positive
      experience.
    </Container>
  );
};

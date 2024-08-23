import { About } from "../../components/about/about";
import { Navbar } from "../../components/navbar/navbar";

import { ContactMe } from "../../components/contactMe/contactMe";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { PageWrapper } from "./style";
import { Hero } from "../../components/hero/hero";
import { Services } from "../../components/services/services";
import gsap from "gsap";
import { useRef } from "react";
const Home = () => {
  const container = useRef();
  const parallax = useRef();

  return (
    <PageWrapper ref={container}>
      <div ref={parallax}>
        <Hero />
      </div>
      <div ref={parallax}>
        <Services />
      </div>
      <div ref={parallax}>
        <About />
      </div>
      <div ref={parallax}>
        <ContactMe />
      </div>
    </PageWrapper>
  );
};
export default Home;

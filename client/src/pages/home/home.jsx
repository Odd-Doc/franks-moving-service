import { About } from "../../components/about/about";
import { Navbar } from "../../components/navbar/navbar";

import { ContactMe } from "../../components/contactMe/contactMe";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { PageWrapper, QuoteRequestButton } from "./style";
import { Hero } from "../../components/hero/hero";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlideIn } from "../../components/Animations/slideIn";
import { FromTo } from "../../components/Animations/fromToAnimate";
import { QuoteModal } from "../../components/QuoteReq/GetAQuote";
import { ServiceDetails } from "../../components/service-details/services.details";
import { Services } from "../../components/services/services";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const parallaxi = useRef();
  const container = useRef();
  const quoteRef = useRef();
  // useGSAP(() => {
  //   ScrollTrigger.refresh();
  //   [...parallaxi.current.children].forEach((child, i) => {
  //     gsap.fromTo(
  //       child,
  //       { yPercent: 0 },
  //       {
  //         yPercent: 20,

  //         scrollTrigger: {
  //           id: `section-${i + 1}`,
  //           trigger: child,
  //           start: "top top",
  //           end: "bottom top",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <>
      {" "}
      <PageWrapper ref={container}>
        <QuoteRequestButton className="quote-button-slide">
          <FromTo
            from={{ y: "10px", opacity: "0" }}
            to={{ y: "-100px", opacity: "1", duration: "1.5" }}
          >
            <QuoteModal />
          </FromTo>
        </QuoteRequestButton>
        <div>
          <Hero />
        </div>
        {/* <div ref={parallaxi}> */}
        <div id="services">
          <Services />
        </div>
        <div>
          <ServiceDetails />
        </div>
        <div id="about">
          <About />
        </div>
        <div>
          <Footer />
        </div>
        {/* </div> */}
      </PageWrapper>
    </>
  );
};
export default Home;

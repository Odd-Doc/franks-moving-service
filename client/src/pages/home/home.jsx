import { About } from "../../components/about/about";
import { ContactMe } from "../../components/contactMe/contactMe";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { PageWrapper, QuoteButtonContainer } from "./style";
import { Hero } from "../../components/hero/hero";
import gsap from "gsap";
import { useContext, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FromTo } from "../../components/Animations/fromToAnimate";
import { QuoteButton, QuoteModal } from "../../components/modals/QuoteModal";
import { ServiceDetails } from "../../components/service-details/services.details";
import { Services } from "../../components/services/services";
import { QuoteModalContext } from "../../context/QuoteModalContext";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const parallaxi = useRef();
  const container = useRef();
  const quoteRef = useRef();
  const [firstModalOpen, setFirstModalOpen] = useState(false);

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
    <PageWrapper>
      {firstModalOpen ? (
        <QuoteModalContext.Provider
          value={{ firstModalOpen, setFirstModalOpen }}
        >
          <div>
            {" "}
            <div className="modal-sticky-wrap">
              <QuoteModal />
              <div>
                <QuoteButtonContainer className="quote-button-slide">
                  {firstModalOpen == true ? (
                    <FromTo
                      from={{ y: "200%", opacity: "0" }}
                      to={{ y: "-100px", opacity: "1", duration: "0" }}
                    >
                      <QuoteButton />
                    </FromTo>
                  ) : (
                    <FromTo
                      from={{ y: "200%", opacity: "0" }}
                      to={{ y: "-100px", opacity: "1", duration: "1.5" }}
                    >
                      <QuoteButton />
                    </FromTo>
                  )}
                </QuoteButtonContainer>

                <div>
                  <Hero firstModalOpen={firstModalOpen} />
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
              </div>
            </div>
          </div>
        </QuoteModalContext.Provider>
      ) : (
        <QuoteModalContext.Provider
          value={{ firstModalOpen, setFirstModalOpen }}
        >
          <div>
            <QuoteButtonContainer className="quote-button-slide">
              {firstModalOpen == true ? (
                <FromTo
                  from={{ y: "0%", opacity: "0" }}
                  to={{ y: "0px", opacity: "1", duration: "0" }}
                >
                  <QuoteButton />
                </FromTo>
              ) : (
                <FromTo
                  from={{ y: "200%", opacity: "0" }}
                  to={{ y: "-100px", opacity: "1", duration: "1.5" }}
                >
                  <QuoteButton />
                </FromTo>
              )}
            </QuoteButtonContainer>

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
          </div>
        </QuoteModalContext.Provider>
      )}
    </PageWrapper>
  );
};
export default Home;

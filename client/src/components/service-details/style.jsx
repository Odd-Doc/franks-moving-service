import par1 from "../../assets/images/parallax-bg-1.png";
import styled from "styled-components";
import movingCouch from "../../assets/images/moving-couch.jpg";
import officeMove from "../../assets/images/office-move.jpg";
import apartmentMove from "../../assets/images/moving-apartment.jpg";
import { mediaQuery } from "../media-query";
export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.persiangreen};
  box-shadow: 5px 7px 20px #2e2e2e;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
export const ServicesImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 100%;
  background-size: cover;
  box-shadow: 5px 0px 20px #2e2e2e;
`;
export const Service = styled.div`
  font-size: 1.2rem;
  line-height: 1.5em;
  padding: 2rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
  padding-bottom: 1rem;
`;
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.saffron};
  color: white;
  ${Title} {
    margin: 0;

    text-align: center;
    font-size: 2em;
    ${mediaQuery.md`
      

    `}
  }
  .service-img-container {
    z-index: 2;
  }
  .service-img-container.screen-md {
    display: none;
    ${mediaQuery.md`
      display: block;
    `}
  }
  .service-img-container.screen-lg {
    ${mediaQuery.md`
      display: none;
    `}
  }
  #service-img1 {
    background-image: url(${movingCouch});
  }
  #service-img2 {
    background-image: url(${apartmentMove});
    background-position: 83%;
  }
  #service-img3 {
    background-image: url(${officeMove});
    background-position: 60%;
  }
  :nth-child(even).service-img-container.screen-lg {
    margin-left: -100px;
  }
  :nth-child(odd) ${Content} {
    padding-left: 9rem;
    padding-right: 2rem;
    transform: translateX(-100px);
    border-radius: 8px;
    ${mediaQuery.md`
      padding: 2rem;
      transform: translateX(0px);
      transform: translateY(-10px);
    `}
  }
  :nth-child(even) ${Content} {
    padding-right: 8rem;
    padding-left: 4rem;
    transform: translateX(100px);
    border-radius: 8px;
    ${mediaQuery.md`
    padding:2rem;
       transform: translateX(0px);
       transform: translateY(-10px);
    `};
  }
`;

export const ServiceDescription = styled.div`
  display: flex;
  align-items: center;
  ${mediaQuery.md`
   flex-direction: column;    
  `}
`;

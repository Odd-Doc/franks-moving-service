import par1 from "../../assets/images/parallax-bg-1.png";
import styled from "styled-components";
import movingCouch from "../../assets/images/moving-couch.jpg";
import apartmentMove from "../../assets/images/moving-apartment.jpg";

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.persiangreen};
  padding-top: 80px;
  padding-bottom: 80px;
  box-shadow: 5px 7px 20px #2e2e2e;
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
`;
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.saffron};
  color: white;
  box- ${Title} {
    font-size: 2em;
  }
  .service-img-container {
    z-index: 1;
  }
  #service-img1 {
    background-image: url(${movingCouch});
  }
  #service-img2 {
    background-image: url(${apartmentMove});
    background-position: 83%;
  }
  :nth-child(odd).service-img-container {
    margin-right: -100px;
  }
  :nth-child(even).service-img-container {
    margin-left: -100px;
  }
  :nth-child(odd) ${Content} {
    padding-left: 10rem;
    padding-right: 1rem;
    border-radius: 0 8px 8px 0px;
  }
  :nth-child(even) ${Content} {
    padding-right: 8rem;
    padding-left: 4rem;
    border-radius: 8px 0px 0px 8px;
  }
`;

export const ServiceDescription = styled.div`
  display: flex;
  align-items: center;
`;

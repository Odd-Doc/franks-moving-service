import {
  Container,
  GetAQuote,
  Header,
  StyledInput,
  Title,
  FormButton,
} from "./style";

import { useRef, useState } from "react";
import { SlideIn } from "../Animations/slideIn";
import { Form } from "react-router-dom";

const FormInput = ({ ...props }) => {
  return (
    <StyledInput
      type={props.text}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChange}
      id={props.id}
    />
  );
};

export const Hero = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isHidden, setHidden] = useState(true);
  const header = useRef();
  const quote = useRef();
  const container = useRef();

  return (
    <>
      {" "}
      <Header className="header">
        <SlideIn from={"-1000px"} to={"0px"} dur={2} ref={header}>
          <Title className="company-title ubuntu-bold-italic">
            Frank's Relocation
          </Title>
        </SlideIn>{" "}
      </Header>
      <Container ref={container} className="container">
        <SlideIn from={"1000px"} to={"0px"} dur={2} ref={quote}>
          <GetAQuote>
            <label htmlFor="firstName">First name:</label>
            <FormInput
              onChange={setFirstName}
              type="text"
              id="firstName"
              name="fname"
              value={firstName}
              placeholder="First name"
              className="first-name--quote"
            />
            <label htmlFor="lastName">Last name:</label>
            <FormInput
              onChange={setLastName}
              type="text"
              id="lastName"
              name="lname"
              value={lastName}
              placeholder="Last name"
              className="last-name--quote"
            />
            <FormButton />
          </GetAQuote>
        </SlideIn>
      </Container>
    </>
  );
};

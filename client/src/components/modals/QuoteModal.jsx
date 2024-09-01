import React, { useContext, useRef, useState } from "react";

import {
  Container,
  QuoteButtonContainer,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalContent,
} from "./style";
import { Input, Form } from "semantic-ui-react";
import { QuoteModalContext } from "../../context/QuoteModalContext";
import emailjs from "@emailjs/browser";
import { Button } from "../SharedComponents/Button";
////////////////////////////////////////////////////////////////////////
// Modal form input
////////////////////////////////////////////////////////////////////////
const FormInput = ({ ...props }) => {
  return (
    <Input
      type={props.text}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChange}
      id={props.id}
      icon={props.icon}
    />
  );
};
////////////////////////////////////////////////////////////////////////
// Modal Button
////////////////////////////////////////////////////////////////////////

export const QuoteButton = () => {
  const { firstModalOpen, setFirstModalOpen } = useContext(QuoteModalContext);
  return (
    <QuoteButtonContainer $firstModalOpen={firstModalOpen}>
      <Button
        style={{ backgroundColor: "#e76f51ff", color: "white" }}
        onClick={() => setFirstModalOpen(!firstModalOpen)}
      >
        Get a Quote
      </Button>
    </QuoteButtonContainer>
  );
};

////////////////////////////////////////////////////////////////////////
// Modal popup
////////////////////////////////////////////////////////////////////////
export const QuoteModal = () => {
  const { firstModalOpen, setFirstModalOpen } = useContext(QuoteModalContext);
  const [secondModalOpen, setSecondModelOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [fromAddress, setFromAddress] = useState("");

  const form = useRef();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleFromAddress = (e) => {
    setFromAddress(e.target.value);
  };
  const handleToAddress = (e) => {
    setToAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_kmtb2x7", "contact_form", form.current, {
        publicKey: "G9aCPaeIpZoitL2WE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED....", error.text);
        }
      );
    setSecondModelOpen(!secondModalOpen);
    //clear state
    setFullName("");
    setEmail("");
    setPhoneNumber();
    setFromAddress();
    setToAddress();
  };

  return (
    <Container
      onClick={() => {
        setFirstModalOpen(!firstModalOpen);
      }}
    >
      {secondModalOpen ? (
        <Modal onClick={(e) => e.stopPropagation()}>
          <ModalHeader>I'll get right back to you!</ModalHeader>
          <ModalFooter>
            <div>
              <button
                type="button"
                onClick={() => {
                  setFirstModalOpen(!firstModalOpen);
                }}
              >
                Sound Good!
              </button>
            </div>
          </ModalFooter>
        </Modal>
      ) : (
        <Form ref={form} onSubmit={(e) => handleSubmit(e)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>Just need a few details</ModalHeader>
            <ModalContent>
              <div className="input">
                <FormInput
                  type="text"
                  name="fullName"
                  value={fullName}
                  placeholder="Full Name"
                  className="full-name"
                  onChange={handleFullNameChange}
                  id="FullName"
                  icon="address card"
                />
                {/* <i className="fa-solid fa-map"></i> */}
              </div>
              <div className="input">
                <FormInput
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  className="email"
                  onChange={handleEmailChange}
                  id="Email"
                  icon="mail"
                />
                {/* <i className="fa-solid fa-map"></i> */}
              </div>
              <div className="input">
                <FormInput
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber}
                  placeholder="Phone Number"
                  className="phone-number"
                  onChange={handlePhoneNumberChange}
                  id="PhoneNumber"
                  icon="phone"
                />
                {/* <i className="fa-solid fa-map"></i> */}
              </div>
              <div className="input">
                <FormInput
                  type="text"
                  name="fromAddress"
                  value={fromAddress}
                  placeholder="Moving from..."
                  className="from-zip"
                  onChange={handleFromAddress}
                  id="FromAddress"
                  icon="map"
                />
                {/* <i className="fa-solid fa-map"></i> */}
              </div>
              <div className="input">
                <FormInput
                  type="text"
                  name="toAddress"
                  value={toAddress}
                  placeholder="Moving to..."
                  className="To-zip"
                  onChange={handleToAddress}
                  id="ToAddress"
                  icon="map"
                />
                {/* <i className="fa-solid fa-map"></i> */}
              </div>
            </ModalContent>
            <ModalFooter>
              <div>
                <Button
                  type="submit"
                  value="Send"
                  // onClick={(e) => {
                  //   setSecondModelOpen(!secondModalOpen);
                  //   // handleSubmit();
                  // }}
                >
                  Submit
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </Form>
      )}
    </Container>
  );
};

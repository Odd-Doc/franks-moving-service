import React, { useRef, useState } from "react";
import { ModalWrapper, StyledForm } from "./style";
import { Input } from "semantic-ui-react";

////////////////////////////////////////////////////////////////////////
// Modal Button
////////////////////////////////////////////////////////////////////////
const ModalButton = () => {
  return <button>Get a Quote</button>;
};

////////////////////////////////////////////////////////////////////////
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
export const QuoteModal = () => {
  const [open, setOpen] = useState(false);
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [fullName, setFullName] = useState("");
  const [movingFrom, setMovingFrom] = useState("");
  const [movingTo, setMovingTo] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const handleNameChange = (e) => {
    setFullName(e.target.value);
  };
  const handleMovingFrom = (e) => {
    setMovingFrom(e.target.value);
  };

  const handleMovingTo = (e) => {
    setMovingTo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setSecondOpen(true);
    console.log(
      `name = ${fullName} | movingTo = ${movingTo} | movingFrom = ${movingFrom} `
    );
  };
  return (
    <ModalWrapper>
      <ModalButton></ModalButton>
    </ModalWrapper>
  );
};

import React, { useRef, useState } from "react";
import { ModalWrapper, StyledForm } from "./style";
import {
  Input,
  Modal,
  ModalActions,
  Button,
  ModalHeader,
  ModalContent,
} from "semantic-ui-react";

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
      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
        trigger={
          <Button
            size="huge"
            style={{ backgroundColor: "#e76f51ff", color: "white" }}
            onClick={() => setFirstOpen(true)}
          >
            Get a Quote
          </Button>
        }
        size="tiny"
      >
        <StyledForm>
          <div>
            <h3 className="quote-title">We just need a few details!</h3>
          </div>

          <FormInput
            onChange={handleNameChange}
            type="text"
            id="fullName"
            name="lname"
            value={fullName}
            placeholder="Full name"
            className="last-name--quote"
            icon="map pin"
          />

          <FormInput
            onChange={handleMovingFrom}
            type="text"
            id="movingFrom"
            name="moving-from"
            value={movingFrom}
            placeholder="Moving from"
            className="moving-from--quote"
            icon="map pin"
          />

          <FormInput
            onChange={handleMovingTo}
            type="text"
            id="movingTo"
            name="moving-to"
            value={movingTo}
            placeholder="Moving to"
            className="moving-to--quote"
            icon="map pin"
          />

          <div className="button-container">
            <Button content={"Submit"} color="google plus" onClick={onSubmit} />
          </div>
        </StyledForm>
        {/* nested confirmation modal */}
        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size="mini"
          dimmer="blurring"
        >
          <ModalHeader>Sent!</ModalHeader>
          <ModalContent>
            <p>I'll get right back to you!</p>
          </ModalContent>
          <ModalActions>
            <Button
              icon="check"
              content="All Done"
              color="green"
              onClick={() => {
                setSecondOpen(false);
                setFirstOpen(false);
              }}
            />
          </ModalActions>
        </Modal>
      </Modal>
    </ModalWrapper>
  );
};

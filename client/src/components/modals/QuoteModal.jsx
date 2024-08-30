import React, { useContext, useRef, useState } from "react";
import { Container } from "./style";
import { Input } from "semantic-ui-react";
import { QuoteModalContext } from "../../context/QuoteModalContext";

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
    <button onClick={() => setFirstModalOpen(!firstModalOpen)}>
      Get a Quote
    </button>
  );
};

////////////////////////////////////////////////////////////////////////
// Modal popup
////////////////////////////////////////////////////////////////////////
export const QuoteModal = () => {
  const { firstModalOpen, setFirstModalOpen } = useContext(QuoteModalContext);
  const [secondModalOpen, setSecondModelOpen] = useState(false);
  return (
    <Container
      onClick={() => {
        setFirstModalOpen(!firstModalOpen);
      }}
    >
      {secondModalOpen ? (
        <div>
          <h1>Second Modal</h1>
        </div>
      ) : (
        <div>
          <div>
            <button
              onClick={() => {
                setFirstModalOpen(!firstModalOpen);
              }}
            >
              Cancel
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSecondModelOpen(!secondModalOpen);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

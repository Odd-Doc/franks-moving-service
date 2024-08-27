import { Container, Title, TitleWrapper } from "./style";
import React, { useRef } from "react";
import { SlideIn } from "../Animations/slideIn";
import { Header } from "semantic-ui-react";
import { media } from "../media-query";

// import React, { useRef, useState } from "react";
// import { SlideIn } from "../Animations/slideIn";
// import {
//   Input,
//   Modal,
//   ModalActions,
//   Button,
//   ModalHeader,
//   ModalContent,
// } from "semantic-ui-react";

// const SubmitButton = ({ ...props }) => {
//   return (
//     <div>
//       <Button onClick={props.onClick} color="google plus">
//         {props.content}
//       </Button>
//     </div>
//   );
// };

// const FormInput = ({ ...props }) => {
//   return (
//     <Input
//       type={props.text}
//       name={props.name}
//       value={props.value}
//       placeholder={props.placeholder}
//       className={props.className}
//       onChange={props.onChange}
//       id={props.id}
//       icon={props.icon}
//     />
//   );
// };
// const QuoteModal = () => {
//   const [open, setOpen] = useState(false);
//   const [firstOpen, setFirstOpen] = React.useState(false);
//   const [secondOpen, setSecondOpen] = React.useState(false);
//   const [fullName, setFullName] = useState("");
//   const [movingFrom, setMovingFrom] = useState("");
//   const [movingTo, setMovingTo] = useState("");
//   const [quoteEmail, setQuoteEmail] = useState("");
//   const handleNameChange = (e) => {
//     setFullName(e.target.value);
//   };
//   const handleMovingFrom = (e) => {
//     setMovingFrom(e.target.value);
//   };

//   const handleMovingTo = (e) => {
//     setMovingTo(e.target.value);
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     setSecondOpen(true);
//     console.log(
//       `name = ${fullName} | movingTo = ${movingTo} | movingFrom = ${movingFrom} `
//     );
//   };
//   return (
//     <Modal
//       onClose={() => setFirstOpen(false)}
//       onOpen={() => setFirstOpen(true)}
//       open={firstOpen}
//       trigger={
//         <Button size="huge" color="vk" onClick={() => setFirstOpen(true)}>
//           Get a Quote
//         </Button>
//       }
//       size="tiny"
//     >
//       <GetAQuote>
//         <div>
//           <h3 className="quote-title">We just need a few details!</h3>
//         </div>

//         <FormInput
//           onChange={handleNameChange}
//           type="text"
//           id="fullName"
//           name="lname"
//           value={fullName}
//           placeholder="Full name"
//           className="last-name--quote"
//           icon="map pin"
//         />

//         <FormInput
//           onChange={handleMovingFrom}
//           type="text"
//           id="movingFrom"
//           name="moving-from"
//           value={movingFrom}
//           placeholder="Moving from"
//           className="moving-from--quote"
//           icon="map pin"
//         />

//         <FormInput
//           onChange={handleMovingTo}
//           type="text"
//           id="movingTo"
//           name="moving-to"
//           value={movingTo}
//           placeholder="Moving to"
//           className="moving-to--quote"
//           icon="map pin"
//         />

//         <div className="button-container">
//           <Button content={"Submit"} color="google plus" onClick={onSubmit} />
//         </div>
//       </GetAQuote>
//       {/* nested confirmation modal */}
//       <Modal
//         onClose={() => setSecondOpen(false)}
//         open={secondOpen}
//         size="mini"
//         dimmer="blurring"
//       >
//         <ModalHeader>Sent!</ModalHeader>
//         <ModalContent>
//           <p>Ill get right back to you!</p>
//         </ModalContent>
//         <ModalActions>
//           <Button
//             icon="check"
//             content="All Done"
//             color="green"
//             onClick={() => {
//               setSecondOpen(false);
//               setFirstOpen(false);
//             }}
//           />
//         </ModalActions>
//       </Modal>
//     </Modal>
//   );
// };
///---------------------------
{
  /* <GetAQuote>
            <div>
              <h3 className="quote-title">Free Estimate!</h3>
            </div>
            <div className="input-container">
              <FormInput
                onChange={handleNameChange}
                type="text"
                id="fullName"
                name="lname"
                value={fullName}
                placeholder="Full name"
                className="last-name--quote"
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
            </div>
            <div className="button-container">
              <Button content={"Submit"} onClick={onSubmit} />
            </div>
          </GetAQuote> */
}
///---------------------------
export const Hero = () => {
  const header = useRef();
  const quote = useRef();
  const container = useRef();

  return (
    <>
      {" "}
      <Container ref={container} className="container">
        <SlideIn from={"-1000px"} to={"0px"} dur={2} ref={header}>
          <Header as="h1" content="Franks Relocation" />
        </SlideIn>
        <SlideIn from={"1000px"} to={"0px"} dur={2} ref={header}>
          <Header as="h2">
            Moving made <span className="header-span">easy</span>, so you can
            focus on what matters most.
          </Header>
        </SlideIn>
      </Container>
    </>
  );
};
// "At Frank Relocation, our mission is to provide reliable, efficient,
//           and stress-free moving services to our community. We are committed to
//           treating every customer with respect and care, ensuring that their
//           belongings are handled with the utmost professionalism. Our goal is to
//           make every move a positive experience by delivering exceptional
//           service, fostering trust, and supporting our clients through every
//           step of their journey."
////////////////////////////////////////////////////////////////////////////////
// Moving made easy, so you can focus on what matters most
////////////////////////////////////////////////////////////////////////////////
// "Moving made easy—your local experts for a smooth and stress-free transition.";
////////////////////////////////////////////////////////////////////////////////
// "Relocating made easy—because your move should be as smooth as your new beginning.";
////////////////////////////////////////////////////////////////////////////////
// "Moving made simple—because your move is our mission."

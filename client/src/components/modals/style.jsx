import styled from "styled-components";
export const StyledForm = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.cerulean};
  border-radius: 0.28571429rem;
  align-items: center;
  gap: 0.75rem;

  .quote-title {
    color: white;
    text-align: center;
    padding-bottom: 1rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ModalWrapper = styled.div`
  padding-bottom: 150px;
`;
export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #000000b5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const QuoteButtonContainer = styled.div`
  display: ${(props) => (props.$firstModalOpen ? "none" : "block")};
`;
export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: ${(props) => props.theme.colors.burntsienna}; */
  background-color: #2379b2;
  color: white;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-radius: 8px;
  Button {
    background-color: #42b542;
    color: white;
  }
`;
export const ModalFooter = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1em;
`;
export const ModalHeader = styled.div`
  padding-bottom: 1rem;
  font-size: 1.2em;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

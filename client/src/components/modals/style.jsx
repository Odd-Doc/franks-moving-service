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
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #000000b5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuoteButtonContainer = styled.div`
  display: ${(props) => (props.$firstModalOpen ? "none" : "block")};
`;
export const Modal = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  padding: 1rem;
  border-radius: 8px;
`;
export const ModalFooter = styled.div`
  position: relative;
  display: flex;
`;
export const ModalHeader = styled.div``;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

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

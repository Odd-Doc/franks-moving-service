import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  z-index: 1;
`;

function QuoteModalPopUp({ setFirstModalOpen, open }) {
  useEffect(() => {}, []);
  return (
    <Container onClick={(prev) => setFirstModalOpen(!prev)}>
      <div>
        <div>
          <button
            onClick={(prev) => setFirstModalOpen(!prev)}
          >{`Close`}</button>
        </div>
      </div>
    </Container>
  );
}

export default QuoteModalPopUp;

import React from 'react';
import styled from 'styled-components';

export const Error: React.FC<{ error: string }> = ({ error }) => {
  return (
    <SWrapper>
      <SError>{error}</SError>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const SError = styled.h3`
  color: red;
`;

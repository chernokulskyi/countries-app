import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Container } from './Container';

export const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SWrapper>
      <Container>{children}</Container>
    </SWrapper>
  );
};

const SWrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

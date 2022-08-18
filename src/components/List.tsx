import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const List: React.FC<PropsWithChildren> = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

const SWrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 767px) {
    padding: 2.5rem 0;
    grid-template-columns: repeat(4, 1fr);
  }
`;

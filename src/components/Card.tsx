import React from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
  name: string;
  info: { title: string; description: string }[];
  onClick: () => void;
}

export const Card: React.FC<Props> = ({ img, name, info = [], onClick }) => {
  return (
    <SWrapper onClick={onClick}>
      <SCardImage src={img} alt={name} />
      <SCardBody>
        <SCardTitle>{name}</SCardTitle>
        <SCardList>
          {info.map((item) => (
            <SCardListItem key={item.title}>
              <b>{item.title}:</b> {item.description}
            </SCardListItem>
          ))}
        </SCardList>
      </SCardBody>
    </SWrapper>
  );
};

const SWrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  overflow: hidden;
  cursor: pointer;
`;

const SCardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const SCardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const SCardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const SCardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const SCardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

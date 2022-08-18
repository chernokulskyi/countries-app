import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';

type ThemeMode = 'light' | 'dark';

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <SHeader>
      <Container>
        <SWrapper>
          <STitle>Where is the world?</STitle>
          <SModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size='14px' />
            ) : (
              <IoMoon size='14px' />
            )}

            <span style={{ marginLeft: '0.75rem' }}>{theme} theme</span>
          </SModeSwitcher>
        </SWrapper>
      </Container>
    </SHeader>
  );
};

const SHeader = styled.div`
  position: relative;
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const STitle = styled(Link).attrs({ to: '/' })`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

const SModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-transform: capitalize;
  cursor: pointer;
`;

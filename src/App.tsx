import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { useAppDispatch } from './store/hooks';
import { getAllCountries } from './store/countrySlice';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};

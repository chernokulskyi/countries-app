import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getCountryByName } from '../store/countrySlice';
import { BackButton } from '../components/BackButton';
import { Info } from '../components/Info';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedCountry } = useAppSelector((state) => state.country);

  useEffect(() => {
    name && dispatch(getCountryByName(name));
    // eslint-disable-next-line
  }, [name]);

  return (
    <div>
      <BackButton onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </BackButton>
      {selectedCountry && <Info country={selectedCountry} />}
    </div>
  );
};

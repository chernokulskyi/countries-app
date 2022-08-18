import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getNeighborsByCodes } from '../store/countrySlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Country } from '../types';

interface Props {
  country: Country;
}

export const Info: React.FC<Props> = ({ country }) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { countryNeighbors } = useAppSelector((state) => state.country);

  useEffect(() => {
    dispatch(getNeighborsByCodes(country.borders));
    // eslint-disable-next-line
  }, [country.borders]);

  return (
    <SWrapper>
      <SInfoImage src={country.flags.png} alt={country.name} />
      <div>
        <SInfoTitle>{country.name}</SInfoTitle>
        <SListGroup>
          <SList>
            <SListItem>
              <b>Native Name: </b>
              {country.nativeName}
            </SListItem>
            <SListItem>
              <b>Population: </b>
              {country.population}
            </SListItem>
            <SListItem>
              <b>Region: </b>
              {country.region}
            </SListItem>
            <SListItem>
              <b>Subregion: </b>
              {country.subregion}
            </SListItem>
            <SListItem>
              <b>Capital: </b>
              {country.capital}
            </SListItem>
          </SList>
          <SList>
            <SListItem>
              <b>Top Level Domain: </b>
              {country.topLevelDomain.map((domain) => (
                <span key={domain}>{domain} </span>
              ))}
            </SListItem>
            <SListItem>
              <b>Currency: </b>
              {!country.currencies && <span>No info</span>}
              {country.currencies?.map((currency) => (
                <span key={currency.code}>{currency.name} </span>
              ))}
            </SListItem>
            <SListItem>
              <b>Languages: </b>
              {country.languages.map((language) => (
                <span key={language.name}>{language.name} </span>
              ))}
            </SListItem>
          </SList>
        </SListGroup>
        <SMeta>
          <b>Border Countries</b>
          {!country.borders ? (
            <span>There is no border countries</span>
          ) : (
            <STagGroup>
              {countryNeighbors &&
                countryNeighbors.map((neighbor) => (
                  <STag
                    key={neighbor.name}
                    onClick={() => navigate(`/country/${neighbor.name}`)}
                  >
                    {neighbor.name}
                  </STag>
                ))}
            </STagGroup>
          )}
        </SMeta>
      </div>
    </SWrapper>
  );
};

const SWrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const SInfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SInfoTitle = styled.h1`
  margin: 0 0 1rem 0;
  font-weight: var(--fw-normal);
`;

const SListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const SList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const SMeta = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const STagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const STag = styled.span`
  padding: 0 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

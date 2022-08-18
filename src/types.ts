export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: [
    {
      code: string;
      name: string;
      symbol: string;
    }
  ];
  languages: [
    {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }
  ];
  translations: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  };
  flag: string;
  regionalBlocs: [
    {
      acronym: string;
      name: string;
      otherNames: string;
    },
    {
      acronym: string;
      name: string;
      otherAcronyms: string[];
      otherNames: string[];
    }
  ];
  cioc: string;
  independent: boolean;
}

export type Status = 'pending' | 'fulfilled' | 'rejected' | 'unknown';

export const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES_URL =
  BASE_URL + 'all?fields=name,capital,flags,population,region';

export const COUNTRY_BY_NAME_URL = (name: string) => BASE_URL + 'name/' + name;

export const NEIGHBORS_BY_CODES_URL = (codes: string[]) =>
  BASE_URL + 'alpha?codes=' + codes.join(',');

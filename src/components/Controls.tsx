import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CustomSelect } from './CustomSelect';
import { Search } from './Search';

interface SelectOption {
  value: string;
  label: string;
}

const options: SelectOption[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

interface Props {
  onSearch: (search: string, region: string) => void;
}

export const Controls: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<string>('');

  useEffect(() => {
    // @ts-ignore
    onSearch(search, region?.value || '');
    // eslint-disable-next-line
  }, [search, region]);

  return (
    <SWrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isSearchable={false}
        isClearable
        value={region}
        //	@ts-ignore
        onChange={setRegion}
      />
    </SWrapper>
  );
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

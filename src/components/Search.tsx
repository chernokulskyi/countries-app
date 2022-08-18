import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

interface Props {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
}

export const Search: React.FC<Props> = ({ search, setSearch }) => {
	return (
		<SInputContainer>
			<IoSearch />
			<SInput
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setSearch(e.target.value)
				}
				value={search}
			/>
		</SInputContainer>
	);
};

const SInputContainer = styled.label`
	background-color: var(--colors-ui-base);
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	border-radius: var(--radii);
	box-shadow: var(--shadow);
	width: 100%;
	margin-bottom: 1rem;

	@media (min-width: 767px) {
		margin-bottom: 0;
		width: 280px;
	}
`;

const SInput = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for a country',
})`
	margin-left: 2rem;
	border: none;
	outline: none;
	background-color: var(--colors-ui-base);
	color: var(--colors-text);
`;

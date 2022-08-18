import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Country } from '../types';
import { useAppSelector } from '../store/hooks';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';

export const HomePage: React.FC = () => {
	const navigate = useNavigate();

	const { countries, status, error } = useAppSelector((state) => state.country);

	const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

	useEffect(() => {
		countries.length && setFilteredCountries(countries);
	}, [countries]);

	const handleSearch = useCallback(
		(search: string, region: string) => {
			let data = [...countries];

			if (region) {
				data = data.filter((country) => country.region.includes(region));
			}

			if (search) {
				data = data.filter((country) =>
					country.name.toLowerCase().includes(search.toLowerCase())
				);
			}

			setFilteredCountries(data);
		},
		[countries]
	);

	return (
		<>
			<Controls onSearch={handleSearch} />
			{status === 'pending' && <Spinner />}
			{error && <Error error={error} />}
			<List>
				{filteredCountries.map((country) => {
					const countryInfo = {
						img: country.flags.png,
						name: country.name,
						info: [
							{
								title: 'Capital',
								description: country.capital,
							},
							{
								title: 'Population',
								description: country.population.toLocaleString(),
							},
							{
								title: 'Region',
								description: country.region,
							},
						],
					};

					return (
						<Card
							key={country.name}
							{...countryInfo}
							onClick={() => navigate(`/country/${country.name}`)}
						/>
					);
				})}
			</List>
		</>
	);
};

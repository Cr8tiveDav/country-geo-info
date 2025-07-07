import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { customFetch } from '../customFetch';
import CountryList from '../components/CountryList';
import SearchForm from '../components/SearchForm';
import { useState } from 'react';

const searchCountriesQuery = ({ searchTerm, selectedRegion }) => {
  // let endpoint = searchTerm ? `/name/${searchTerm}` : `/all`;
  let endpoint = '/all?fields=flags,name,population,region,capital,cca3,';
  if (searchTerm) endpoint = `/name/${searchTerm}`;
  if (selectedRegion) endpoint = `/region/${selectedRegion}`;
  return {
    queryKey: ['search', searchTerm, selectedRegion],
    queryFn: async () => {
      const { data } = await customFetch.get(`${endpoint}`);
      console.log(data);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('country') || ''; // Get search term with input name attribute
    await queryClient.ensureQueryData(searchCountriesQuery({ searchTerm }));
    return { searchTerm }; // Must return something from the loader
  };

const Landing = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const { searchTerm } = useLoaderData();
  const { data: countries, isPending: dataPending } = useQuery(
    searchCountriesQuery({ searchTerm, selectedRegion })
  );

  return (
    <>
      <SearchForm
        searchTerm={searchTerm}
        setSelectedRegion={setSelectedRegion}
      />

      <CountryList countries={countries} dataPending={dataPending} />
    </>
  );
};

export default Landing;

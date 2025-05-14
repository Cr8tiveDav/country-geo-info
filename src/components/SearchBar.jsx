import { useQuery } from '@tanstack/react-query';
import { FaSearch } from 'react-icons/fa';
import { customFetch } from '../customFetch';
import { useEffect } from 'react';
import { SEARCH_RESULT } from '../action';
import { useAppDispatch, useFormQuery } from '../customHooks';

const SearchBar = () => {
  const { input, searchTerm, handleSearch, handleSubmit } = useFormQuery();
  const { dispatch } = useAppDispatch();

  const { isPending, data } = useQuery({
    queryKey: ['query', searchTerm],
    queryFn: async () => {
      const { data } = await customFetch(`/name/${searchTerm}`);
      return data;
    },
    enabled: searchTerm.length > 0, // Return boolean value to either enable or disable the query.
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: SEARCH_RESULT, payload: { data } });
    }
  }, [data]);

  return (
    <form onSubmit={handleSubmit}>
      <FaSearch />
      <input
        type='text'
        name='text'
        id='text'
        className='search-input'
        placeholder='Search for a country...'
        value={input}
        onChange={handleSearch}
      />
    </form>
  );
};
export default SearchBar;

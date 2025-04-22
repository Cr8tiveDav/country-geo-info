import { useInputContext } from '../InputContext';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const { input, handleInput, handleSubmit } = useInputContext();

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
        onChange={handleInput}
      />
    </form>
  );
};
export default SearchBar;

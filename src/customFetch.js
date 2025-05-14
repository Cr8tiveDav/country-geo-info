import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

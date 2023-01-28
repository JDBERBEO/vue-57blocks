// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default {
  getPokemons({ limit, offset }) {
    return apiClient.get('pokemon', {
      params: {
        limit,
        offset,
      },
    });
  },
  getPokemonInfo({ url }) {
    return axios.get(url);
  },
};

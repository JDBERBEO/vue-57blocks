// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default {
  getPokemons({ limit, offset, baseUrl }) {
    return axios.get(baseUrl, {
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

/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import PokemonApi from '@/api/PokemonApi';
import { typesPokemons as types } from './typesPokemons';

export const actions = {
  async [types.actions.FETCH_POKEMONS]({ commit }, payload) {
    try {
      const { data } = await PokemonApi.getPokemons({ limit: 20, offset: 0 });

      const results = [];
      for (let i = 0; i < data.results.length; i++) {
        const result = data.results[i];
        const response = await PokemonApi.getPokemonInfo({ url: result.url });
        results.push(response.data);
      }
      commit(types.mutations.SET_POKEMONS, results);
    } catch (error) {
      console.error('err: ', error);
    }
  },
};
export default {};

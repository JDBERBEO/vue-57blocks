/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import PokemonApi from '@/api/PokemonApi';
import { typesPokemons as types } from './typesPokemons';

export const actions = {
  async [types.actions.FETCH_POKEMONS]({ commit, state }, payload) {
    const { currentPage } = state;
    try {
      commit(types.mutations.SET_IS_LOADING, true);
      const { data } = await PokemonApi.getPokemons({ limit: 20, offset: 0, baseUrl: currentPage });
      const results = [];
      for (let i = 0; i < data.results.length; i++) {
        const result = data.results[i];
        const response = await PokemonApi.getPokemonInfo({ url: result.url });
        results.push(response.data);
      }
      commit(types.mutations.SET_POKEMONS, results);
      commit(types.mutations.SET_NEXT_PAGE, data.next);
      commit(types.mutations.SET_PREVIOUS_PAGE, data.previous);
      commit(types.mutations.SET_IS_LOADING, false);
    } catch (error) {
      commit(types.mutations.SET_IS_LOADING, false);
    }
  },

  [types.actions.UPDATE_CURRENT_PAGE]({ commit }, payload) {
    commit(types.mutations.SET_CURRENT_PAGE, payload);
  },
  async [types.actions.FETCH_FAVORITE_POKEMONS]({ commit }, payload) {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites) return null;

    const promises = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < favorites.length; i++) {
      promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${favorites[i]}`));
    }
    const responses = await Promise.all(promises);
    const favoritesData = responses.map((r) => r.data);
    return commit(types.mutations.SET_FAVORITE_POKEMONS, favoritesData);
  },
};
export default {};

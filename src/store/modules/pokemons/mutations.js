import { typesPokemons as types } from './typesPokemons';

export const mutations = {
  [types.mutations.SET_POKEMONS](state, payload) {
    state.pokemons = payload;
  },
  [types.mutations.SET_NEXT_PAGE](state, payload) {
    state.nextPage = payload;
  },
  [types.mutations.SET_PREVIOUS_PAGE](state, payload) {
    state.previousPage = payload;
  },
  [types.mutations.SET_CURRENT_PAGE](state, payload) {
    state.currentPage = payload;
  },
  [types.mutations.SET_IS_LOADING](state, payload) {
    state.isLoading = payload;
  },
  [types.mutations.SET_FAVORITE_POKEMONS](state, payload) {
    state.favorites = payload;
  },
  [types.mutations.SET_DETAILED_POKEMON](state, payload) {
    state.detailedPokemon = payload;
  },
};
export default {};

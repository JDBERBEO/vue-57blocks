import { typesPokemons } from './typesPokemons';

export const mutations = {
  [typesPokemons.mutations.SET_POKEMONS](state, payload) {
    state.pokemons = payload;
  },
};
export default {};

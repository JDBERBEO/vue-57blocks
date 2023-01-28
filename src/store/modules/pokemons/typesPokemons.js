export const MODULE_POKEMONS = '@module/pokemons';

export const typesPokemons = {
  PATH: `${MODULE_POKEMONS}`,
  getters: {},
  actions: {
    FETCH_POKEMONS: '@actions/fetchPokemons',
  },
  mutations: {
    SET_POKEMONS: '@mutations/setPokemons',
  },
};

export default {};

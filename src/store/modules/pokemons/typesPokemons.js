export const MODULE_POKEMONS = '@module/pokemons';

export const typesPokemons = {
  PATH: `${MODULE_POKEMONS}`,
  getters: {},
  actions: {
    FETCH_POKEMONS: '@actions/fetchPokemons',
    FETCH_NEXT_PAGE: '@actions/fetchNextPage',
    FETCH_PREVIOUS_PAGE: '@actions/fetchPreviousPage',
    UPDATE_CURRENT_PAGE: '@actions/updateCurrentPage',
  },
  mutations: {
    SET_POKEMONS: '@mutations/setPokemons',
    SET_NEXT_PAGE: '@mutations/setNextPage',
    SET_PREVIOUS_PAGE: '@mutations/setPreviousPage',
    SET_CURRENT_PAGE: '@mutations/setCurrentPage',
    SET_IS_LOADING: '@mutations/setIsLoading',
  },
};

export default {};

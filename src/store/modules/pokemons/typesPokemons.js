export const MODULE_POKEMONS = '@module/pokemons';

export const typesPokemons = {
  PATH: `${MODULE_POKEMONS}`,
  getters: {
    CREATE_DETAILS_OBJECT: '@getters/createDetailsObject',
  },
  actions: {
    FETCH_POKEMONS: '@actions/fetchPokemons',
    FETCH_NEXT_PAGE: '@actions/fetchNextPage',
    FETCH_PREVIOUS_PAGE: '@actions/fetchPreviousPage',
    UPDATE_CURRENT_PAGE: '@actions/updateCurrentPage',
    FETCH_FAVORITE_POKEMONS: '@actions/fetchFavoritePokemons',
    UPDATE_FAVORITE_POKEMONS: '@actions/updateFavoritePokemons',
    FETCH_DETAILED_POKEMON: '@actions/fetchDetailedPokemon',
  },
  mutations: {
    SET_POKEMONS: '@mutations/setPokemons',
    SET_NEXT_PAGE: '@mutations/setNextPage',
    SET_PREVIOUS_PAGE: '@mutations/setPreviousPage',
    SET_CURRENT_PAGE: '@mutations/setCurrentPage',
    SET_IS_LOADING: '@mutations/setIsLoading',
    SET_FAVORITE_POKEMONS: '@mutations/setFavoritePokemons',
    SET_DETAILED_POKEMON: '@mutations/setDetailedPokemon',
  },
};

export default {};

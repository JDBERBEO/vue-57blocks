import { typesPokemons as types } from './typesPokemons';

export const getters = {
  [types.getters.CREATE_DETAILS_OBJECT](state) {
    const { detailedPokemon } = state;
    if (detailedPokemon) {
      const pokemonTypes = detailedPokemon.types?.map((type) => ({ types: type.type.name }));
      return {
        details: {
          weight: detailedPokemon.weight,
          height: detailedPokemon.height,
          pokemonTypes,
        },
      };
    }
    return {};
  },
};

export default {};

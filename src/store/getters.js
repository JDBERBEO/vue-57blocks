export const getters = {
  createDetailsObject: (state) => {
    console.log('detailedPokemon: ', state.detailedPokemon);
    if (state.detailedPokemon) {
      // const pokemonTypes = state.detailedPokemon.types?.map((type) => ({ types: type.type.name }));
      // return {
      //   details: {
      //     weight: state.detailedPokemon.weight,
      //     height: state.detailedPokemon.height,
      //     pokemonTypes,
      //   },
      // };
      return {
        details: state.detailedPokemon,
      };
    }
    return {};
  },
};

export default {};

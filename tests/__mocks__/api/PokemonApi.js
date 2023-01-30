/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import pokemonData from '../responses/pokemonData';
import pokemonList from '../responses/pokemonList';

let typeUpload = 'firstLoad';
class PokemonApi {
  getPokemons() {
    return Promise.resolve({ data: pokemonData });
  }

  getPokemonInfo() {
    return Promise.resolve({ data: pokemonList });
  }

  // getPokemonInfo = jest.fn(() => {
  //   let typeFile;

  //   switch (typeUpload) {
  //     case 'fistLoad':
  //       typeFile = pokemonList;
  //       break;
  //     case 'favoritePokemons':
  //       typeFile = { data: 'hola' };
  //       break;
  //     default:
  //       typeFile = pokemonList;
  //   }
  //   res({
  //     data: typeFile,
  //   });
  // });
}

const modifyFilterServices = (type) => {
  typeUpload = type;
};

export { modifyFilterServices };

export default new PokemonApi();

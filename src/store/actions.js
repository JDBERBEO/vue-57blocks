/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import PokemonApi from '@/api/PokemonApi';

export const actions = {
  async fetchPokemons() {
    try {
      this.isLoading = true;
      const { data } = await PokemonApi.getPokemons({
        limit: 20,
        offset: 0,
        baseUrl: this.currentPage,
      });
      const results = [];
      for (let i = 0; i < data.results.length; i++) {
        const result = data.results[i];
        const response = await PokemonApi.getPokemonInfo({ url: result.url });
        results.push(response.data);
      }
      this.pokemons = results;
      this.nextPage = data.next;
      this.previousPage = data.previous;
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
    }
  },
  updateCurrentPage(payload) {
    try {
      this.currentPage = payload;
    } catch (error) {
      console.error('error: ', error);
    }
  },
  async fetchFavoritePokemons() {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      if (!favorites) return null;

      const promises = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < favorites.length; i++) {
        promises.push(
          PokemonApi.getPokemonInfo({ url: `https://pokeapi.co/api/v2/pokemon/${favorites[i]}` }),
        );
      }
      const responses = await Promise.all(promises);
      const favoritesData = responses.map((r) => r.data);
      this.favorites = favoritesData;
    } catch (error) {
      console.log('error: ', error);
    }
  },
  async fetchDetailedPokemon(payload) {
    try {
      this.isLoading = true;
      const { pokemonId } = payload;
      const response = await PokemonApi.getPokemonInfo({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
      });
      this.detailedPokemon = response.data;
      return (this.isLoading = false);
    } catch (error) {
      console.error('error: ', error);
      this.isLoading = false;
    }
  },
};

export default {};

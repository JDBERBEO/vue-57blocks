/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { getters } from './getters';
import { actions } from './actions';

export const usePokemonStore = defineStore('PokemonStore', {
  state() {
    return {
      pokemons: [],
      nextPage: null,
      previousPage: null,
      currentPage: 'https://pokeapi.co/api/v2/pokemon',
      isLoading: false,
      favorites: [],
      detailedPokemon: { loquesea: 'loquesea' },
    };
  },
  getters,
  actions,
});

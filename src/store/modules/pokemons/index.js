import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { MODULE_POKEMONS } from './typesPokemons';

export const module = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export const name = MODULE_POKEMONS;

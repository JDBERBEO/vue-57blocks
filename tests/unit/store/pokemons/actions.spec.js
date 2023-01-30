/* eslint-disable import/extensions */
/* eslint-disable global-require */
import PokemonApi from '@/api/PokemonApi.js';
import { actions } from '@/store/modules/pokemons/actions';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons.js';
import allPokemon from '../../../__mocks__/responses/allPokemon';

jest.mock('../../../../src/api/PokemonApi.js', () =>
  require('../../../__mocks__/api/PokemonApi.js'),
);

describe('test actions with pokemons', () => {
  let commit = jest.fn();
  let dispatch = jest.fn();
  afterEach(() => {
    commit = jest.fn();
    dispatch = jest.fn();
  });

  it('should update current page', () => {
    actions[types.actions.UPDATE_CURRENT_PAGE]({ commit }, []);
    expect(commit).toHaveBeenCalledWith(types.mutations.SET_CURRENT_PAGE, []);
  });

  it('should fetch pokemons correctly', async () => {
    jest.spyOn(PokemonApi, 'getPokemons');
    jest.spyOn(PokemonApi, 'getPokemonInfo');
    const state = 'https://pokeapi.co/api/v2/pokemon';
    const next = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
    const previous = null;
    await actions[types.actions.FETCH_POKEMONS]({ commit, state }, []);
    expect(commit).toHaveBeenNthCalledWith(1, types.mutations.SET_IS_LOADING, true);
    expect(PokemonApi.getPokemons).toHaveBeenCalled();
    expect(PokemonApi.getPokemonInfo).toHaveBeenCalled();
    expect(commit).toHaveBeenNthCalledWith(2, types.mutations.SET_POKEMONS, allPokemon);
    expect(commit).toHaveBeenNthCalledWith(3, types.mutations.SET_NEXT_PAGE, next);
    expect(commit).toHaveBeenNthCalledWith(4, types.mutations.SET_PREVIOUS_PAGE, previous);
    expect(commit).toHaveBeenNthCalledWith(5, types.mutations.SET_IS_LOADING, false);
  });
});

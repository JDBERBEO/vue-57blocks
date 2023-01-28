import Vue from 'vue';
import Vuex from 'vuex';

import { name as namePokemons, module as modulePokemons } from './modules/pokemons/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [namePokemons]: modulePokemons,
  },
});

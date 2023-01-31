import Vue from 'vue';
import Vuex from 'vuex';

import { name as namePokemons, module as modulePokemons } from './modules/pokemons/index';
import { name as nameLogin, module as moduleLogin } from './modules/login/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [namePokemons]: modulePokemons,
    [nameLogin]: moduleLogin,
  },
});

<!-- eslint-disable no-plusplus -->
<template>
  <div class="container">
    <loader v-if="isLoading" />
    <div v-else>
      <div>
        <h1 class="home-container__title">YOUR FAVORITE POKEMONS ARE HERE!</h1>
      </div>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="(pokemon, index) in favorites" :key="index">
          <div class="miniature-container">
            <miniature :pokemon="pokemon" @pokemonId="handleDelete" isFavorite />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';

import Miniature from '@/components/Miniature.vue';
import { typesLogin as login } from '@/store/modules/login/typesLogin';

export default {
  name: 'FavoritesMain',
  components: { Miniature },
  data() {
    return {};
  },
  computed: {
    ...mapState(types.PATH, ['isLoading', 'favorites']),
  },
  methods: {
    ...mapActions(types.PATH, {
      fetchFavorites: types.actions.FETCH_FAVORITE_POKEMONS,
    }),
    ...mapActions(login.PATH, { updateHasToken: login.actions.UPDATE_HAS_TOKEN }),
    validateToken() {
      return !!localStorage.getItem('token');
    },
    handleDelete(id) {
      const filteredPokemons = this.favorites.filter((pokemon) => pokemon.id !== id);
      const filteredId = filteredPokemons.map((pokemon) => pokemon.id);
      localStorage.setItem('favorites', JSON.stringify(filteredId));
      this.fetchFavorites();
    },
  },
  mounted() {
    this.fetchFavorites();
    if (this.validateToken()) {
      this.updateHasToken(true);
    }
  },
};
</script>

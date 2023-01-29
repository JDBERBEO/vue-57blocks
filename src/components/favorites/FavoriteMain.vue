<!-- eslint-disable no-plusplus -->
<template>
  <div>
    <loader v-if="isLoading" />
    <div v-else>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="(pokemon, index) in favorites" :key="index">
          <miniature :pokemon="pokemon" @pokemonId="handleDelete" isFavorite />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';
import Miniature from '@/components/Miniature.vue';

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
    handleDelete(id) {
      const filteredPokemons = this.favorites.filter((pokemon) => pokemon.id !== id);
      const filteredId = filteredPokemons.map((pokemon) => pokemon.id);
      localStorage.setItem('favorites', JSON.stringify(filteredId));
      this.fetchFavorites();
    },
  },
  mounted() {
    this.fetchFavorites();
  },
};
</script>

<style></style>

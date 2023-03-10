<template>
  <div class="container">
    <loader v-if="isLoading" />
    <div v-else>
      <div>
        <h1 class="home-container__title">Gotta Catch 'Em All!</h1>
      </div>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="(pokemon, index) in pokemons" :key="index">
          <div class="miniature-container">
            <miniature :pokemon="pokemon" @pokemonId="addPokemon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapActions, mapState } from 'pinia';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';
import { typesLogin as login } from '@/store/modules/login/typesLogin';
import Miniature from '@/components/Miniature.vue';
import { usePokemonStore } from '@/store/PokemonStore';
import Loader from '../common/Loader.vue';

export default {
  components: { Miniature, Loader },
  data() {
    return {
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    };
  },
  computed: {
    ...mapState(usePokemonStore, ['pokemons', 'isLoading']),
  },
  methods: {
    ...mapActions(usePokemonStore, {
      fetchPokemons: 'fetchPokemons',
    }),
    ...mapActions(login.PATH, { updateHasToken: login.actions.UPDATE_HAS_TOKEN }),
    validateToken() {
      return !!localStorage.getItem('token');
    },
    addPokemon(pokemonId) {
      const duplicatedFavorite = this.favorites.some((fav) => pokemonId === fav);
      if (!duplicatedFavorite) {
        this.favorites = [...this.favorites, pokemonId];
        return this.favorites;
      }
      // eslint-disable-next-line no-alert
      return alert('Pokemon already in favorites');
    },
  },
  watch: {
    favorites(newVal, oldVal) {
      if (newVal.length !== oldVal.length) {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
      }
    },
  },
  mounted() {
    this.fetchPokemons();
    if (this.validateToken()) {
      this.updateHasToken(true);
    }
  },
};
</script>

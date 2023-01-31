<template>
  <div class="home-container">
    <home-main />
    <pokemon-pagination v-show="!isLoading" />
  </div>
</template>

<script>
import HomeMain from '@/components/home/HomeMain.vue';
import PokemonPagination from '@/components/home/PokemonPagination.vue';
import { mapState } from 'vuex';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';

export default {
  name: 'HomeView',
  components: { HomeMain, PokemonPagination },
  computed: {
    ...mapState(types.PATH, ['isLoading']),
  },
};
</script>

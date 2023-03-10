<template>
  <div class="home-container">
    <home-main />
    <pokemon-pagination v-show="!isLoading" />
  </div>
</template>

<script>
import HomeMain from '@/components/home/HomeMain.vue';
import PokemonPagination from '@/components/home/PokemonPagination.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapState } from 'pinia';
import { usePokemonStore } from '@/store/PokemonStore';

export default {
  name: 'HomeView',
  components: { HomeMain, PokemonPagination },
  computed: {
    ...mapState(usePokemonStore, ['isLoading']),
  },
};
</script>

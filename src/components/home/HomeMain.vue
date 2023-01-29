<template>
  <div>
    <loader v-if="isLoading" />
    <div v-else>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="(pokemon, index) in pokemons" :key="index">
          <miniature :pokemon="pokemon" />
        </div>
      </div>
      <pokemon-pagination />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';
import Miniature from '@/components/Miniature.vue';
import PokemonPagination from './PokemonPagination.vue';
import Loader from '../common/Loader.vue';

export default {
  components: { Miniature, PokemonPagination, Loader },
  data() {
    return {};
  },
  computed: {
    ...mapState(types.PATH, ['pokemons', 'isLoading']),
  },
  methods: {
    ...mapActions(types.PATH, {
      fetchPokemons: types.actions.FETCH_POKEMONS,
    }),
  },
  mounted() {
    this.fetchPokemons();
  },
};
</script>

<style></style>

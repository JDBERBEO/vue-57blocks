<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="(pokemon, index) in pokemons" :key="index">
        <miniature :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';
import Miniature from '@/components/Miniature.vue';

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Miniature },
  computed: {
    ...mapState(types.PATH, ['pokemons']),
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

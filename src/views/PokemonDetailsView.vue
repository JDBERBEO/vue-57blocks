<template>
  <div class="details-container">
    <div class="miniature-container">
      <miniature :pokemon="detailedPokemon" isDetails />
    </div>
    <div class="card details-card-container">
      <details-main />
    </div>
  </div>
</template>

<script>
import Miniature from '@/components/Miniature.vue';
import { mapActions, mapState } from 'vuex';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';
import DetailsMain from '@/components/pokemonDetails/DetailsMain.vue';

export default {
  name: 'PokemonDetails',
  components: { Miniature, DetailsMain },
  computed: {
    ...mapState(types.PATH, ['detailedPokemon']),
    array() {
      return this.getDetails;
    },
  },
  methods: {
    ...mapActions(types.PATH, {
      fetchDetailedPokemon: types.actions.FETCH_DETAILED_POKEMON,
    }),
  },
  mounted() {
    this.fetchDetailedPokemon({ pokemonId: this.$route.params.pokemonId });
  },
};
</script>

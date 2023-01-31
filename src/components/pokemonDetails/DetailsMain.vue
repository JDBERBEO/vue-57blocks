<template>
  <div class="card-content">
    <div class="content">
      <ul>
        <li>Weight: {{ getDetails.details.weight }}</li>
        <li>Height: {{ getDetails.details.height }}</li>
      </ul>
      <h5>Types</h5>
      <ul v-for="(pokemontype, index) in getDetails?.details?.pokemonTypes" :key="index">
        <li>{{ pokemontype.types }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';
import { typesLogin as login } from '@/store/modules/login/typesLogin';

export default {
  name: 'DetailsMain',
  computed: {
    ...mapGetters(types.PATH, {
      getDetails: types.getters.CREATE_DETAILS_OBJECT,
    }),
  },
  methods: {
    ...mapActions(login.PATH, { updateHasToken: login.actions.UPDATE_HAS_TOKEN }),
    validateToken() {
      return !!localStorage.getItem('token');
    },
  },
  mounted() {
    if (this.validateToken()) {
      this.updateHasToken(true);
    }
  },
};
</script>

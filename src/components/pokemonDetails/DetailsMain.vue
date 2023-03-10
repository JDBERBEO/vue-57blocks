<template>
  <div class="card-content">
    <div class="content">
      pokemonLength{{ pokemonLength }}
      <ul>
        <li>Weight: {{ createDetailsObject }}</li>
        <li>Height: {{ createDetailsObject.details.height }}</li>
      </ul>
      <h5>Types</h5>
      <ul v-for="(pokemontype, index) in createDetailsObject?.details?.pokemonTypes" :key="index">
        <li>{{ pokemontype.types }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';
import { typesLogin as login } from '@/store/modules/login/typesLogin';
import { usePokemonStore } from '@/store/PokemonStore';

export default {
  name: 'DetailsMain',
  computed: {
    ...mapState(usePokemonStore, ['createDetailsObject', 'pokemonLength']),
  },
  methods: {
    ...mapActions(login.PATH, { updateHasToken: login.actions.UPDATE_HAS_TOKEN }),
    validateToken() {
      return !!localStorage.getItem('token');
    },
  },
  // mounted() {
  //   if (this.validateToken()) {
  //     this.updateHasToken(true);
  //   }
  // },
};
</script>

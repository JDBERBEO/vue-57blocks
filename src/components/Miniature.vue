<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card pokemon-card">
    <div class="card-image pokemon-card__sprite">
      <figure class="image">
        <img :src="pokemon.sprites?.front_default" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title">{{ pokemon.name }}</p>
          <p class="subtitle">XP: {{ pokemon.base_experience }}</p>
          <button
            v-if="!isDetails"
            :class="['button', isFavorite ? 'is-danger' : 'is-success']"
            @click="sendId"
          >
            {{ isFavorite ? 'DELETE' : 'ADD FAVORITE' }}
          </button>
          <button class="button is-warning" @click="goToDetails" v-if="!isDetails">
            SEE DETAILS
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    pokemon: {
      type: Object,
      default: () => {},
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    isDetails: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    sendId() {
      return this.$emit('pokemonId', this.pokemon.id);
    },
    goToDetails() {
      this.$router.push(`/pokemon/${this.pokemon.id}`);
    },
  },
};
</script>

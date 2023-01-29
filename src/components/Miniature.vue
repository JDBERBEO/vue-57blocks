<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card" style="width: 200px; height: 300px; margin: 10px">
    <div class="card-image">
      <figure class="image">
        <img :src="pokemon.sprites.front_default" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title">{{ pokemon.name }}</p>
          <p class="subtitle">@johnsmith</p>
          <button @click="sendId">{{ isFavorite ? 'DELETE' : 'ADD FAVORITE' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  },
  methods: {
    sendId() {
      return this.$emit('pokemonId', this.pokemon.id);
    },
  },
};
</script>

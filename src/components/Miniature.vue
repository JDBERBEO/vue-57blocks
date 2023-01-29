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
        </div>
      </div>

      <!-- <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div> -->
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
  },
};
</script>

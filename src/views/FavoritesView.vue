<template>
  <div class="home-container">
    <favorites-main />
  </div>
</template>

<script>
import FavoritesMain from '@/components/favorites/FavoriteMain.vue';

export default {
  name: 'FavoriteView',
  components: { FavoritesMain },
};
</script>

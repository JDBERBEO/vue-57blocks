<template>
  <div id="app">
    <nav-bar />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>
<script>
import NavBar from './components/common/Nav-bar.vue';

export default {
  components: { NavBar },
  name: 'HomeView',
};
</script>

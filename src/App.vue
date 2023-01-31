<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>
<script>
import NavBar from './components/common/NavbarMain.vue';

export default {
  components: { NavBar },
  name: 'App',
};
</script>

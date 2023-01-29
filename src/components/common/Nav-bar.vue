<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-logo" href="/">
        <img
          src="https://res.cloudinary.com/dj7wucuvf/image/upload/v1635712876/57BlocksTest/Pokeball_ljmbbc.png"
          width="60"
          height="40"
          alt="logo"
          class="navbar-logo"
        />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start" v-if="hasToken">
        <a v-for="link in links" :key="link.id" class="navbar-item" :href="link.href">
          {{ link.text }}
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light" v-if="hasToken" @click="handleLogout"> Log out </a>
            <a class="button is-light" v-else> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, text: 'Home', href: '/' },
        { id: 2, text: 'Favorite', href: '/favorite' },
      ],
    };
  },
  computed: {
    hasToken() {
      return localStorage.getItem('token');
    },
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>

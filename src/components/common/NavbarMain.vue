<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-logo" to="/">
          <img
            src="https://res.cloudinary.com/dj7wucuvf/image/upload/v1635712876/57BlocksTest/Pokeball_ljmbbc.png"
            width="60"
            height="40"
            alt="logo"
            class="navbar-logo"
          />
        </router-link>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link v-for="link in links" :key="link.id" class="navbar-item" :to="link.href">
            {{ link.text }}
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-light" v-if="hasToken" @click="handleLogout">Log out</button>
              <!-- <a class="button is-light" v-else> Log in </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { typesLogin as types } from '@/store/modules/login/typesLogin';

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
    ...mapState(types.PATH, ['hasToken']),
  },
  methods: {
    ...mapActions(types.PATH, {
      updateHasToken: types.actions.UPDATE_HAS_TOKEN,
    }),
    handleLogout() {
      localStorage.removeItem('token');
      this.updateHasToken(false);
      this.$router.push('/login');
    },
  },
};
</script>

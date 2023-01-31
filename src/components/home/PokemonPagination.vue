<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <nav
    class="pagination is-centered pagination-container pagination is-rounded"
    role="navigation"
    aria-label="pagination"
  >
    <a class="pagination-previous pagination-container__button" @click="goToPreviousPage"
      >Previous</a
    >
    <a class="pagination-next pagination-container__button" @click="goNextPage">Next</a>
  </nav>
</template>

<script>
import { typesPokemons as types } from '@/store/modules/pokemons/typesPokemons';
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(types.PATH, ['nextPage', 'previousPage', 'currentPage']),
  },
  methods: {
    ...mapActions(types.PATH, {
      updateCurrentPage: types.actions.UPDATE_CURRENT_PAGE,
      fetchPokemons: types.actions.FETCH_POKEMONS,
    }),
    goNextPage() {
      this.updateCurrentPage(this.nextPage);
      this.fetchPokemons(this.nextPage);
    },
    goToPreviousPage() {
      this.updateCurrentPage(this.previousPage);
      this.fetchPokemons(this.previousPage);
    },
  },
};
</script>

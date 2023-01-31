<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <div class="card" style="width: 300px">
      <p v-show="loginError" style="color: red">User or password are not valid</p>
      <div class="card-content">
        <form @submit.prevent="login">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" v-model="email" required />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" v-model="password" required />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary" @click="loginValidation">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { typesLogin as types } from '@/store/modules/login/typesLogin';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'LoginMain',
  data() {
    return {
      email: 'ironman@gmail.com',
      password: 'Thanosdie',
    };
  },
  computed: {
    ...mapState(types.PATH, ['loginError']),
  },
  methods: {
    ...mapActions(types.PATH, {
      login: types.actions.LOGIN_VALIDATION,
    }),
    loginValidation() {
      const info = { email: this.email, password: this.password };
      this.login(info);
    },
  },
};
</script>

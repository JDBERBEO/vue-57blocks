<template>
  <div class="login-container">
    <img
      className="loginHeader"
      src="https://res.cloudinary.com/dj7wucuvf/image/upload/v1635787986/57BlocksTest/pokemonLogo-removebg-preview_fqboty.png"
      alt="pokemon header"
    />
    <login-main />
  </div>
</template>

<script>
import LoginMain from '@/components/login/LoginMain.vue';

export default {
  components: { LoginMain },
  name: 'LoginView',
};
</script>

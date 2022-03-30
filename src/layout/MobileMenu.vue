<template>
  <ul class="nav nav-mobile-menu">
    

    <li class="nav-item" >
      <a class="nav-link"  href @click.prevent="logOut">
        <span class="no-icon">Log out</span>
      </a>
    </li>
  </ul>
</template>
<script>
  
  export default {
    name: 'mobile-menu',
    computed: {
      
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  }
</script>
<style>
</style>

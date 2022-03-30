<template>
  <div class="login">
    <h1 class="title">Login in the page</h1>
    <form action class="form" @submit.prevent="handleLogin">
      <label class="form-label" for="#username">Usuario:</label>
      <input 
        v-model="user.username"
        v-validate="'required'" 
        class="form-input" 
        type="text" 
        id="username" 
        placeholder="Usuario">
      <div
            v-if="errors.has('username')"
            class="alert alert-danger"
            role="alert"
          >El usuario es requerido!</div>
      <label class="form-label" for="#password">Contraseña:</label>
      <input 
        v-model="user.password"
        v-validate="'required'"
        class="form-input" 
        type="password" 
        id="password" 
        placeholder="Contraseña">
      <div
            v-if="errors.has('password')"
            class="alert alert-danger"
            role="alert"
          >La contraseña es requerida!</div>
      <input class="form-submit" type="submit" value="Login">
      <br>
        
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </div>
    
    </form>
    
  </div>
</template>

<script>

import User from '@/models/user';

export default {
    name: 'Login',
    data(){
      return {
        user: new User('admin', '123456', '', '', ''),
        loading: false,
        message: '',
        error: false
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      if (this.loggedIn) {
        this.$router.push('/admin');
      }
    },
    methods: {
        handleLogin() {
            this.loading = true;
            this.$validator.validateAll().then(isValid => {
              if (!isValid) {
                this.loading = false;
                return;
              }

              if (this.user.username && this.user.password) {
                this.$store.dispatch('/auth/login', this.user).then(
                  () => {
                    this.$router.push('/admin');
                  },
                  error => {
                    this.error = true;
                    this.loading = false;
                    this.message =
                      (error.response && error.response.data && error.response.data.body) ||
                      error.message ||
                      error.toString();
                  }
                );
              }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>
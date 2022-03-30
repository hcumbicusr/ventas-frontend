<template>
  <card>
    <h4 slot="header" class="card-title">Edit Profile</h4>
    <form>
      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Username"
                    :disabled="true"
                    placeholder="Username"
                    v-model="currentUser.username">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="currentUser.email">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Phone"
                    placeholder="Phone"
                    v-model="currentUser.phone">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="First Name"
                    placeholder="First Name"
                    v-model="currentUser.name">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    v-model="currentUser.lastname">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Rol"
                    placeholder="Rol"
                    v-model="currentUser.rol">
          </base-input>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import User from '../../models/user';
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: new User('', '', '', '', '', '')
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.currentUser))
      }
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    }
  }

</script>
<style>

</style>

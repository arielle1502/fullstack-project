<template>
  <div>
    <!--Navbar-->
    <b-navbar
      toggleable="sm"
      type="light"
      variant="light"
      fixed="top"
      class="shadow-lg border-bottom"
    >
      <b-navbar-brand to="/">Vue Project</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/browse">Browse</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!-- the if statement below checks to see if we are logged in, if we are then the register and login button will not show -->
            <router-link v-if="!$store.state.isUserLoggedIn" to="/login" class="btn btn-primary mr-2">Login</router-link>
            <router-link v-if="!$store.state.isUserLoggedIn" to="/register" class="btn btn-secondary">Register</router-link>
             <b-button v-if="$store.state.isUserLoggedIn" @click="logout" class="btn btn-secondary">Log Out</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!--/Navbar-->
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    msg: String
  },
  methods: {
    logout(){
      // were going to vuex and emptying values adn setting the to null
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      // when someone clicks on the logout button we clear our vuex state adn send them to the homepage
      this.$router.push({name: 'root'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

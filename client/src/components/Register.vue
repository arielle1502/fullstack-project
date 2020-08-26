<template>
<div class="container">
<form>
  <div class="form-group">
    <input class="form-control" type="email" name="email" placeholder="email" v-model="email" />
    <input
      class="form-control"
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    />
    <div v-html="error" class="error"></div>
    <button @click="register" class="btn btn-primary">Register</button>
  </div>
  </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "HelloWorld",
  data() {
    return {
      email: "test@test.com",
      password: "password",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>

<template>
  <div class="hello">
    <input type="email" name="email" placeholder="Email" v-model="email"/>
    <input type="password" name="password" placeholder="Password" v-model="password"/>
    <div v-html="error" class="error"></div>
    <button @click="register">Register</button>
    
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data() {
    return{
      email: "tst@test.com",
      password: "password",
      error: null
    };
  },
  methods:{
    async register() {
      try{
      await AuthenticationService.register(
        {
      email: this.email,
      password: this.password
    });
      }catch (error){
        // found the right side below by triggering an error and looking inn vue dev tools and seeing the output
        this.error = error.response.data.error
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:red;
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

<template>
  <div>
    <panel title="Search"></panel>
    <b-form-input v-model="search"></b-form-input>
  </div>
</template>

<script>
import Panel from './Panel'
export default {
  name:"Search",
  components: {Panel},
  data(){
    return{
      search: '',
    }
  },
  watch: {
    search(value){
      const route = {name: 'browse'};

      if(this.search !== ''){
        route.query = {
          search: value
        }
      }
      this.$router.push(route);
    },
    '$route.query.search' : {
      immediate: true,
      handler(value) {
        this.search = value
      }
    }
  },
};
</script>

<style scoped>

</style>
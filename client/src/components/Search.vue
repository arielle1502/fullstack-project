<template>
  <div>
    <panel title="Search"></panel>
    <b-form-input v-model="search"></b-form-input>
  </div>
</template>

<script>
import Panel from './Panel';
import _ from 'lodash';
export default {
  name:"Search",
  components: {Panel},
  data(){
    return{
      search: '',
    }
  },
  watch: {
    search: _.debounce(async function(value){
      const route = {name: 'browse'};

      if(this.search !== ''){
        route.query = {
          search: value
        }
      }
      this.$router.push(route);
    }, 500),
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
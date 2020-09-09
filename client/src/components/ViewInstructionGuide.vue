<template>
<div class="mt-5">
<panel title="View Instruction Guide" v-if="instructionGuide">
<div class="row">
<div class="col-md-4 mt-3">
<img :src="instructionGuide.image" :alt="instructionGuide.title" class="img-fluid rounded shadow">
<h3 class="mt-2">{{instructionGuide.title}}</h3>
<b>Author: </b>{{instructionGuide.author}}<br>
<b>Category: </b>{{instructionGuide.category}}<br>
<b>Equipment: </b>{{instructionGuide.equipment}}
<router-link :to="'/browse/' + instructionGuide.id + '/edit'" class="btn btn-success">Edit</router-link>
</div>
<div class="col-md-8 mt-3">
<div class="iframe-container">
<iframe class="w-100 rounded" :src='`https://www.youtube.com/embed/${instructionGuide.youtubeId}`' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<p class="mt-2"><b>Instructions: </b> {{instructionGuide.instructions}} </p>
</div>
</div>
</panel>
</div>
</template>

<script>
import Panel from "./Panel";
import InstructionGuideService from '../services/InstructionGuidesService'
export default {
  name:"ViewInstuctionGuide",
  components: Panel,
  data(){
    return{
      instructionGuide: null
    }
  },
  async mounted() {
    const instructionGuideId = this.$store.state.route.params.instructionGuideId;
    console.log(instructionGuideId)
    this.instructionGuide = 
    (await InstructionGuideService.getInstructionGuideById(instructionGuideId)).data;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iframe-container{
position: relative;
width: 100%;
padding-bottom: 56.25%;
height: 0;
}
.iframe-container iframe{
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
}
</style>
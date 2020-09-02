<template>
 <div>
    <panel title="Browse" class="mt-5">
      <div v-for="instructionGuide in instructionGuides" v-bind:key="instructionGuide.title">
        {{instructionGuide.title}}
        {{instructionGuide.author}}
        {{instructionGuide.category}}
      </div>
    </panel>
</div>
 
</template>

<script>
import Panel from '@/components/Panel.vue';
import InstructionGuidesService from '@/services/InstructionGuidesService'
export default {
  name: "Browse",
  data() {
    return{
    instructionGuides: null
  }},
  components: { Panel },
  async mounted(){
    this.instructionGuides = await InstructionGuidesService.getAllInstructionGuides();
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
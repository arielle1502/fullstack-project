<template>
<div class="home">
<b-jumbotron :header="title" :lead="slogan">
<p>{{ content }}</p>
<router-link to="/browse" class="btn btn-primary mr-2 text-white">Browse our extensive range of how to guides.</router-link>
</b-jumbotron>
<h1></h1>
<p></p>
</div>
</template>

<script>
export default {
name: 'Home',
data () {
return {
title: 'How to Handy!',
slogan: 'Where the handy lean how!',
content: 'How to Handy is a worldwide collaboration of thousands of people focused on one goal: teaching anyone in the world how to do be handy.'
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
font-weight: normal;
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
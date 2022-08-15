<template>
  <Navbar/>
  <router-view/>
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');

body {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  font-family: 'Yusei Mafic', sans-serif;
  background-color: #dfe4ea;
}

p,h1,h2,h3,a,ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color:  #333;
}

h2{
  margin-bottom: 40px;
}

h3{
  text-transform: capitalize;
  margin-bottom: 8px;
}
</style>
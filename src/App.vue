<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="__container">
    <div>
      <Navbar />
    </div>
    <RouterView />
  </div>
</template>

<style>
#app {
  height: 100vh;
}

.__container {
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: #ffffff;
}
</style>
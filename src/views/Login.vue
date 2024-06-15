<script setup lang="ts">
import LoginCard from '../components/LoginCard.vue';
</script>

<template>
  <div class="flex justify-center items-center h-full backgroundImage">
    <LoginCard />
  </div>
</template>

<style scoped>
.backgroundImage {
  background-image: url('/crypto_wall.png');
}
</style>

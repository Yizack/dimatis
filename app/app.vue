<script setup lang="ts">
setScrollBehavior();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <NuxtLoadingIndicator :throttle="0" />
</template>

<style scoped>
.nuxt-loading-indicator {
  background: repeating-linear-gradient(to right,#3e61c5 0%,#3e61c5 50%,#bfd0ff 100%)!important;
}
</style>

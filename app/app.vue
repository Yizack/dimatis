<script setup lang="ts">
const { $router } = useNuxtApp();

$router.options.scrollBehavior = to => new Promise((resolve) => {
  if (!to.hash) return resolve({ left: 0, top: 0 });
  setTimeout(() => resolve({ el: to.hash, top: 55, left: 0, behavior: "smooth" }), 500);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
  </div>
</template>

<style>
.nuxt-loading-indicator {
  background: repeating-linear-gradient(to right,#3e61c5 0%,#3e61c5 50%,#bfd0ff 100%)!important;
}
</style>

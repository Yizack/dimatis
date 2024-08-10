<script setup lang="ts">
const nuxtApp = useNuxtApp();

nuxtApp.$router.options.scrollBehavior = (to) => {
  if (to.hash === "") {
    return { left: 0, top: 0 };
  }
  else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ el: to.hash, top: 48, left: 0, behavior: "smooth" });
      }, 500);
    });
  }
};

const loading = ref(true);

onBeforeMount(() => {
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
});
</script>

<template>
  <LoadingPage v-if="loading" />
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped>
.nuxt-loading-indicator {
  background: repeating-linear-gradient(to right,#deff69 0%,#3e61c5 50%,#bfd0ff 100%)!important;
}
</style>

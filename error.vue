<script setup lang="ts">
const error = useError() as Ref<{ statusCode: number; statusMessage: string; message: string; }>;

useHead({
  bodyAttrs: {
    class: "bg-dark"
  }
});
</script>

<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
    <div class="bg-light p-5 rounded-3 shadow text-dark">
      <h1>Error {{ error.statusCode }}</h1>
      <h5>Sorry, an error has occured. {{ error.message || error.statusMessage }}</h5>
      <p>Go back: <NuxtLink to="/" class="text-decoration-underline">{{ SITE.domain }}</NuxtLink></p>
    </div>
  </div>
</template>

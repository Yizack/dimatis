<template>
  <section id="banner">
    <div class="text-center py-5">
      <img class="img-fluid rounded-circle" :src="SITE.logo" width="150" height="150" alt="Dimatis Logo">
      <h1>{{ SITE.name }}</h1>
      <p class="mb-0">{{ SITE.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerComponent"
};
</script>

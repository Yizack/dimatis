<template>
  <div class="loading-page text-center bg-dark d-flex justify-content-center">
    <div class="spinner-box align-self-center">
      <div class="mb-3 text-center">
        <DimatisIcon width="175" height="175" fill="#fff"/>
      </div>
      <div class="spinner-border text-white" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-page  {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}

i {
  font-size: 5rem;
}
</style>

<script>
export default {
  name: "LoadingPage"
};
</script>

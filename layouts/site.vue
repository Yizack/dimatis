<template>
  <Navbar/>
  <div class="bg-dark text-white">
    <slot/>
  </div>
  <Foot/>
</template>

<script>
export default {
  name: "SiteLayout"
};
</script>

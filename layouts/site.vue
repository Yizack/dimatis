<template>
  <div>
    <Navbar />
    <slot />
    <Foot />
  </div>
</template>

<script>
export default {
  name: "SiteLayout"
};
</script>

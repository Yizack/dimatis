<script setup>
import { SITE } from "~/site-info.js";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light navbar-light py-1 sticky-top shadow vw-100">
    <div class="container">
      <NuxtLink class="navbar-brand text-decoration-none" to="/"><i class="icon-dimatis"></i>{{ SITE.name }}</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div ref="nav" class="collapse navbar-collapse justify-content-end" id="nav">
        <ul class="nav navbar-nav ml-auto" role="menu" @click="collapseNav()">
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" :class="{ active: path.includes('/music') || path.includes('/tag') }" to="/music/">Music</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" :class="{ active: path.includes('/album') }" to="/album/">Albums</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" to="/#about">About</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" :class="{ active: path.includes('/licensing') }" to="/licensing/">Licensing</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem"><a class="nav-link" :href="SITE.fanlinks" target="_blank">Fanlinks</a></li>
          <li class="nav-item" role="menuitem"><a class="nav-link" :href="SITE.merch" target="_blank">Merch</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      path: this.$route.path
    };
  },
  methods: {
    collapseNav() {
      const nav = this.$refs.nav; 
      if (nav.classList.contains("show")) {
        const bsCollapse = new this.$nuxt.$Collapse(nav);
        bsCollapse.toggle();
      }
    }
  }
};
</script>

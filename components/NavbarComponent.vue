<script setup lang="ts">
const nav = ref() as Ref<HTMLElement>;

const collapseNav = () => {
  if (nav.value.classList.contains("show")) {
    nav.value.classList.remove("show");
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top shadow">
    <div class="container">
      <NuxtLink class="navbar-brand text-decoration-none" to="/"><DimatisIcon width="28" height="24" fill="#151515" />{{ SITE.name }}</NuxtLink>
      <button class="navbar-toggler rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="nav" ref="nav" class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav ml-auto" role="menu" @click="collapseNav()">
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" to="/music/">Music</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" to="/album/">Albums</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" to="/#about">About</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem">
            <NuxtLink class="nav-link" to="/licensing/">Licensing</NuxtLink>
          </li>
          <li class="nav-item pe-3" role="menuitem"><a class="nav-link" :href="SITE.fanlinks" target="_blank">Fanlinks</a></li>
          <li class="nav-item" role="menuitem"><a class="nav-link" :href="SITE.merch" target="_blank">Merch</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

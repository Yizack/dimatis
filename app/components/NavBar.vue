<script setup lang="ts">
const scrolled = ref(false);
const maxScroll = 50;

const route = useRoute();

const isHomePath = computed(() => route.path === "/");
const isTracksPath = computed(() => route.path.includes("/tracks"));
const isAlbumsPath = computed(() => route.path.includes("/albums"));
const isAboutHash = computed(() => route.hash === "#about");

const getScrolled = () => (document.body.scrollTop > maxScroll || document.documentElement.scrollTop > maxScroll);

onMounted(() => {
  scrolled.value = getScrolled();
  onscroll = () => {
    scrolled.value = getScrolled();
  };
});
</script>

<template>
  <header :class="isHomePath ? 'fixed-top' : 'sticky-top'">
    <nav class="navbar navbar-expand-lg navbar-dark" :class="{ 'bg-dark shadow': scrolled || !isHomePath }">
      <div class="container">
        <button class="navbar-toggler border-0 rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <NuxtLink class="navbar-brand text-decoration-none me-auto ms-2 ms-lg-0" to="/" aria-label="Dimatis home">
          <IconLogoText width="151" height="30" />
        </NuxtLink>
        <div id="offcanvasNavbar" class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header" data-bs-dismiss="offcanvas">
            <NuxtLink class="navbar-brand text-decoration-none" to="/">
              <IconLogoText width="151" height="30" />
            </NuxtLink>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div class="offcanvas-body" data-bs-theme="light">
            <ul class="navbar-nav ms-auto mb-lg-0 gap-md-2 fw-bold" role="menu">
              <li class="nav-item" role="menuitem" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link" to="/">Home</NuxtLink>
              </li>
              <li class="nav-item" role="menuitem" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link" :class="{ active: isTracksPath }" to="/tracks">Tracks</NuxtLink>
              </li>
              <li class="nav-item" role="menuitem" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link" :class="{ active: isAlbumsPath }" to="/albums">Albums</NuxtLink>
              </li>
              <li class="nav-item nav-hash" role="menuitem" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link" to="/#about" :class="{ active: isAboutHash }">About</NuxtLink>
              </li>
              <li class="nav-item" role="menuitem" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link" to="/licensing">Licensing</NuxtLink>
              </li>
              <li class="nav-item" role="menuitem" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link" to="/branding">Branding</NuxtLink>
              </li>
              <li class="nav-item" role="menuitem" data-bs-dismiss="offcanvas">
                <NuxtLink class="nav-link" to="https://merch.dimatis.music" target="_blank">Merch</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

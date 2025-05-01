<script setup lang="ts">
const page = ref(tracks[0]!);
</script>

<template>
  <main id="links">
    <div class="bg-links" :style="{ backgroundImage: `url(${LINKS.background})`, filter: 'blur(10px)', opacity: .9 }" />
    <div class="container py-5">
      <div class="card rounded-4 col-lg-7 mx-auto overflow-hidden">
        <div class="card-header text-center py-5">
          <img class="img-fluid rounded-4 scale-on-hover" :src="SITE.image" height="350" width="350">
          <h1 class="text-center mb-0 mt-3">{{ SITE.name }}</h1>
          <p class="text-center text-muted m-0">{{ SITE.person.fullname }}</p>
          <p class="text-center text-muted m-0">{{ SITE.description }}</p>
          <NuxtLink :to="`mailto:${SITE.email}`">{{ SITE.email }}</NuxtLink>
        </div>
        <div class="card-body px-lg-5 bg-body-secondary">
          <h4>Latest Release</h4>
          <div class="position-relative neon scale-on-hover normal">
            <NuxtLink :to="`${SITE.fanlinksUrl}/${page.art || page.id}`" class="bg-body-tertiary d-flex align-items-center rounded-4 overflow-hidden mb-2 border text-decoration-none position-relative z-1">
              <img class="img-fluid" :src="`/images/${page.id}.jpg`" :alt="`${page.artists} - ${page.title}`" width="100" height="100">
              <div class="px-3 w-100">
                <h5 class="m-0">{{ page.title }}</h5>
                <p class="m-0 text-muted">{{ page.artists }}</p>
              </div>
            </NuxtLink>
          </div>
          <hr>
          <template v-for="(tree, i) of LINKS.tree" :key="tree.id">
            <h4>{{ tree.title }}</h4>
            <div v-for="(link, j) of tree.content" :key="j" class="position-relative neon scale-on-hover" :class="link.code ? link.code : 'normal'">
              <NuxtLink :to="link.url" class="bg-body d-flex align-items-center rounded-4 overflow-hidden mb-2 border text-decoration-none position-relative z-1">
                <div class="d-flex align-items-center justify-content-center" :style="{ minWidth: '100px' }">
                  <Icon v-if="link.code" :name="`fa6-brands:${link.code}`" size="1.5rem" />
                  <IconLogo v-else size="1.5rem" />
                </div>
                <div class="bg-body-tertiary px-3 py-4 w-100">
                  <h5 class="m-0">{{ link.title }}</h5>
                </div>
              </NuxtLink>
            </div>
            <hr v-if="i !== LINKS.tree.length - 1">
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.bg-links {
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
}
.popover {
  max-width: 1000px;
  background-color: transparent;
  border-radius: unset;
  border: unset;
  font-family: 'Roboto', sans-serif;
}
.popover-body {
  padding: unset;
}
#release_popped {
  width:300px;
}
.neon:hover::after {
  opacity: 1;
  transform: translateZ(0) scale(.97,.75);
  transition: opacity .3s;
}
.neon::after {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  filter: blur(20px);
}
.spotify:hover::after {
  background-color: #1db954;
}
.youtube:hover::after {
  background-color: #ff0000;
}
.soundcloud:hover::after {
  background-color: #ff8800;
}
.instagram:hover::after {
  background-color: #ff0069;
}
.facebook:hover::after {
  background-color: #3b5998;
}
.normal:hover::after {
  background-color: #f7f7f7;
}
.x-twitter:hover::after {
  background-color: #f7f7f7;
}
.bandcamp:hover::after {
  background-color: #1da0c3;
}
</style>

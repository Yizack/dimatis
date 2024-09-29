<script setup lang="ts">
const { $bootstrap } = useNuxtApp();

const releasepop = ref<{ $el: HTMLElement }>();
const releasepop_content = ref<HTMLElement>();

const page = ref(tracks[0]!);

onBeforeUnmount(() => {
  if (!releasepop.value) return;
  $bootstrap.hidePopover(releasepop.value.$el);
});

onMounted(() => {
  if (!releasepop.value || !releasepop_content.value) return;

  $bootstrap.popover(releasepop.value.$el, {
    container: "body",
    content: releasepop_content.value.innerHTML,
    html: true,
    placement: "bottom",
    trigger: "hover"
  });
});
</script>

<template>
  <main id="links">
    <div class="bg-links" :style="`background-image: url('${LINKS.background}'); opacity: 0.5;`" />
    <div class="container">
      <div class="text-center py-4">
        <div class="mb-2">
          <img class="mx-auto rounded-circle" :src="SITE.logo" height="150" width="150">
        </div>
        <div class="mb-4">
          <h3>{{ SITE.name }}</h3>
        </div>
        <div id="release">
          <span class="text-uppercase">Latest Release</span>
          <!-- Latest release -->
          <NuxtLink ref="releasepop" :to="`/${page.cover ? page.cover : page.id}`" class="link normal col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center" data-bs-toggle="popover">
            <IconLogo width="18" height="18" />
            <strong class="ms-1">{{ page.artists }} - {{ page.title }}</strong>
          </NuxtLink>
        </div>
        <div v-for="(tree, i) of LINKS.tree" :id="tree.id" :key="i">
          <span class="text-uppercase">{{ tree.title }}</span>
          <template v-for="(link, j) of tree.content" :key="j">
            <a :href="link.url" target="_blank" class="link col-lg-8 col-11 p-3 mb-3 bg-white border rounded mx-auto text-decoration-none d-flex align-items-center justify-content-center" :class="link.code ? link.code : 'normal'">
              <Icon v-if="link.code" :name="`fa6-brands:${link.code}`" />
              <IconLogo v-else width="18" height="18" />
              <strong class="ms-1">{{ link.title }}</strong>
            </a>
          </template>
        </div>
      </div>
    </div>
    <!-- Release Content -->
    <div ref="releasepop_content" class="d-none">
      <div id="release_popped" class="bg-dark text-white rounded-3">
        <img class="d-block img-fluid p-2" :src="`/images/${page.id}.jpg`" :alt="`${page.artists} - ${page.title}`" width="300">
        <div class="p-4">
          <div class="text-center">
            <h5><b>{{ page.title }}</b></h5>
            <h6 class="mb-0">{{ page.artists }}</h6>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.border {
  border: 2px solid #151515!important;
}
.spotify:hover, .youtube:hover, .soundcloud:hover, .instagram:hover, .facebook:hover, .normal:hover, .x-twitter:hover, .bandcamp:hover {
  border-color: #fff!important;
  color: #fff!important;
}
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
.spotify {
  color: #1db954;
}
.spotify:hover {
  background-color: #48ad6c!important;
}
.youtube {
  color: #ff0000;
}
.youtube:hover {
  background-color: #e44747!important;
}
.soundcloud {
  color: #ff8800;
}
.soundcloud:hover {
  background-color: #ff953c!important;
}
.instagram {
  color: #833ab4;
}
.instagram:hover {
  background-color: #8f58b3!important;
}
.facebook {
  color: #3b5998;
}
.facebook:hover {
  background-color: #5879c0!important;
}
.normal {
  color: #151515;
}
.normal:hover {
  background-color: #151515!important;
}
.x-twitter {
  color: #000;
}
.x-twitter:hover {
  background-color: #151515!important;
}
.bandcamp {
  color: #1da0c3;
}
.bandcamp:hover {
  background-color: #1da0c3!important;
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
.rounded {
  border-radius: 2rem!important;
}
</style>

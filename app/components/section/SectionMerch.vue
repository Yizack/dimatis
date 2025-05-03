<script setup lang="ts">
const { data: merch } = useLazyFetch("/api/merch", {
  getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key]
});
</script>

<template>
  <section v-if="merch" id="merch" class="py-lg-5 py-4 bg-body-secondary">
    <div class="container">
      <h3 class="text-uppercase text-center">Merch</h3>
      <p class="text-center mb-0">Check out my merch</p>
      <div class="row my-4 justify-content-center">
        <div v-for="item of merch" :key="item.id" class="col-12 col-md-6 col-lg-3 mb-4" :title="item.description">
          <div class="card h-100 border-0 rounded-3 shadow-sm">
            <NuxtLink :to="`${SITE.merchUrl}/products/${item.slug}`" target="_blank" class="text-decoration-none flex-fill">
              <img class="card-img-top border-bottom" :src="item.image.url" :alt="`Merch ${item.id}`">
              <div class="card-body text-center">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <p class="m-0" v-html="item.name" />
                <span class="text-secondary">USD {{ item.price }}</span>
              </div>
            </NuxtLink>
            <NuxtLink :to="`${SITE.merchUrl}/products/${item.slug}`" class="card-footer text-center btn btn-dark text-decoration-none">
              <span>Shop</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="text-center text-uppercase">
        <NuxtLink :to="SITE.merchUrl" class="btn btn-outline-white rounded-pill text-decoration-none" role="button">View More</NuxtLink>
      </div>
    </div>
  </section>
</template>

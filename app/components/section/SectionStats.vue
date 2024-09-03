<script setup lang="ts">
const stats = computed(() => getStats());

onMounted(() => {
  const { $bootstrap } = useNuxtApp();
  $bootstrap.initializePopover();
});
</script>

<template>
  <section id="stats" class="">
    <div class="container py-5">
      <h3 class="text-uppercase text-center mb-4">Career Statistics</h3>
      <div class="row g-3">
        <div v-for="(stat, i) of stats" :key="i" class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 border-0 bg-body-tertiary" data-bs-toggle="popover" data-bs-placement="top" :data-bs-content="stat.description" style="cursor: help">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h4 class="card-title">{{ stat.value }}</h4>
                <Icon v-if="stat.icon" :name="stat.icon" size="2rem" />
              </div>
              <p class="card-text">{{ stat.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps({
  icon: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <FontAwesomeIcon :icon="icon" />
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <FontAwesomeIcon :icon="icon" />
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    }
  }
};
</script>

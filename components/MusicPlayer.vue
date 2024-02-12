<script setup lang="ts">
const props = defineProps({
  size: {
    type: Object as PropType<{ width: string; height: string; }>,
    default: () => ({})
  },
  track: {
    type: Object as PropType<DimatisTrack>,
    default: () => ({})
  },
  param: {
    type: [String, Number],
    default: ""
  }
});

const srcImage = computed(() => `/images/${props.track.cover ? props.track.cover : props.param}.jpg`);

const config = defineMusicfyPlayer({
  image: {
    src: srcImage.value,
    alt: `${props.track.artists} - ${props.track.title}`
  },
  audio: {
    provider: "dropbox",
    type: "audio/mpeg",
    id: props.track.dropbox.id,
    rlkey: props.track.dropbox.rlkey
  },
  color: {
    class: props.param as string
  },
  size: {
    width: props.size.width,
    height: props.size.height
  }
});
</script>

<template>
  <MusicfyPlayer :config="config" />
</template>

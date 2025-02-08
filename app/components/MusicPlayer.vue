<script setup lang="ts">
const props = defineProps<{
  size: { width: string, height: string };
  track: DimatisTrack;
  param: string;
}>();

const srcImage = computed(() => `/images/${props.track.art || props.param}.jpg`);

const config = useMusicfyPlayer({
  image: {
    src: srcImage.value,
    alt: `${props.track.artists} - ${props.track.title}`
  },
  audio: {
    provider: "dropbox",
    type: "audio/mpeg",
    preload: "none",
    id: props.track.dropbox.id,
    rlkey: props.track.dropbox.rlkey
  },
  color: {
    class: props.param
  }
});
</script>

<template>
  <MusicfyPlayer :config="config" :width="size.width" :height="size.height" />
</template>

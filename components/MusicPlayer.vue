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
const srcDropbox = computed(() => {
  const dropbox = props.track.dropbox;
  const dropboxBase = "https://www.dropbox.com";
  const downloadURL = dropbox.rlkey ? `${dropboxBase}/scl/fi/${dropbox.id}/?rlkey=${dropbox.rlkey}&dl=1` : `${dropboxBase}/s/${dropbox.id}?dl=1`;
  return downloadURL;
});

const audio = ref() as Ref<HTMLAudioElement>;

const { $MediaElementPlayer } = useNuxtApp();

onMounted(() => {
  new $MediaElementPlayer(audio.value, {
    iconSprite: "",
    audioHeight: 40,
    features: ["playpause", "current", "duration", "progress", "volume", "tracks", "fullscreen"],
    alwaysShowControls: true,
    timeAndDurationSeparator: "<span></span>",
    iPadUseNativeControls: false,
    iPhoneUseNativeControls: false,
    AndroidUseNativeControls: false
  });
});
</script>

<template>
  <div class="player" :class="track.cover ? track.cover : param" :style="size">
    <div class="box">
      <div class="controls">
        <div class="lecteur">
          <audio ref="audio" class="music fc-media">
            <source :src="srcDropbox" type="audio/mpeg">
          </audio>
        </div>
      </div>
      <div class="cover">
        <div class="box-1">
          <div class="box-2">
            <div class="box-3">
              <img class="image" :src="srcImage" :alt="`${track.artists} - ${track.title}`">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

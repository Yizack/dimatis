<template>
  <div class="player" :class="'cover' in track ? track.cover : param" :style="[size]">
    <div class="box">
      <div class="controls">
        <div class="lecteur">
          <audio ref="audio" class="music fc-media" />
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

<script>
export default {
  name: "MusicPlayer",
  props: {
    size: {
      type: Object,
      default: () => ({})
    },
    track: {
      type: Object,
      default: () => ({})
    },
    param: {
      type: String,
      default: ""
    }
  },
  computed: {
    srcImage () {
      return `/images/${"cover" in this.track ? this.track.cover : this.param}.jpg`;
    }
  },
  mounted () {
    const media = this.$refs.audio;
    const mediaElement = new MediaElementPlayer(media, {
      iconSprite: "",
      audioHeight: 40,
      features: ["playpause", "current", "duration", "progress", "volume", "tracks", "fullscreen"],
      alwaysShowControls: true,
      timeAndDurationSeparator: "<span></span>",
      iPadUseNativeControls: false,
      iPhoneUseNativeControls: false,
      AndroidUseNativeControls: false
    });
    mediaElement.setSrc(`https://www.dropbox.com/s/dl/${this.track.dropbox}`, "audio/mpeg");
  }
};
</script>

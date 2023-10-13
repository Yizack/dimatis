<template>
  <div class="player" :class="'cover' in track ? track.cover : param" :style="[size]">
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
    },
    srcDropbox () {
      const dropbox = this.track.dropbox;
      const dropboxBase = "https://www.dropbox.com";
      const downloadURL = dropbox.rlkey ? `${dropboxBase}/scl/fi/${dropbox.id}/?rlkey=${dropbox.rlkey}&dl=1` : `${dropboxBase}/s/${dropbox.id}?dl=1`;
      return downloadURL;
    }
  },
  mounted () {
    const media = this.$refs.audio;
    (() => new MediaElementPlayer(media, {
      iconSprite: "",
      audioHeight: 40,
      features: ["playpause", "current", "duration", "progress", "volume", "tracks", "fullscreen"],
      alwaysShowControls: true,
      timeAndDurationSeparator: "<span></span>",
      iPadUseNativeControls: false,
      iPhoneUseNativeControls: false,
      AndroidUseNativeControls: false
    }))();
  }
};
</script>

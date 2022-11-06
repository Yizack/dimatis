
<script setup>
import ColorThief from "colorthief";
</script>

<template>
  <div id="player" :style="[size, style]">
    <div id="container">   
      <div id="controls">
        <div class="lecteur">
          <audio ref="audio" id="music" class="fc-media">
            <source :src="`https://www.dropbox.com/s/dl/${track.dropbox}`" type="audio/mpeg">
          </audio>
        </div>
      </div>
      <div id="cover" v-if="colored">
        <div id="box-1">
          <div id="box-2">
            <div id="box-3">
              <div id="image" :style="`background: url('${srcImage}');`" :alt="`${track.artists} - ${track.title}`"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["size", "track", "param"],
  name: "MusicPlayer",
  data() {
    return {
      colored: false,
      style: {
        "background-color": null
      }
    };
  },
  computed: {
    srcImage() {
      return `/images/${this.track?.cover ? this.track.cover : this.param}.jpg`;
    }
  },
  methods: {
    mediaElement() {
      let media = this.$refs.audio;
      // eslint-disable-next-line no-undef
      new MediaElementPlayer(media, {
        iconSprite: "",
        audioHeight: 40,
        features : ["playpause", "current", "duration", "progress", "volume", "tracks", "fullscreen"],
        alwaysShowControls: true,
        timeAndDurationSeparator: "<span></span>",
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false
      });
    }
  },
  mounted() {
    this.mediaElement();

    let img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = this.srcImage;

    img.onload = () => {
      let colorThief = new ColorThief();
      let color = colorThief.getColor(img);
      this.style["background-color"] = `rgb(${color})`;
      this.colored = true;
    };
    
  },
};
</script>


<script setup>
import ColorThief from "colorthief";
</script>

<template>
  <div class="player" :style="[size, style]">
    <div class="box">   
      <div class="controls">
        <div class="lecteur">
          <audio ref="audio" class="music fc-media">
            <source :src="`https://www.dropbox.com/s/dl/${track.dropbox}`" type="audio/mpeg">
          </audio>
        </div>
      </div>
      <div class="cover">
        <div class="box-1">
          <div class="box-2">
            <div class="box-3" v-html="image">
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
      image: null,
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
    },
    colorImage() {
      let img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = this.srcImage;
      img.alt = `${this.track.artists} - ${this.track.title}`;
      img.classList.add("image");

      img.onload = () => {
        let colorThief = new ColorThief();
        let color = colorThief.getColor(img);
        this.style["background-color"] = `rgb(${color})`;
        this.image = img.outerHTML;
      };
    }
  },
  mounted() {
    this.mediaElement();
    this.colorImage();
  }
};
</script>

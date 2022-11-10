import MediaElementPlayer from "mediaelement";

export default defineNuxtPlugin(() => {
  return {
    provide: { MediaElementPlayer }
  };
});

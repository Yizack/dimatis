import Glide from "@glidejs/glide";

declare module "#app" {
  interface NuxtApp {
    $Glide: Glide;
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: { Glide }
  };
});

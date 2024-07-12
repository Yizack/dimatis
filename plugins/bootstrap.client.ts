import Collapse from "bootstrap/js/dist/collapse";

class Bootstrap {
  toogleCollapse (el: HTMLElement) {
    const bsCollapse = new Collapse(el);
    bsCollapse.toggle();
  }
}

declare module "#app" {
  interface NuxtApp {
    $bootstrap: Bootstrap;
  }
}

export default defineNuxtPlugin(() => {
  const bootstrap = new Bootstrap();
  return {
    provide: { bootstrap }
  };
});

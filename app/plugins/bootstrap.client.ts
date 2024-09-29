import "bootstrap/js/dist/dropdown";
import Collapse from "bootstrap/js/dist/collapse";
import Popover from "bootstrap/js/dist/popover";
import "bootstrap/js/dist/offcanvas";

class Bootstrap {
  toogleCollapse (el: HTMLElement) {
    const bsCollapse = new Collapse(el);
    bsCollapse.toggle();
  }

  initializePopover () {
    const popoverList = document.querySelectorAll("[data-bs-toggle=\"popover\"]");
    [...popoverList].map(e => new Popover(e, { trigger: "hover" }));
  }

  popover (el: HTMLElement, options: Record<string, unknown>) {
    return new Popover(el, options);
  }

  hidePopover (el: HTMLElement) {
    const popover = Popover.getInstance(el);
    if (popover) {
      popover.hide();
    }
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

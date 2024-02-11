import "mediaelement";

interface MediaElementPlayer {
  new (node: HTMLElement, options: {
    iconSprite: string;
    audioHeight: number;
    features: ("playpause" | "current" | "progress" | "duration" | "tracks" | "volume" | "fullscreen")[];
    alwaysShowControls: boolean;
    timeAndDurationSeparator: string;
    iPadUseNativeControls: boolean;
    iPhoneUseNativeControls: boolean;
    AndroidUseNativeControls: boolean;
  }): void;
}

declare global {
  interface Window {
    MediaElementPlayer: MediaElementPlayer;
  }
}

const MediaElementPlayer = window.MediaElementPlayer;

export default defineNuxtPlugin(() => {
  return {
    provide: { MediaElementPlayer }
  };
});

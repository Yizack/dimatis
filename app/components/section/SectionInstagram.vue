<script setup lang="ts">
const { $Glide } = useNuxtApp();

const { data: cachedFeed } = useNuxtData<InstagramPost[]>("instagram-feed");
const { data: feed, execute } = await useFetch<InstagramPost[]>("/api/instagram/feed", {
  key: "instagram-feed",
  immediate: false,
  default: () => cachedFeed.value || []
});

if (!feed.value.length) await execute();

onMounted(async () => {
  new $Glide(".glide", {
    perView: 3,
    bound: true,
    breakpoints: {
      968: { perView: 2 },
      630: { perView: 1 }
    }
  }).mount();
});

const replaceLinkables = (text: string) => {
  // Replace hashtags with links
  let replacedText = text.replace(/\n+/g, " ").trim();
  replacedText = replacedText.replace(/#([a-zA-Z0-9._]+)(?=\W|$)/g, "<a href='https://www.instagram.com/explore/tags/$1/' target='_blank' style='color: rgb(224 241 255)'>#$1</a>");
  // Replace mentions with links
  replacedText = replacedText.replace(/@([a-zA-Z0-9._]+)(?=\W|$)/g, "<a href='https://www.instagram.com/$1/' target='_blank' style='color: rgb(224 241 255)'>@$1</a>");
  return replacedText;
};

const playVideo = (event: MouseEvent) => {
  event.preventDefault();
  const video = event.target as HTMLVideoElement;
  if (video.paused) {
    video.play();
    video.controls = true;
    return;
  }
  video.pause();
};
</script>

<template>
  <section id="ig-feed" class="py-lg-5 py-4">
    <div v-if="feed && feed.length" class="container text-center">
      <h4 class="text-uppercase mb-4">Instagram feed</h4>
      <div class="row">
        <div class="col-lg-12 p-0">
          <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides" :class="{ 'd-none': !feed }">
                <li v-for="post of feed" :key="post.id" class="glide__slide">
                  <div class="instagram-wrapper bg-body-tertiary rounded-3">
                    <blockquote class="instagram-media mx-auto" style="border:0; border-radius:3px; margin: auto; max-width:540px; min-width:326px; padding:0; width:100%;">
                      <a :href="`${post.permalink}?utm_source=ig_embed&amp;utm_campaign=loading`" style="text-decoration:none;" target="_blank">
                        <img v-if="post.media_type !== 'VIDEO' && post.media_type !== 'REELS'" class="w-100" :src="post.media_url" :alt="`Instagram ${post.media_type} (${post.id})`">
                        <div v-else class="position-relative">
                          <video class="w-100" playsinline disablePictureInPicture controlsList="noplaybackrate nodownload" :poster="post.thumbnail_url" @click="playVideo">
                            <source :src="post.media_url" type="video/mp4">
                          </video>
                          <Icon class="position-absolute top-0 end-0 m-1" name="tabler:video" size="1.5rem" />
                        </div>
                        <div class="px-3 text-start">
                          <div class="py-3" style="color:#3897f0; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">
                            <span>View this post on Instagram</span>
                          </div>
                          <hr class="m-0" role="none">
                        </div>
                        <div class="px-3" style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;">
                          <div>
                            <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);" />
                            <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;" />
                            <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);" />
                          </div>
                          <div style="margin-left: 8px;">
                            <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;" />
                            <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)" />
                          </div>
                          <div style="margin-left: auto;">
                            <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);" />
                            <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);" />
                            <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);" />
                          </div>
                        </div>
                      </a>
                      <p class="mx-3 my-2" style="text-align: left;">
                        <!-- eslint-disable-next-line vue/no-v-html -->
                        <span :href="`${post.permalink}?utm_source=ig_embed&amp;utm_campaign=loading`" style="font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank" v-html="replaceLinkables(post.caption)" />
                      </p>
                    </blockquote>
                  </div>
                </li>
              </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
              <span class="glide__arrow glide__arrow--left" data-glide-dir="<">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
              </span>
              <span class="glide__arrow glide__arrow--right" data-glide-dir=">">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .instagram-wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    width: 90%;
    max-height: 500px;
    margin: auto;
  }
  .instagram-media {
    border-radius: 3px!important;
    border: 0!important;
    box-shadow: none!important;
    display: block!important;
    min-width: 0!important;
    margin: auto!important;
    width: 100%!important;
    position: relative;
  }
  .glide__arrow {
    position: absolute;
    display: block;
    padding: 10px;
    cursor: pointer;
    background: #fff;
    border-radius: 100%;
    border-style: solid;
    color: #262626;
    border-color: #dbdbdb;
  }
  .glide__arrow:hover {
    background: #262626;
    border-style: solid;
    color: #fff;
    border-color: #dbdbdb;
  }
  .glide__arrow--right {
    top: 200px;
    right: 0;
  }
  .glide__arrow--left {
    top: 200px;
    left: 0;
  }
</style>

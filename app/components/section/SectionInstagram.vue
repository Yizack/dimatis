<script setup lang="ts">
const { $Glide } = useNuxtApp();

const { data: feed } = useLazyFetch<InstagramPost[]>("/api/instagram/feed", {
  getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key]
});

const mountFeed = () => {
  if (feed.value && feed.value.length > 1) {
    new $Glide(".glide", {
      perView: 3,
      bound: true,
      breakpoints: {
        968: { perView: 2 },
        630: { perView: 1 }
      }
    }).mount();
  }
};

watch(feed, () => {
  nextTick(mountFeed);
});

onMounted(() => {
  mountFeed();
});

const replaceLinkables = (text: string) => {
  // Replace hashtags with links
  let replacedText = text.replace(/[\s|\n]#([a-zA-Z0-9._]+)(?=\W|$)/g, " <a href='https://www.instagram.com/explore/tags/$1/' target='_blank' style='color: rgb(224 241 255)'>#$1</a>");
  // Replace mentions with links
  replacedText = replacedText.replace(/[\s|\n]@([a-zA-Z0-9._]+)(?=\W|$)/g, " <a href='https://www.instagram.com/$1/' target='_blank' style='color: rgb(224 241 255)'>@$1</a>");
  replacedText = replacedText.replace(/\n/g, "<br>").trim();
  return replacedText;
};

const playVideo = (event: Event) => {
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
  <section v-if="feed && feed.length" id="ig-feed" class="py-lg-5 py-4">
    <div class="container text-center">
      <h2 class="text-uppercase mb-4">Instagram feed</h2>
      <div class="row">
        <div class="col-lg-12 p-0">
          <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides" :class="{ 'd-none': !feed }">
                <li v-for="post of feed" :key="post.id" class="glide__slide">
                  <div class="instagram-wrapper bg-body-tertiary rounded-3">
                    <blockquote class="instagram-media mx-auto" style="border:0; border-radius:3px; margin: auto; max-width:540px; min-width:326px; padding:0; width:100%;">
                      <NuxtLink :to="`${post.permalink}?utm_source=ig_embed&amp;utm_campaign=loading`" style="text-decoration:none;" target="_blank">
                        <img v-if="post.media_type !== 'VIDEO' && post.media_type !== 'REELS'" class="w-100" :src="post.media_url" :alt="`Instagram ${post.media_type} (${post.id})`">
                        <div v-else class="position-relative">
                          <video class="w-100" playsinline disablePictureInPicture controlsList="noplaybackrate nodownload" :poster="post.thumbnail_url" @click.prevent="playVideo">
                            <source :src="post.media_url" type="video/mp4">
                          </video>
                          <Icon class="position-absolute top-0 end-0 m-1" name="tabler:video" size="1.5rem" />
                        </div>
                        <div class="px-3 text-start">
                          <div class="py-3" style="color:#3897f0; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">
                            <span>View this post on Instagram</span>
                          </div>
                        </div>
                      </NuxtLink>
                      <hr class="mt-0" role="none">
                      <p class="mx-3 my-2" style="text-align: left;">
                        <!-- eslint-disable-next-line vue/no-v-html -->
                        <span style="font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" v-html="replaceLinkables(post.caption)" />
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

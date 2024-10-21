export default defineCachedEventHandler(async (event) => {
  const { instagram } = useRuntimeConfig(event);
  const API = new InstagramFeed(instagram.userId, instagram.accessToken);
  await API.refreshAccessToken();
  const feed = await API.getFeed(["permalink", "timestamp", "caption", "media_url", "media_type", "thumbnail_url"]);

  return feed;
}, { maxAge: 86400 });

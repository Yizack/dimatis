export default defineCachedEventHandler(async (event) => {
  const { instagram } = useRuntimeConfig(event);
  const API = new InstagramFeed(instagram.accessToken);
  await API.refreshAccessToken();
  const feed = await API.getFeed({
    fields: ["permalink", "timestamp", "caption", "media_url", "media_type", "thumbnail_url", "is_shared_to_feed"],
    limit: 80
  });
  return feed.data.filter(post => post.is_shared_to_feed);
}, {
  group: "api",
  name: "instagram",
  getKey: () => "feed",
  maxAge: 86400
});

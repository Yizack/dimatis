export default defineCachedEventHandler(async (event) => {
  const { instagram } = useRuntimeConfig(event);
  const API = new InstagramFeed(instagram.userId, instagram.accessToken);
  await API.refreshAccessToken();
  const feed = await API.getFeed();

  return feed;
}, { maxAge: 86400 });

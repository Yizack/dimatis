export default defineCachedEventHandler(async (event) => {
  const { spotify } = useRuntimeConfig(event);
  const spotifyAPI = new SpotifyAPI(spotify.clientId, spotify.clientSecret);
  await spotifyAPI.generateToken();

  const spotifyArtist = await spotifyAPI.getArtist(SITE.spotifyId);

  return {
    spotify: spotifyArtist.followers.total
  };
}, {
  group: "api",
  name: "followers",
  getKey: () => "all",
  maxAge: 86400 // 1 day cache
});

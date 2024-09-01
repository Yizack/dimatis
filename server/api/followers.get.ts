export default defineCachedEventHandler(async (event) => {
  const { spotify } = useRuntimeConfig(event);
  const spotifyAPI = new SpotifyAPI(spotify.clientId, spotify.clientSecret);
  await spotifyAPI.generateToken();

  const spotifyArtist = await spotifyAPI.getArtist(SITE.spotifyId);

  return {
    spotify: spotifyArtist.followers
  };
}, { maxAge: 86400 });

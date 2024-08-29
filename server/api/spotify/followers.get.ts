export default defineCachedEventHandler(async (event) => {
  const { spotify } = useRuntimeConfig(event);
  const API = new SpotifyAPI(spotify.clientId, spotify.clientSecret);
  await API.generateToken();

  const artist = await API.getArtist(SITE.spotify_id);

  return { name: artist.name, id: artist.id, followers: artist.followers.total };
}, { maxAge: 86400 });

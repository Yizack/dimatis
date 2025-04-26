export default defineCachedEventHandler(async (event) => {
  const { track } = await getValidatedQuery(event, z.object({
    track: z.string()
  }).parse);

  const lyrics = await useStorage("assets/server/lyrics").getItemRaw(track + ".txt");

  if (!lyrics) throw createError({ statusCode: ErrorCode.NOT_FOUND, message: "No lyrics found" });

  setResponseHeader(event, "Content-Type", "text/plain");
  return normalizeLyrics(lyrics.toString());
}, {
  swr: false,
  group: "api",
  name: "lyrics",
  getKey: event => getQuery(event).track?.toString() as string,
  maxAge: 86400 * 30 * 6 // 6 months cache
});

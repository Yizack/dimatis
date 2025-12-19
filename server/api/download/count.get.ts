export default defineCachedEventHandler(async (event) => {
  const { file } = await getValidatedQuery(event, z.object({
    file: z.string()
  }).parse);

  const data = await db.select({
    count: tables.downloads.count
  }).from(tables.downloads).where(eq(tables.downloads.file, file)).get();

  if (!data) {
    throw createError({
      status: ErrorCode.NOT_FOUND,
      message: "Track not found"
    });
  }

  return { count: data.count };
}, {
  swr: false,
  group: "api",
  name: "download-count",
  getKey: event => getQuery(event).file as string,
  maxAge: 86400, // 1 day cache
  shouldBypassCache: () => !!import.meta.dev
});

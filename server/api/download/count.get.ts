export default defineCachedEventHandler(async (event) => {
  const { file } = await getValidatedQuery(event, z.object({
    file: z.string()
  }).parse);

  const DB = useDB();
  const data = await DB.select({
    count: tables.downloads.count
  }).from(tables.downloads).where(eq(tables.downloads.file, file)).get();

  if (!data) {
    throw createError({
      message: "Track not found",
      statusCode: ErrorCode.NOT_FOUND
    });
  }

  return { count: data.count };
}, {
  swr: false,
  group: "api",
  name: "download-count",
  getKey: event => getQuery(event).file as string,
  maxAge: 86400 // 1 day cache
});

import tracksData from "~/assets/data/tracks";
import albumsData from "~/assets/data/albums";

export default defineEventHandler(async (event) => {
  const { file } = await getValidatedQuery(event, z.object({
    file: z.string()
  }).parse);

  const regex = /-album|-ep/ig;
  const isAlbum = regex.test(file);
  const prop = isAlbum ? file.replace(regex, "") : file;

  const data = isAlbum ? albumsData : tracksData;
  const propData = data?.find(d => d.id === prop) as (DimatisAlbum | DimatisTrack);

  if (!propData) {
    throw createError({
      message: isAlbum ? "Album or EP not found" : "Track not found",
      statusCode: 404
    });
  }

  const DB = useDB();
  const time = Date.now();

  await DB.insert(tables.downloads).values({
    file,
    count: 1,
    lastDownload: time
  }).onConflictDoUpdate({
    target: tables.downloads.file,
    set: {
      count: sql`${tables.downloads.count} + 1`,
      lastDownload: time
    }
  }).returning().get();

  const { dropbox } = propData;
  if (!dropbox) {
    throw createError({
      message: "No downloadable file found",
      statusCode: 404
    });
  }

  const dropboxBase = "https://www.dropbox.com";
  const downloadURL = dropbox.rlkey ? `${dropboxBase}/scl/fi/${dropbox.id}/?rlkey=${dropbox.rlkey}&dl=1` : `${dropboxBase}/s/${dropbox.id}?dl=1`;

  return sendRedirect(event, downloadURL);
});

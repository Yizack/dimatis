export default defineEventHandler(() => {
  return useDB().select({
    file: tables.downloads.file,
    downloads: tables.downloads.downloads,
    lastDownload: tables.downloads.lastDownload
  }).from(tables.downloads).all();
});

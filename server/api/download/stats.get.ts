export default defineEventHandler(() => {
  return useDB().select({
    file: tables.downloads.file,
    count: tables.downloads.count,
    lastDownload: tables.downloads.lastDownload
  }).from(tables.downloads).orderBy(desc(tables.downloads.lastDownload)).all();
});

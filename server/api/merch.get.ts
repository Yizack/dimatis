export default defineCachedEventHandler(async (event) => {
  const { fourthwall } = useRuntimeConfig(event);

  const response = await $fetch<{ results: FourthwallProduct[] }>("https://api.fourthwall.com/open-api/v1.0/products", {
    headers: {
      authorization: `Basic ${btoa(`${fourthwall.user}:${fourthwall.password}`)}`
    }
  }).catch(() => null);

  const products = response?.results || [];
  const productIds = [
    "755140be-5fb9-49b2-9123-efae7c4151f1",
    "d65bdade-b919-44bc-9347-7929107f63cc",
    "075ade71-6e32-4350-b115-e92687430cba",
    "6a7535a0-c979-48f6-adbf-da2835e7a939",
    "4677f66b-2702-4ceb-9095-25f5c8c71981",
    "989d19cf-7637-4c5c-b24c-7b67dbd35f89",
    "b58ee0a5-b201-4587-bc98-3945361e8b68",
    "7e16dccb-55c5-42f4-a452-71f2730e9c5d"
  ];

  return products.filter((product) => {
    return productIds.includes(product.id);
  }).map(product => ({
    id: product.id,
    name: product.name,
    description: product.description.replace(/<[^>]+>/g, ""),
    slug: product.slug,
    image: product.images[0]!,
    price: product.variants[0]!.unitPrice.value.toFixed(2)
  })).sort((a, b) => {
    const aIndex = productIds.indexOf(a.id);
    const bIndex = productIds.indexOf(b.id);
    return aIndex - bIndex;
  });
}, {
  swr: false,
  group: "api",
  name: "merch",
  getKey: () => "all",
  maxAge: 86400 * 7 // 7 days cache
});

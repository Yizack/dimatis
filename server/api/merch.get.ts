export default defineCachedEventHandler(async (event) => {
  const { fourthwall } = useRuntimeConfig(event);

  const response = await $fetch<{ results: FourthwallProduct[] }>("https://api.fourthwall.com/open-api/v1.0/products", {
    headers: {
      authorization: `Basic ${btoa(`${fourthwall.user}:${fourthwall.password}`)}`
    }
  }).catch(() => null);

  const products = response?.results || [];

  return products.filter((product) => {
    const isPublic = product.access.type === "PUBLIC";
    const hasImages = product.images.length > 0;
    const hasVariants = product.variants.length > 0;
    return isPublic && hasImages && hasVariants;
  }).map(product => ({
    id: product.id,
    name: product.name,
    description: product.description.replace(/<[^>]+>/g, ""),
    slug: product.slug,
    image: product.images[0]!,
    price: product.variants[0]!.unitPrice.value.toFixed(2)
  })).reverse().slice(0, 8);
}, {
  swr: false,
  group: "api",
  name: "merch",
  getKey: () => "all",
  maxAge: 86400 * 7 // 7 days cache
});

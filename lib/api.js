import client, { previewClient } from "./sanity";

const getClient = (preview) => (preview ? previewClient : client);

export async function getAllProducts(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "product"] | order(_createdAt desc) {
     ...,
     categories->,
    }`);
  return results;
}

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-10-01", // Use your preferred API version
  useCdn: true, // Set to true for production if using CDN
  token: process.env.SANITY_API_TOKEN, // Required for mutations
});

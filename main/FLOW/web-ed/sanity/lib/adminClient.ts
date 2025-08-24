import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import baseUrl from "@/lib/baseUrl";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    studioUrl: `${baseUrl}/studio`,
  },
  token: process.env.SANITY_API_WRITE_TOKEN,
});
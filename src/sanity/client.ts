import { createClient } from "next-sanity";
import { apiVersion, dataset, hasSanityConfig, previewToken, projectId } from "../../sanity/env";

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
    })
  : null;

export const tokenClient =
  typeof window === "undefined" && previewToken && sanityClient
    ? sanityClient.withConfig({
        token: previewToken,
        useCdn: false,
      })
    : null;

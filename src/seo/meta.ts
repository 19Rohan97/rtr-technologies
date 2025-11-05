import type { Metadata } from "next";
import { absUrl } from "./utils";

const SITE_NAME = "RTR Technologies";
const DEFAULT_IMAGE_PATH = "/og-default.png";

type MetadataImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

type BuildMetadataOptions = {
  /** Full page title as it should appear in the browser and SERPs */
  title: string;
  /** Meta description that supports the primary keyword focus */
  description: string;
  /** Relative path for canonical URL generation (defaults to "/") */
  path?: string;
  /** Custom Open Graph overrides */
  openGraph?: Metadata["openGraph"];
  /** Custom Twitter card overrides */
  twitter?: Metadata["twitter"];
  /** Optional social image; relative paths will be absolutized */
  image?: MetadataImage;
  /** Keyword list to surface through the `keywords` meta tag */
  keywords?: string[];
  /** Robots directives */
  robots?: Metadata["robots"];
  /** Alternate references (e.g., hreflang) */
  alternates?: Metadata["alternates"];
  /** Convenience flag for marking a page as noindex */
  noIndex?: boolean;
};

function normaliseImage(image?: MetadataImage) {
  const resolved: Required<MetadataImage> = {
    url: absUrl(image?.url ?? DEFAULT_IMAGE_PATH),
    width: image?.width ?? 1200,
    height: image?.height ?? 630,
    alt: image?.alt ?? SITE_NAME,
  };
  return resolved;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  openGraph,
  twitter,
  image,
  keywords,
  robots,
  alternates,
  noIndex,
}: BuildMetadataOptions): Metadata {
  const canonicalUrl = absUrl(path);
  const resolvedImage = normaliseImage(image);

  const openGraphDefaults = {
    title,
    description,
    url: canonicalUrl,
    siteName: SITE_NAME,
    images: [resolvedImage],
  };

  const openGraphData: Metadata["openGraph"] = {
    ...openGraphDefaults,
    ...openGraph,
    images: openGraph?.images ?? openGraphDefaults.images,
  };

  const twitterData: Metadata["twitter"] = {
    ...twitter,
    card: twitter?.card ?? "summary_large_image",
    title: twitter?.title ?? title,
    description: twitter?.description ?? description,
    images: twitter?.images ?? [resolvedImage.url],
  };

  const canonicalAlternates: Metadata["alternates"] = {
    ...alternates,
    canonical: alternates?.canonical ?? canonicalUrl,
  };

  const keywordList = keywords?.length ? keywords : undefined;

  const robotDirectives =
    noIndex === true
      ? ({ index: false, follow: false } satisfies Metadata["robots"])
      : robots;

  return {
    title,
    description,
    alternates: canonicalAlternates,
    openGraph: openGraphData,
    twitter: twitterData,
    keywords: keywordList,
    robots: robotDirectives,
  };
}

/**
 * Utility to combine keyword arrays without duplicates.
 */
export function combineKeywords(...groups: Array<string[] | undefined>) {
  return Array.from(new Set(groups.flatMap((group) => group ?? [])));
}

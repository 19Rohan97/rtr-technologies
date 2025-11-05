import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "../../sanity/env";

const builder =
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset })
    : null;

export function urlForImage(source: SanityImageSource) {
  if (!builder || !source) return null;
  return builder.image(source);
}

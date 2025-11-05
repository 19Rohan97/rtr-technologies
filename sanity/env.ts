export const projectId = process.env.SANITY_PROJECT_ID || "1qb3o4q1";

export const dataset = process.env.SANITY_DATASET || "production";

export const apiVersion = process.env.SANITY_API_VERSION || "2025-01-01";

export const previewToken = process.env.SANITY_READ_TOKEN;

export const hasSanityConfig = Boolean(projectId && dataset);

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
  name: "default",
  title: "RTR Technologies Studio",
  projectId: projectId ?? "dummy",
  dataset: dataset ?? "production",
  apiVersion,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

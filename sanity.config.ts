import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

// For Studio (client-side), use NEXT_PUBLIC_* envs
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!projectId) {
  // Provide a clear error to help configuration
  // eslint-disable-next-line no-console
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Set it in your env for the Studio to work."
  );
}

const singletonTypes = new Set(["siteSettings"]);
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "default",
  title: "RTR Technologies CMS",
  projectId: projectId as string,
  dataset: dataset as string,
  basePath: "/admin",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.editor()
                  .id("siteSettings")
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            // All other document types
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "siteSettings"
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    // Hide “New document” option for singleton types in global create menu
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter((t) => !singletonTypes.has(t.templateId));
      }
      return prev;
    },
    // Limit actions for singleton types
    actions: (prev, { schemaType }) => {
      if (singletonTypes.has(schemaType)) {
        return prev.filter((actionItem) => {
          const action =
            typeof actionItem === "string" ? actionItem : actionItem.action;
          return action && singletonActions.has(action);
        });
      }
      return prev;
    },
  },
});

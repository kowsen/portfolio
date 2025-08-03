import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        tagline: z.string(),
        description: z.string(),
        link: z.string(),
        image: image(),
      }),
  }),
};

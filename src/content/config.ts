import { defineCollection, z } from "astro:content";

const listings = defineCollection({
  schema: z.object({
    title: z.string(),
    location: z.string().optional(),
    price: z.number().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { listings };

import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        category: z.string(),
        canva_link: z.string().optional(),
        order: z.number().default(0),
        layout_template: z.enum(['basic', 'side-by-side']).default('basic'),
    }),
});

export const collections = {
    'portfolio': portfolioCollection,
};

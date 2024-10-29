import { defineCollection, z } from 'astro:content'

export const collections = {
	products: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			priority: z.number(),
			url: z.string(),
			price: z.number(),
			features: z.array(z.string()),
		}),
	}),
	blog: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			date: z.date(),
		}),
	}),
}

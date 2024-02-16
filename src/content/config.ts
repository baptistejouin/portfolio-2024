import { z, defineCollection } from 'astro:content';

export const categories = ['web', 'software', '3d', 'design', 'other'] as const;

const customSchema = ({ image }) => z.object({
	title: z.string(),
	description: z.string(),
	tags: z.array(z.string()),
	date: z.date(),
	category: z.enum(categories),
	thumbnail: z.object({
		image: image(),
		alt: z.string(),
	}),
})

const worksCollection = defineCollection({
	type: 'content',
	schema: customSchema,
});

const labsCollection = defineCollection({
	type: 'content',
	schema: customSchema,
});

export const collections = {
	'works': worksCollection,
	'labs': labsCollection,
};
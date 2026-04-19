import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			category: z
				.enum([
					'Offensive Security',
					'Detection Engineering',
					'Threat Intelligence',
					'OSINT',
					'Cryptography',
					'Post-Quantum',
				])
				.optional(),
			tags: z.array(z.string()).default([]),
			cves: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			status: z.enum(['active', 'wip', 'archived']).default('active'),
			category: z
				.enum([
					'Software Engineering',
					'Offensive Security',
					'Detection Engineering',
					'Threat Intelligence',
					'OSINT',
					'Cryptography',
					'Post-Quantum',
				])
				.optional(),
			repo: z.string().url().optional(),
			demo: z.string().url().optional(),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
		}),
});

export const collections = { blog, projects };

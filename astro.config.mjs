// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { remarkAlert } from 'remark-github-blockquote-alert';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), pagefind()],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
		},
		remarkPlugins: [remarkAlert],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'append',
					properties: {
						className: ['heading-anchor'],
						ariaLabel: 'Link to this section',
					},
					content: {
						type: 'element',
						tagName: 'span',
						properties: { className: ['heading-anchor-icon'], ariaHidden: 'true' },
						children: [{ type: 'text', value: '#' }],
					},
				},
			],
		],
	},
});

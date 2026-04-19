import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { AUTHOR, CATEGORIES, SITE_TITLE, type CategoryName } from '../../consts';

const posts = (await getCollection('blog')).filter((p) => !p.data.draft);

function hexToRgb(hex: string): [number, number, number] {
	const h = hex.replace('#', '');
	return [
		Number.parseInt(h.slice(0, 2), 16),
		Number.parseInt(h.slice(2, 4), 16),
		Number.parseInt(h.slice(4, 6), 16),
	];
}

const pages = Object.fromEntries(
	posts.map((p) => [
		p.id,
		{
			title: p.data.title,
			description: p.data.description,
			category: p.data.category as CategoryName | undefined,
		},
	]),
);

export const { getStaticPaths, GET } = await OGImageRoute({
	param: 'slug',
	pages,
	getSlug: (path) => path,
	getImageOptions: (_, page) => {
		const accentColor: [number, number, number] = page.category
			? hexToRgb(CATEGORIES[page.category].color)
			: [184, 118, 58];
		return {
			title: page.title,
			description: page.description,
			bgGradient: [
				[8, 6, 4],
				[21, 16, 10],
			],
			border: { color: accentColor, width: 8, side: 'inline-start' },
			padding: 70,
			font: {
				title: { color: [255, 255, 255], size: 64, weight: 'Bold', lineHeight: 1.15 },
				description: { color: [180, 180, 180], size: 30, lineHeight: 1.35 },
			},
			logo: undefined,
			fonts: [
				'https://api.fontsource.org/v1/fonts/space-grotesk/latin-700-normal.ttf',
				'https://api.fontsource.org/v1/fonts/ibm-plex-sans/latin-400-normal.ttf',
			],
		};
	},
});

// Re-export for reference in templates
export { SITE_TITLE, AUTHOR };

export const SITE_TITLE = 'DEMOSEC';
export const SITE_DESCRIPTION =
	'Notes and research on offensive and defensive security, threat intelligence, OSINT, cryptography, and post-quantum.';
export const AUTHOR = 'John Doe';
export const AUTHOR_BIO =
	'Security researcher writing about offensive and defensive work — detection, exploitation, threat intel, and cryptography.';
export const SOCIAL = {
	github: 'https://github.com/',
	mastodon: 'https://infosec.exchange/',
};

export const CATEGORIES = {
	'Offensive Security': {
		slug: 'offensive-security',
		color: '#ec4899',
		bg: 'rgba(236, 72, 153, 0.10)',
		text: '#9d174d',
		description:
			'Exploitation, red teaming, tradecraft, and the attacker mindset — all the way to shell.',
	},
	'Detection Engineering': {
		slug: 'detection-engineering',
		color: '#3b82f6',
		bg: 'rgba(59, 130, 246, 0.10)',
		text: '#1e40af',
		description:
			'Building, testing, and tuning detections that survive contact with production.',
	},
	'Threat Intelligence': {
		slug: 'threat-intelligence',
		color: '#ef4444',
		bg: 'rgba(239, 68, 68, 0.10)',
		text: '#991b1b',
		description: 'Tracking actors, tooling, and campaigns to inform defense.',
	},
	OSINT: {
		slug: 'osint',
		color: '#f59e0b',
		bg: 'rgba(245, 158, 11, 0.12)',
		text: '#92400e',
		description: 'Open-source collection, verification, and tradecraft.',
	},
	Cryptography: {
		slug: 'cryptography',
		color: '#8b5cf6',
		bg: 'rgba(139, 92, 246, 0.10)',
		text: '#5b21b6',
		description: 'Applied cryptography, protocol internals, and implementation pitfalls.',
	},
	'Post-Quantum': {
		slug: 'post-quantum',
		color: '#14b8a6',
		bg: 'rgba(20, 184, 166, 0.10)',
		text: '#0f766e',
		description: 'NIST finalists, hybrid schemes, and the road to PQ migration.',
	},
} as const;

export type CategoryName = keyof typeof CATEGORIES;

export const PROJECT_CATEGORIES = {
	'Software Engineering': {
		slug: 'software-engineering',
		color: '#2db89a',
		bg: 'rgba(45, 184, 154, 0.10)',
		text: '#0f766e',
		description: 'General-purpose tools, libraries, and experiments outside the security domain.',
	},
	'Offensive Security': {
		slug: 'offensive-security',
		color: '#ec4899',
		bg: 'rgba(236, 72, 153, 0.10)',
		text: '#9d174d',
		description: 'Red team tooling, exploit development, and offensive tradecraft.',
	},
	'Detection Engineering': {
		slug: 'detection-engineering',
		color: '#3b82f6',
		bg: 'rgba(59, 130, 246, 0.10)',
		text: '#1e40af',
		description: 'Detection rules, telemetry pipelines, and hunting tooling.',
	},
	'Threat Intelligence': {
		slug: 'threat-intelligence',
		color: '#ef4444',
		bg: 'rgba(239, 68, 68, 0.10)',
		text: '#991b1b',
		description: 'Actor tracking, enrichment, and intel pipelines.',
	},
	OSINT: {
		slug: 'osint',
		color: '#f59e0b',
		bg: 'rgba(245, 158, 11, 0.12)',
		text: '#92400e',
		description: 'Open-source collection tools and verification helpers.',
	},
	Cryptography: {
		slug: 'cryptography',
		color: '#8b5cf6',
		bg: 'rgba(139, 92, 246, 0.10)',
		text: '#5b21b6',
		description: 'Crypto primitives, protocol implementations, and analysis tools.',
	},
	'Post-Quantum': {
		slug: 'post-quantum',
		color: '#14b8a6',
		bg: 'rgba(20, 184, 166, 0.10)',
		text: '#0f766e',
		description: 'PQ-related tooling, migration helpers, and experiments.',
	},
} as const;

export type ProjectCategoryName = keyof typeof PROJECT_CATEGORIES;

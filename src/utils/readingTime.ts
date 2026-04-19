import readingTime from 'reading-time';

export function getReadingTime(body: string | undefined): string {
	if (!body) return '1 min read';
	const stats = readingTime(body);
	const minutes = Math.max(1, Math.round(stats.minutes));
	return `${minutes} min read`;
}

interface BlogImage {
	src: string;
	alt: string;
}

export interface IBlogData {
	id: number;
	title: string;
	href: string;
	date: string; // ISO 8601 format (YYYY-MM-DD)
	author: string;
	excerpt: string;
	slug: string;
	tags: string[];
	readingTime: string;
	image: BlogImage;
	content: React.ReactNode;
}
